import { deepFreeze } from "@/util/deepFreeze";
import { NECWireGauges } from "./NECWireGauges";
import { NECLabelledDatum } from "./NECLabelledDatum";
import { NECConductorMaterials } from "./NECConductorMaterials";

export class NECOCPDRating extends NECLabelledDatum { }

export const NECSmallConductorsRule = deepFreeze({
    [NECConductorMaterials.COPPER]: {
        [NECWireGauges.GAUGE_18]:    new NECOCPDRating(7, "7A"),
        [NECWireGauges.GAUGE_16]:    new NECOCPDRating(10, "10A"),
        [NECWireGauges.GAUGE_14]:    new NECOCPDRating(15, "15A"),
        [NECWireGauges.GAUGE_12]:    new NECOCPDRating(20, "20A"),
        [NECWireGauges.GAUGE_10]:    new NECOCPDRating(30, "30A")
    },
    [NECConductorMaterials.ALUMINUM]: {
        [NECWireGauges.GAUGE_12]:    new NECOCPDRating(15, "15A"),
        [NECWireGauges.GAUGE_10]:    new NECOCPDRating(25, "25A") 
    }
});