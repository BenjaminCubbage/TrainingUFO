import { deepFreeze } from "@/util/deepFreeze";
import { NECLabelledDatum } from "./NECLabelledDatum";

export class NECStandardOCPDSize extends NECLabelledDatum { }

const _NECStandardOCPDSizes = {
    OCPD_10:   new NECStandardOCPDSize(10, "10A"),
    OCPD_15:   new NECStandardOCPDSize(15, "15A"),
    OCPD_20:   new NECStandardOCPDSize(20, "20A"),
    OCPD_25:   new NECStandardOCPDSize(25, "25A"),
    OCPD_30:   new NECStandardOCPDSize(30, "30A"),
    OCPD_35:   new NECStandardOCPDSize(35, "35A"),
    OCPD_40:   new NECStandardOCPDSize(40, "40A"),
    OCPD_45:   new NECStandardOCPDSize(45, "45A"),
    OCPD_50:   new NECStandardOCPDSize(50, "50A"),
    OCPD_60:   new NECStandardOCPDSize(60, "60A"),
    OCPD_70:   new NECStandardOCPDSize(70, "70A"),
    OCPD_80:   new NECStandardOCPDSize(80, "80A"),
    OCPD_90:   new NECStandardOCPDSize(90, "90A"),
    OCPD_100:  new NECStandardOCPDSize(100, "100A"),
    OCPD_110:  new NECStandardOCPDSize(110, "110A"),
    OCPD_125:  new NECStandardOCPDSize(125, "125A"),
    OCPD_150:  new NECStandardOCPDSize(150, "150A"),
    OCPD_175:  new NECStandardOCPDSize(175, "175A"),
    OCPD_200:  new NECStandardOCPDSize(200, "200A"),
    OCPD_225:  new NECStandardOCPDSize(225, "225A"),
    OCPD_250:  new NECStandardOCPDSize(250, "250A"),
    OCPD_300:  new NECStandardOCPDSize(300, "300A"),
    OCPD_350:  new NECStandardOCPDSize(350, "350A"),
    OCPD_400:  new NECStandardOCPDSize(400, "400A"),
    OCPD_450:  new NECStandardOCPDSize(450, "450A"),
    OCPD_500:  new NECStandardOCPDSize(500, "500A"),
    OCPD_600:  new NECStandardOCPDSize(600, "600A"),
    OCPD_700:  new NECStandardOCPDSize(700, "700A"),
    OCPD_800:  new NECStandardOCPDSize(800, "800A"),
    OCPD_1000: new NECStandardOCPDSize(1000, "1000A"),
    OCPD_1200: new NECStandardOCPDSize(1200, "1200A"),
    OCPD_1600: new NECStandardOCPDSize(1600, "1600A"),
    OCPD_2000: new NECStandardOCPDSize(2000, "2000A"),
    OCPD_2500: new NECStandardOCPDSize(2500, "2500A"),
    OCPD_3000: new NECStandardOCPDSize(3000, "3000A"),
    OCPD_4000: new NECStandardOCPDSize(4000, "4000A"),
    OCPD_5000: new NECStandardOCPDSize(5000, "5000A"),
    OCPD_6000: new NECStandardOCPDSize(6000, "6000A"),
    nextSizeUpRule(ampacity) {
        if (!ampacity || ampacity < 0)
            return undefined;

        return this.ordered.filter(s => s.value <= 800).find(s => s.value >= ampacity);
    }
};

_NECStandardOCPDSizes.ordered = [
    _NECStandardOCPDSizes.OCPD_10, 
    _NECStandardOCPDSizes.OCPD_15, 
    _NECStandardOCPDSizes.OCPD_20, 
    _NECStandardOCPDSizes.OCPD_25, 
    _NECStandardOCPDSizes.OCPD_30, 
    _NECStandardOCPDSizes.OCPD_35, 
    _NECStandardOCPDSizes.OCPD_40, 
    _NECStandardOCPDSizes.OCPD_45, 
    _NECStandardOCPDSizes.OCPD_50, 
    _NECStandardOCPDSizes.OCPD_60, 
    _NECStandardOCPDSizes.OCPD_70, 
    _NECStandardOCPDSizes.OCPD_80, 
    _NECStandardOCPDSizes.OCPD_90, 
    _NECStandardOCPDSizes.OCPD_100, 
    _NECStandardOCPDSizes.OCPD_110, 
    _NECStandardOCPDSizes.OCPD_125, 
    _NECStandardOCPDSizes.OCPD_150, 
    _NECStandardOCPDSizes.OCPD_175, 
    _NECStandardOCPDSizes.OCPD_200, 
    _NECStandardOCPDSizes.OCPD_225, 
    _NECStandardOCPDSizes.OCPD_250, 
    _NECStandardOCPDSizes.OCPD_300, 
    _NECStandardOCPDSizes.OCPD_350, 
    _NECStandardOCPDSizes.OCPD_400, 
    _NECStandardOCPDSizes.OCPD_450, 
    _NECStandardOCPDSizes.OCPD_500, 
    _NECStandardOCPDSizes.OCPD_600, 
    _NECStandardOCPDSizes.OCPD_700, 
    _NECStandardOCPDSizes.OCPD_800, 
    _NECStandardOCPDSizes.OCPD_1000, 
    _NECStandardOCPDSizes.OCPD_1200, 
    _NECStandardOCPDSizes.OCPD_1600, 
    _NECStandardOCPDSizes.OCPD_2000, 
    _NECStandardOCPDSizes.OCPD_2500, 
    _NECStandardOCPDSizes.OCPD_3000, 
    _NECStandardOCPDSizes.OCPD_4000, 
    _NECStandardOCPDSizes.OCPD_5000, 
    _NECStandardOCPDSizes.OCPD_6000
];

_NECStandardOCPDSizes.nextSizeUpRule = function(ampacity) {
    if (!ampacity || ampacity < 0)
        return undefined;

    return this.ordered.filter(s => s.value <= 800).find(s => s.value >= ampacity);
}

export const NECStandardOCPDSizes = _NECStandardOCPDSizes;