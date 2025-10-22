import { deepFreeze } from "../../util/deepFreeze";
import { NECLabelledDatum } from "./NECLabelledDatum";

export class NECAmbientTemperature {
    celsius;
    fahrenheit;

    constructor(celsius, fahrenheit) {
        this.celsius    = celsius;
        this.fahrenheit = fahrenheit;
    }

    toString() {
        return this.celsius.toString();
    }
}

const _NECAmbientTemperatures = {
    C10_OR_LESS: new NECAmbientTemperature(
        new NECLabelledDatum("10 or less", "10°C or less"),
        new NECLabelledDatum("50 or less", "50°F or less")),
    C11_TO_15: new NECAmbientTemperature(
        new NECLabelledDatum("11–15", "11–15°C"),
        new NECLabelledDatum("51–59", "51–59°F")),
    C16_TO_20: new NECAmbientTemperature(
        new NECLabelledDatum("15–20", "15–20°C"),
        new NECLabelledDatum("60–68", "60–68°F")),
    C21_TO_25: new NECAmbientTemperature(
        new NECLabelledDatum("21–25", "21–25°C"),
        new NECLabelledDatum("69–77", "69–77°F")),
    C26_TO_30: new NECAmbientTemperature(
        new NECLabelledDatum("26–30", "26–30°C"),
        new NECLabelledDatum("78–86", "78–86°F")),
    C31_TO_35: new NECAmbientTemperature(
        new NECLabelledDatum("31–35", "31–35°C"),
        new NECLabelledDatum("87–95", "87–95°F")),
    C36_TO_40: new NECAmbientTemperature(
        new NECLabelledDatum("36–40", "36–40°C"),
        new NECLabelledDatum("96–104", "96–104°F")),
    C41_TO_45: new NECAmbientTemperature(
        new NECLabelledDatum("41–45", "41–45°C"),
        new NECLabelledDatum("105–113", "105–113°F")),
    C46_TO_50: new NECAmbientTemperature(
        new NECLabelledDatum("46–50", "46–50°C"),
        new NECLabelledDatum("114–122", "114–122°F")),
    C51_TO_55: new NECAmbientTemperature(
        new NECLabelledDatum("51–55", "51–55°C"),
        new NECLabelledDatum("123–131", "123–131°F")),
    C56_TO_60: new NECAmbientTemperature(
        new NECLabelledDatum("55–60", "55–60°C"),
        new NECLabelledDatum("132–140", "132–140°F")),
    C61_TO_65: new NECAmbientTemperature(
        new NECLabelledDatum("61–65", "61–65°C"),
        new NECLabelledDatum("141–149", "141–149°F")),
    C66_TO_70: new NECAmbientTemperature(
        new NECLabelledDatum("66–70", "66–70°C"),
        new NECLabelledDatum("150–158", "150–158°F")),
    C71_TO_75: new NECAmbientTemperature(
        new NECLabelledDatum("71–75", "71–75°C"),
        new NECLabelledDatum("159–167", "159–167°F")),
    C76_TO_80: new NECAmbientTemperature(
        new NECLabelledDatum("76–80", "76–80°C"),
        new NECLabelledDatum("168–176", "168–176°F")),
    C81_TO_85: new NECAmbientTemperature(
        new NECLabelledDatum("81–85", "81–85°C"),
        new NECLabelledDatum("177–185", "177–185°F"))
};

_NECAmbientTemperatures.ordered = [
    _NECAmbientTemperatures.C10_OR_LESS,
    _NECAmbientTemperatures.C11_TO_15, 
    _NECAmbientTemperatures.C16_TO_20, 
    _NECAmbientTemperatures.C21_TO_25, 
    _NECAmbientTemperatures.C26_TO_30, 
    _NECAmbientTemperatures.C31_TO_35, 
    _NECAmbientTemperatures.C36_TO_40, 
    _NECAmbientTemperatures.C41_TO_45, 
    _NECAmbientTemperatures.C46_TO_50,
    _NECAmbientTemperatures.C51_TO_55, 
    _NECAmbientTemperatures.C56_TO_60, 
    _NECAmbientTemperatures.C61_TO_65, 
    _NECAmbientTemperatures.C66_TO_70, 
    _NECAmbientTemperatures.C71_TO_75, 
    _NECAmbientTemperatures.C76_TO_80, 
    _NECAmbientTemperatures.C81_TO_85
];

export const NECAmbientTemperatures = _NECAmbientTemperatures;