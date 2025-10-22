import { NEC } from "./NEC/_NEC";

export class AmpacityCalculator {
    constructor(installationMethod, conductorMaterial, wireGauge, insulationRating, conductorCount, ambientTemperature, terminalRating) {
        Object.assign(this, {
            installationMethod,
            conductorMaterial,
            wireGauge,
            insulationRating,
            conductorCount,
            ambientTemperature,
            terminalRating
        });
    }

    baseWireAmpacity(gauge = undefined, insulationRating = undefined) {
        return NEC.BaseWireAmpacities[this.conductorMaterial][this.installationMethod][gauge ?? this.wireGauge][insulationRating ?? this.insulationRating].value;
    }

    conductorCountMultiplier() {
        return NEC.ConductorCountMultipliers[this.conductorCount].multiplier.value;
    }

    temperatureCorrectionFactor() {
        return NEC.TemperatureCorrectionFactors[this.ambientTemperature][this.insulationRating].value;
    }

    adjustedWireAmpacity(gauge = undefined) {
        return this.baseWireAmpacity(gauge) * this.conductorCountMultiplier() * this.temperatureCorrectionFactor();
    }

    terminalAmpacity(gauge = undefined) {
        return NEC.BaseWireAmpacities[this.conductorMaterial][NEC.InstallationMethods.RACEWAY][gauge ?? this.wireGauge][this.terminalRating].value;
    }

    adjustedCircuitAmpacity(gauge = undefined) {
        return Math.min(this.adjustedWireAmpacity(gauge), this.terminalAmpacity(gauge));
    }

    usableCircuitAmpacity(gauge = undefined) {
        return Math.min(this.adjustedCircuitAmpacity(gauge), this.maximumAllowableOCPD(gauge));
    }

    usableContinuousCircuitAmpacity(gauge = undefined) {
        return this.usableCircuitAmpacity(gauge) * 0.8;
    }

    nextSizeUpRule(gauge = undefined) {
        return NEC.StandardOCPDSizes.nextSizeUpRule(this.adjustedCircuitAmpacity(gauge))?.value;
    }

    smallConductorsRule(gauge = undefined) {
        return NEC.SmallConductorsRule[this.conductorMaterial][gauge ?? this.wireGauge]?.value;
    }

    maximumAllowableOCPD(gauge = undefined) {
        const nextSizeUp = this.nextSizeUpRule(gauge);
        const smallConductorsRule = this.smallConductorsRule(gauge);

        if (nextSizeUp && smallConductorsRule)
            return Math.min(nextSizeUp, smallConductorsRule);

        return nextSizeUp ?? smallConductorsRule;
    }
    
    tooHot() {
        return !this.temperatureCorrectionFactor();
    }

    getAllValidWireGauges(insulationRating = null) {
        return NEC.WireGauges.ordered.filter(gauge => {
            return this.baseWireAmpacity(gauge, insulationRating)
        });
    }
}