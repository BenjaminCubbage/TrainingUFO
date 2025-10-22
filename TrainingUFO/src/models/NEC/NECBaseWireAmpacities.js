import { NECWireGauges } from "./NECWireGauges";
import { NECConductorRatings } from "./NECConductorRatings";
import { NECInstallationMethods } from "./NECInstallationMethods";
import { NECLabelledDatum } from "./NECLabelledDatum";
import { deepFreeze } from "@/util/deepFreeze";
import { NECConductorMaterials } from "./NECConductorMaterials";

export class NECBaseWireAmpacity {
    gauge;

    constructor(gauge, ampacity60, ampacity75, ampacity90) {
        this.gauge = gauge;
        this[NECConductorRatings.RATED_60] = ampacity60;
        this[NECConductorRatings.RATED_75] = ampacity75;
        this[NECConductorRatings.RATED_90] = ampacity90;
    }
}

export class NECBaseUninsulatedWireAmpacity extends NECBaseWireAmpacity {
    ampacity;

    constructor(gauge, ampacity) {
        super(gauge, ampacity, ampacity, ampacity);
        this.ampacity = ampacity;
    }
}

export const NECBaseWireAmpacities = deepFreeze({
    [NECConductorMaterials.COPPER]: {
        [NECInstallationMethods.RACEWAY]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(14)),
            [NECWireGauges.GAUGE_16]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(18)),
            [NECWireGauges.GAUGE_14]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(15),     new NECLabelledDatum(20),     new NECLabelledDatum(25)),
            [NECWireGauges.GAUGE_12]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(20),     new NECLabelledDatum(25),     new NECLabelledDatum(30)),
            [NECWireGauges.GAUGE_10]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(30),     new NECLabelledDatum(35),     new NECLabelledDatum(40)),
            [NECWireGauges.GAUGE_8]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(40),     new NECLabelledDatum(50),     new NECLabelledDatum(55)),
            [NECWireGauges.GAUGE_6]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(55),     new NECLabelledDatum(65),     new NECLabelledDatum(75)),
            [NECWireGauges.GAUGE_4]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(70),     new NECLabelledDatum(85),     new NECLabelledDatum(95)),
            [NECWireGauges.GAUGE_3]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(85),     new NECLabelledDatum(100),    new NECLabelledDatum(115)),
            [NECWireGauges.GAUGE_2]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(95),     new NECLabelledDatum(115),    new NECLabelledDatum(130)),
            [NECWireGauges.GAUGE_1]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(110),    new NECLabelledDatum(130),    new NECLabelledDatum(145)),
            [NECWireGauges.GAUGE_0]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(125),    new NECLabelledDatum(150),    new NECLabelledDatum(170)),
            [NECWireGauges.GAUGE_00]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(145),    new NECLabelledDatum(175),    new NECLabelledDatum(195)),
            [NECWireGauges.GAUGE_000]:  new NECBaseWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(165),    new NECLabelledDatum(200),    new NECLabelledDatum(225)),
            [NECWireGauges.GAUGE_0000]: new NECBaseWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(195),    new NECLabelledDatum(230),    new NECLabelledDatum(260))
        },
        [NECInstallationMethods.FREE_AIR_INSULATED]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(18)),
            [NECWireGauges.GAUGE_16]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(24)),
            [NECWireGauges.GAUGE_14]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(25),     new NECLabelledDatum(30),     new NECLabelledDatum(35)),
            [NECWireGauges.GAUGE_12]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(30),     new NECLabelledDatum(35),     new NECLabelledDatum(40)),
            [NECWireGauges.GAUGE_10]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(40),     new NECLabelledDatum(50),     new NECLabelledDatum(55)),
            [NECWireGauges.GAUGE_8]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(60),     new NECLabelledDatum(70),     new NECLabelledDatum(80)),
            [NECWireGauges.GAUGE_6]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(80),     new NECLabelledDatum(95),     new NECLabelledDatum(105)),
            [NECWireGauges.GAUGE_4]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(105),    new NECLabelledDatum(125),    new NECLabelledDatum(140)),
            [NECWireGauges.GAUGE_3]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(120),    new NECLabelledDatum(145),    new NECLabelledDatum(165)),
            [NECWireGauges.GAUGE_2]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(140),    new NECLabelledDatum(170),    new NECLabelledDatum(190)),
            [NECWireGauges.GAUGE_1]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(165),    new NECLabelledDatum(195),    new NECLabelledDatum(220)),
            [NECWireGauges.GAUGE_0]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(195),    new NECLabelledDatum(230),    new NECLabelledDatum(260)),
            [NECWireGauges.GAUGE_00]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(225),    new NECLabelledDatum(265),    new NECLabelledDatum(300)),
            [NECWireGauges.GAUGE_000]:  new NECBaseWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(260),    new NECLabelledDatum(310),    new NECLabelledDatum(350)),
            [NECWireGauges.GAUGE_0000]: new NECBaseWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(300),    new NECLabelledDatum(360),    new NECLabelledDatum(405))
        },
        [NECInstallationMethods.FREE_AIR_BARE]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_16]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_14]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_12]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_10]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_8]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(98)),
            [NECWireGauges.GAUGE_6]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(124)),
            [NECWireGauges.GAUGE_4]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(155)),
            [NECWireGauges.GAUGE_3]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_2]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(209)),
            [NECWireGauges.GAUGE_1]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_0]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(282)),
            [NECWireGauges.GAUGE_00]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(329)),
            [NECWireGauges.GAUGE_000]:  new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(382)),
            [NECWireGauges.GAUGE_0000]: new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(444))
        },
        [NECInstallationMethods.FREE_AIR_COVERED]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_16]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_14]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_12]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_10]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_8]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(103)),
            [NECWireGauges.GAUGE_6]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(130)),
            [NECWireGauges.GAUGE_4]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(163)),
            [NECWireGauges.GAUGE_3]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_2]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(219)),
            [NECWireGauges.GAUGE_1]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_0]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(297)),
            [NECWireGauges.GAUGE_00]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(344)),
            [NECWireGauges.GAUGE_000]:  new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(401)),
            [NECWireGauges.GAUGE_0000]: new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(466))
        }
    },
    [NECConductorMaterials.ALUMINUM]: {
        [NECInstallationMethods.RACEWAY]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_16]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_14]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_12]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(15),     new NECLabelledDatum(20),     new NECLabelledDatum(25)),
            [NECWireGauges.GAUGE_10]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(25),     new NECLabelledDatum(30),     new NECLabelledDatum(35)),
            [NECWireGauges.GAUGE_8]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(35),     new NECLabelledDatum(40),     new NECLabelledDatum(45)),
            [NECWireGauges.GAUGE_6]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(40),     new NECLabelledDatum(50),     new NECLabelledDatum(55)),
            [NECWireGauges.GAUGE_4]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(55),     new NECLabelledDatum(65),     new NECLabelledDatum(75)),
            [NECWireGauges.GAUGE_3]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(65),     new NECLabelledDatum(75),     new NECLabelledDatum(85)),
            [NECWireGauges.GAUGE_2]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(75),     new NECLabelledDatum(90),     new NECLabelledDatum(100)),
            [NECWireGauges.GAUGE_1]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(85),     new NECLabelledDatum(100),    new NECLabelledDatum(115)),
            [NECWireGauges.GAUGE_0]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(100),    new NECLabelledDatum(120),    new NECLabelledDatum(135)),
            [NECWireGauges.GAUGE_00]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(115),    new NECLabelledDatum(135),    new NECLabelledDatum(150)),
            [NECWireGauges.GAUGE_000]:  new NECBaseWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(130),    new NECLabelledDatum(155),    new NECLabelledDatum(175)),
            [NECWireGauges.GAUGE_0000]: new NECBaseWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(150),    new NECLabelledDatum(180),    new NECLabelledDatum(205))
        },
        [NECInstallationMethods.FREE_AIR_INSULATED]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_16]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_14]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—"), new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_12]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(25),     new NECLabelledDatum(30),     new NECLabelledDatum(35)),
            [NECWireGauges.GAUGE_10]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(35),     new NECLabelledDatum(40),     new NECLabelledDatum(45)),
            [NECWireGauges.GAUGE_8]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(45),     new NECLabelledDatum(55),     new NECLabelledDatum(60)),
            [NECWireGauges.GAUGE_6]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(60),     new NECLabelledDatum(75),     new NECLabelledDatum(85)),
            [NECWireGauges.GAUGE_4]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(80),     new NECLabelledDatum(100),    new NECLabelledDatum(115)),
            [NECWireGauges.GAUGE_3]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(95),     new NECLabelledDatum(115),    new NECLabelledDatum(130)),
            [NECWireGauges.GAUGE_2]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(110),    new NECLabelledDatum(135),    new NECLabelledDatum(150)),
            [NECWireGauges.GAUGE_1]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(130),    new NECLabelledDatum(155),    new NECLabelledDatum(175)),
            [NECWireGauges.GAUGE_0]:    new NECBaseWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(150),    new NECLabelledDatum(180),    new NECLabelledDatum(205)),
            [NECWireGauges.GAUGE_00]:   new NECBaseWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(175),    new NECLabelledDatum(210),    new NECLabelledDatum(235)),
            [NECWireGauges.GAUGE_000]:  new NECBaseWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(200),    new NECLabelledDatum(240),    new NECLabelledDatum(270)),
            [NECWireGauges.GAUGE_0000]: new NECBaseWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(235),    new NECLabelledDatum(280),    new NECLabelledDatum(315))
        },
        [NECInstallationMethods.FREE_AIR_BARE]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_16]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_14]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_12]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_10]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_8]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(76)),
            [NECWireGauges.GAUGE_6]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(96)),
            [NECWireGauges.GAUGE_4]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(121)),
            [NECWireGauges.GAUGE_3]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_2]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(163)),
            [NECWireGauges.GAUGE_1]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_0]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(220)),
            [NECWireGauges.GAUGE_00]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(255)),
            [NECWireGauges.GAUGE_000]:  new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(297)),
            [NECWireGauges.GAUGE_0000]: new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(346))
        },
        [NECInstallationMethods.FREE_AIR_COVERED]: {
            [NECWireGauges.GAUGE_18]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_18,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_16]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_16,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_14]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_14,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_12]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_12,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_10]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_10,   new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_8]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_8,    new NECLabelledDatum(80)),
            [NECWireGauges.GAUGE_6]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_6,    new NECLabelledDatum(101)),
            [NECWireGauges.GAUGE_4]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_4,    new NECLabelledDatum(127)),
            [NECWireGauges.GAUGE_3]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_3,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_2]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_2,    new NECLabelledDatum(171)),
            [NECWireGauges.GAUGE_1]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_1,    new NECLabelledDatum(0, "—")),
            [NECWireGauges.GAUGE_0]:    new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0,    new NECLabelledDatum(231)),
            [NECWireGauges.GAUGE_00]:   new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_00,   new NECLabelledDatum(268)),
            [NECWireGauges.GAUGE_000]:  new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_000,  new NECLabelledDatum(312)),
            [NECWireGauges.GAUGE_0000]: new NECBaseUninsulatedWireAmpacity(NECWireGauges.GAUGE_0000, new NECLabelledDatum(364))
        }
    }
});