import { NECConductorRatings } from "./NECConductorRatings";
import { NECLabelledDatum } from "./NECLabelledDatum";
import { NECAmbientTemperatures } from "./NECAmbientTemperatures";
import { deepFreeze } from "@/util/deepFreeze";


export class NECTemperatureCorrectionFactor {
    ambientTemperature;

    constructor(ambientTemperature, rated60, rated75, rated90) {
        this.ambientTemperature = ambientTemperature;

        this[NECConductorRatings.RATED_60] = rated60;
        this[NECConductorRatings.RATED_75] = rated75;
        this[NECConductorRatings.RATED_90] = rated90;
    }
}

export const NECTemperatureCorrectionFactors = deepFreeze({
    [NECAmbientTemperatures.C10_OR_LESS]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C10_OR_LESS,
        new NECLabelledDatum(1.29, "1.29"),
        new NECLabelledDatum(1.20, "1.20"),
        new NECLabelledDatum(1.15, "1.15")
    ),
    [NECAmbientTemperatures.C11_TO_15]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C11_TO_15,
        new NECLabelledDatum(1.22, "1.22"),
        new NECLabelledDatum(1.15, "1.15"),
        new NECLabelledDatum(1.12, "1.12")
    ),
    [NECAmbientTemperatures.C16_TO_20]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C16_TO_20,
        new NECLabelledDatum(1.15, "1.15"),
        new NECLabelledDatum(1.11, "1.11"),
        new NECLabelledDatum(1.08, "1.08")
    ),
    [NECAmbientTemperatures.C21_TO_25]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C21_TO_25,
        new NECLabelledDatum(1.08, "1.08"),
        new NECLabelledDatum(1.05, "1.05"),
        new NECLabelledDatum(1.04, "1.04")
    ),
    [NECAmbientTemperatures.C26_TO_30]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C26_TO_30,
        new NECLabelledDatum(1.00, "1.00"),
        new NECLabelledDatum(1.00, "1.00"),
        new NECLabelledDatum(1.00, "1.00")
    ),
    [NECAmbientTemperatures.C31_TO_35]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C31_TO_35,
        new NECLabelledDatum(0.91, "0.91"),
        new NECLabelledDatum(0.94, "0.94"),
        new NECLabelledDatum(0.96, "0.96")
    ),
    [NECAmbientTemperatures.C36_TO_40]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C36_TO_40,
        new NECLabelledDatum(0.82, "0.82"),
        new NECLabelledDatum(0.88, "0.88"),
        new NECLabelledDatum(0.91, "0.91")
    ),
    [NECAmbientTemperatures.C41_TO_45]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C41_TO_45,
        new NECLabelledDatum(0.71, "0.71"),
        new NECLabelledDatum(0.82, "0.82"),
        new NECLabelledDatum(0.87, "0.87")
    ),
    [NECAmbientTemperatures.C46_TO_50]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C46_TO_50,
        new NECLabelledDatum(0.58, "0.58"),
        new NECLabelledDatum(0.75, "0.75"),
        new NECLabelledDatum(0.82, "0.82")
    ),
    [NECAmbientTemperatures.C51_TO_55]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C51_TO_55,
        new NECLabelledDatum(0.41, "0.41"),
        new NECLabelledDatum(0.67, "0.67"),
        new NECLabelledDatum(0.76, "0.76")
    ),
    [NECAmbientTemperatures.C56_TO_60]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C56_TO_60,
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.58, "0.58"),
        new NECLabelledDatum(0.71, "0.71")
    ),
    [NECAmbientTemperatures.C61_TO_65]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C61_TO_65,
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.47, "0.47"),
        new NECLabelledDatum(0.65, "0.65")
    ),
    [NECAmbientTemperatures.C66_TO_70]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C66_TO_70,
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.33, "0.33"),
        new NECLabelledDatum(0.58, "0.58")
    ),
    [NECAmbientTemperatures.C71_TO_75]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C71_TO_75,
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.50, "0.50")
    ),
    [NECAmbientTemperatures.C76_TO_80]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C76_TO_80,
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.41, "0.41")
    ),
    [NECAmbientTemperatures.C81_TO_85]: new NECTemperatureCorrectionFactor(
        NECAmbientTemperatures.C81_TO_85,
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.00, "—"),
        new NECLabelledDatum(0.29, "0.29")
    )
});