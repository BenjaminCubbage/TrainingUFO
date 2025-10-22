import { deepFreeze } from "@/util/deepFreeze";
import { NECAmbientTemperature, NECAmbientTemperatures } from "./NECAmbientTemperatures";
import { NECBaseWireAmpacities, NECBaseWireAmpacity } from "./NECBaseWireAmpacities";
import { NECConductorCountMultiplier, NECConductorCountMultipliers } from "./NECConductorCountMultipliers";
import { NECConductorCount, NECConductorCounts } from "./NECConductorCounts";
import { NECConductorMaterial, NECConductorMaterials } from "./NECConductorMaterials";
import { NECConductorRating, NECConductorRatings } from "./NECConductorRatings";
import { NECInstallationMethod, NECInstallationMethods } from "./NECInstallationMethods";
import { NECLabelledDatum } from "./NECLabelledDatum";
import { NECSmallConductorsRule } from "./NECSmallConductorsRule";
import { NECStandardOCPDSize, NECStandardOCPDSizes } from "./NECStandardOCPDSizes";
import { NECTemperatureCorrectionFactor, NECTemperatureCorrectionFactors } from "./NECTemperatureCorrectionFactors";
import { NECWireGauge, NECWireGauges } from "./NECWireGauges";

export const NEC = deepFreeze({
    AmbientTemperature: NECAmbientTemperature,
    AmbientTemperatures: NECAmbientTemperatures,
    BaseWireAmpacity: NECBaseWireAmpacity,
    BaseWireAmpacities: NECBaseWireAmpacities,
    ConductorCountMultiplier: NECConductorCountMultiplier,
    ConductorCountMultipliers: NECConductorCountMultipliers,
    ConductorCount: NECConductorCount,
    ConductorCounts: NECConductorCounts,
    ConductorMaterial: NECConductorMaterial,
    ConductorMaterials: NECConductorMaterials,
    ConductorRating: NECConductorRating,
    ConductorRatings: NECConductorRatings,
    InstallationMethod: NECInstallationMethod,
    InstallationMethods: NECInstallationMethods,
    LabelledDatum: NECLabelledDatum,
    SmallConductorsRule: NECSmallConductorsRule,
    StandardOCPDSize: NECStandardOCPDSize,
    StandardOCPDSizes: NECStandardOCPDSizes,
    TemperatureCorrectionFactor: NECTemperatureCorrectionFactor,
    TemperatureCorrectionFactors: NECTemperatureCorrectionFactors,
    WireGauge: NECWireGauge,
    WireGauges: NECWireGauges
});