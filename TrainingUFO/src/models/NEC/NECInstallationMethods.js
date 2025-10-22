import { NECLabelledDatum } from "./NECLabelledDatum";

export class NECInstallationMethod extends NECLabelledDatum { }

const _NECInstallationMethods = {
    RACEWAY:            Object.freeze(new NECInstallationMethod("Raceway, Cable, or Earth")),
    FREE_AIR_INSULATED: Object.freeze(new NECInstallationMethod("Free Air (Insulated)")),
    FREE_AIR_BARE:      Object.freeze(new NECInstallationMethod("Free Air (Bare)")),
    FREE_AIR_COVERED:   Object.freeze(new NECInstallationMethod("Free Air (Covered)"))
};

_NECInstallationMethods.ordered = [ 
    _NECInstallationMethods.RACEWAY, 
    _NECInstallationMethods.FREE_AIR_INSULATED, 
    // I will add these back probably never
    // _NECInstallationMethods.FREE_AIR_BARE, 
    // _NECInstallationMethods.FREE_AIR_COVERED 
];

export const NECInstallationMethods = _NECInstallationMethods;