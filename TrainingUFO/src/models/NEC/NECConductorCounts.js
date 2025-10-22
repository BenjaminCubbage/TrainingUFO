import { NECLabelledDatum } from "./NECLabelledDatum";

export class NECConductorCount extends NECLabelledDatum { }

const _NECConductorCounts = {
    COUNT_1_TO_3:     Object.freeze(new NECConductorCount("1–3",   "1 to 3")),
    COUNT_4_TO_6:     Object.freeze(new NECConductorCount("4–6",   "4 to 6")),
    COUNT_7_TO_9:     Object.freeze(new NECConductorCount("7–9",   "7 to 9")),
    COUNT_10_TO_20:   Object.freeze(new NECConductorCount("10–20", "10 to 20")),
    COUNT_21_TO_30:   Object.freeze(new NECConductorCount("21–30", "21 to 30")),
    COUNT_31_TO_40:   Object.freeze(new NECConductorCount("31–40", "31 to 40")),
    COUNT_41_OR_MORE: Object.freeze(new NECConductorCount("41+",   "41 or more"))
};

_NECConductorCounts.ordered = [
    _NECConductorCounts.COUNT_1_TO_3, 
    _NECConductorCounts.COUNT_4_TO_6, 
    _NECConductorCounts.COUNT_7_TO_9, 
    _NECConductorCounts.COUNT_10_TO_20, 
    _NECConductorCounts.COUNT_21_TO_30, 
    _NECConductorCounts.COUNT_31_TO_40, 
    _NECConductorCounts.COUNT_41_OR_MORE
];

export const NECConductorCounts = _NECConductorCounts;