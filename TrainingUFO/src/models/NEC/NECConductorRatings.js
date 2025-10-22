import { NECLabelledDatum } from "./NECLabelledDatum";

export class NECConductorRating extends NECLabelledDatum { }

const _NECConductorRatings = {
    RATED_60: Object.freeze(new NECConductorRating("60", "60°C")),
    RATED_75: Object.freeze(new NECConductorRating("75", "75°C")),
    RATED_90: Object.freeze(new NECConductorRating("90", "90°C"))
};

_NECConductorRatings.ordered = [_NECConductorRatings.RATED_60, _NECConductorRatings.RATED_75, _NECConductorRatings.RATED_90];

export const NECConductorRatings = _NECConductorRatings; 