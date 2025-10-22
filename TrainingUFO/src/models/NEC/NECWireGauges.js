import { deepFreeze } from "@/util/deepFreeze";
import { NECLabelledDatum } from "./NECLabelledDatum";
export class NECWireGauge extends NECLabelledDatum { }


const _NECWireGauges = {
    GAUGE_18:   new NECWireGauge("18",  "18 AWG"),
    GAUGE_16:   new NECWireGauge("16",  "16 AWG"),
    GAUGE_14:   new NECWireGauge("14",  "14 AWG"),
    GAUGE_12:   new NECWireGauge("12",  "12 AWG"),
    GAUGE_10:   new NECWireGauge("10",  "10 AWG"),
    GAUGE_8:    new NECWireGauge("8",   "8 AWG"),
    GAUGE_6:    new NECWireGauge("6",   "6 AWG"),
    GAUGE_4:    new NECWireGauge("4",   "4 AWG"),
    GAUGE_3:    new NECWireGauge("3",   "3 AWG"),
    GAUGE_2:    new NECWireGauge("2",   "2 AWG"),
    GAUGE_1:    new NECWireGauge("1",   "1 AWG"),
    GAUGE_0:    new NECWireGauge("1/0", "1/0 AWG"),
    GAUGE_00:   new NECWireGauge("2/0", "2/0 AWG"),
    GAUGE_000:  new NECWireGauge("3/0", "3/0 AWG"),
    GAUGE_0000: new NECWireGauge("4/0", "4/0 AWG")
};


_NECWireGauges.ordered = [ 
    _NECWireGauges.GAUGE_14, 
    _NECWireGauges.GAUGE_12, 
    _NECWireGauges.GAUGE_10, 
    _NECWireGauges.GAUGE_8, 
    _NECWireGauges.GAUGE_6, 
    _NECWireGauges.GAUGE_4,
    _NECWireGauges.GAUGE_3, 
    _NECWireGauges.GAUGE_2, 
    _NECWireGauges.GAUGE_1, 
    _NECWireGauges.GAUGE_0, 
    _NECWireGauges.GAUGE_00, 
    _NECWireGauges.GAUGE_000,
    _NECWireGauges.GAUGE_0000
];


_NECWireGauges.sizeDown = function(gauge) {
    if (!gauge)
        return null;

    const index = this.ordered.indexOf(gauge);
    if (index === -1 || index === 0)
        return null;

    return this.ordered[index - 1];
}


_NECWireGauges.sizeUp = function(gauge) {
    if (!gauge)
        return null;

    const index = this.ordered.indexOf(gauge);
    if (index === -1 || index === this.ordered.length - 1)
        return null;

    return this.ordered[index + 1];
}


export const NECWireGauges = deepFreeze(_NECWireGauges);