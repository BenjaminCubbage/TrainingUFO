import { deepFreeze } from "@/util/deepFreeze";
import { NECLabelledDatum } from "./NECLabelledDatum";

export class NECConductorMaterial extends NECLabelledDatum { }

const _NECConductorMaterials = {
    COPPER:   new NECConductorMaterial("Copper"),
    ALUMINUM: new NECConductorMaterial("Aluminum")
};

_NECConductorMaterials.ordered = [ 
    _NECConductorMaterials.COPPER, 
    _NECConductorMaterials.ALUMINUM 
];

export const NECConductorMaterials = _NECConductorMaterials;