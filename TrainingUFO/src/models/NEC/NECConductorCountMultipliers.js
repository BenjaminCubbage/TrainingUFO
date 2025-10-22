import { NECConductorCounts } from "./NECConductorCounts";
import { NECLabelledDatum } from "./NECLabelledDatum";
import { deepFreeze } from "../../util/deepFreeze";

export class NECConductorCountMultiplier {
    conductorCount;
    multiplier;

    constructor(conductorCount, multiplier) {
        this.conductorCount = conductorCount;
        this.multiplier = multiplier;
    }
}

export const NECConductorCountMultipliers = deepFreeze({
    [NECConductorCounts.COUNT_1_TO_3]:     new NECConductorCountMultiplier(NECConductorCounts.COUNT_1_TO_3,     new NECLabelledDatum(1.00, "100%")),
    [NECConductorCounts.COUNT_4_TO_6]:     new NECConductorCountMultiplier(NECConductorCounts.COUNT_4_TO_6,     new NECLabelledDatum(0.80, "80%")),
    [NECConductorCounts.COUNT_7_TO_9]:     new NECConductorCountMultiplier(NECConductorCounts.COUNT_7_TO_9,     new NECLabelledDatum(0.70, "70%")),
    [NECConductorCounts.COUNT_10_TO_20]:   new NECConductorCountMultiplier(NECConductorCounts.COUNT_10_TO_20,   new NECLabelledDatum(0.50, "50%")),
    [NECConductorCounts.COUNT_21_TO_30]:   new NECConductorCountMultiplier(NECConductorCounts.COUNT_21_TO_30,   new NECLabelledDatum(0.45, "45%")),
    [NECConductorCounts.COUNT_31_TO_40]:   new NECConductorCountMultiplier(NECConductorCounts.COUNT_31_TO_40,   new NECLabelledDatum(0.40, "40%")),
    [NECConductorCounts.COUNT_41_OR_MORE]: new NECConductorCountMultiplier(NECConductorCounts.COUNT_41_OR_MORE, new NECLabelledDatum(0.35, "35%")),
    labels() {
        return NECConductorCounts.ordered.map(count => [ this[count].conductorCount.label, this[count].multiplier.label ]);
    }
});