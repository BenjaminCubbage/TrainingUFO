<template>
    <Article>
        <teleport to="head">
            <component :is="'script'" type="application/ld+json">
                {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "How is Wire Ampacity Calculated?",
                    "author": {
                        "@type": "Person",
                        "name": "Benjamin Cubbage"
                    },
                    "datePublished": "2025-10-21T00:00:00-04:00",
                    "dateModified": "2025-10-21T00:00:00-04:00",
                    "image": [
                        "https://trainingufo.com/assets/img/jsonld-preview.webp"
                    ],
                    "publisher": {
                        "@type": "Organization",
                        "name": "Training UFO"
                    },
                    "description": "An educational breakdown of how wire ampacity is determined according to the NEC, exploring concepts like base wire ampacity, temperature correction, and bundling derating—told with humor and a highway metaphor.",
                    "articleSection": [
                        "What is Wire Ampacity",
                        "Highway Metaphor",
                        "Factors Affecting Ampacity",
                        "Base Wire Ampacity",
                        "Temperature Correction",
                        "Bundling",
                        "Results",
                        "Closing Thoughts"
                    ],
                    "keywords": [
                        "wire ampacity",
                        "NEC 310.16",
                        "temperature correction",
                        "bundling derating",
                        "electrical safety",
                        "copper wire",
                        "ampacity calculator"
                    ],
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://trainingufo.com/articles/how-is-wire-ampacity-calculated"
                    }
                }
            </component>
        </teleport>

        <ArticleHeader :title="'How is Wire Ampacity Calculated?'" :author="'Benjamin Cubbage'" :date="'Oct 21, 2025'" />
        <ArticleBody>
            <p>
                Hey 🙂
            </p>

            <p>
                Determining the ampacity of a wire is, as it turns out, a deceptively simple task. One
                fraught with nuance, the ample opportunity for human error, and, perhaps worst of all, <i>exceptions to the rule</i>. 
            </p>

            <p>
                That said, 
                <strong>I'm not a licensed electrician</strong>. I'm just here to explain what I know
                and show off my cool little calculator gadget 😅
            </p>

            <p>
                Anywho, let's see if we can figure this out together.
            </p>

            <h2>
                What is "Wire Ampacity", Anyways?
            </h2>

            <p>
                The <b>ampacity</b> of a wire simply refers to how much current that wire can safely carry.
                Alright, simple enough, but what is current? Why, I'm glad you asked!
            </p>
            
            <h3>
                The Highway Metaphor
            </h3>

            <p>
                You can think of it like this: If the <b>wire</b> is the highway and the <b>electrons</b> are the cars, 
                then the <b>current</b> is how many cars are passing by a given mile marker per unit of time.
            </p>
            
            <aside>
                <p>
                    (Practically speaking, electrons already move extremely slowly to begin with, so the car analogy isn't 
                    exactly perfect. A snail race would probably be more accurate, but methinks that would be distracting. 
                    We're going to roll with the highway metaphor for now)
                </p>
            </aside>

            <p>
                Put simply, current answers <strong>one fundamental question</strong>: <i>how much electrical charge passes a given point in the conductor each second?</i>
            </p>

            <p>
                In a metal conductor like a wire, that current happens to be carried by electrons.
                The higher the current, the higher the rate of electron flow through the wire. 
                At higher currents, the average speed at which the electrons collectively drift slightly increases.
            </p>

            <p>
                Keeping with the highway analogy, <b>wire ampacity</b> describes how much traffic the highway can handle before 
                it overheats and the asphalt starts to melt.
            </p>

            <p>
                The asphalt in this metaphor generally corresponds to the wire's insulation. The melting corresponds to... well, in some cases, literal melting. In others,
                it may be an advanced rate of degradation of the wire's protective coating (the insulation). Either way, it's bad news...
            </p>

            <ArticleImg 
                :src="elmoOnFire" 
                alt="Elmo relishes the hellfire" 
                aspectRatio="12 / 6.5" 
                caption="Elmo had good intentions, too" />

            <h2>
                What Factors Impact Wire Ampacity?
            </h2>

            <p>
                There are quite a few, as it turns out, but generally the factors affecting
                wire ampacity will fall into one of three camps:
            </p>

            <ol>
                <li>
                    <b>Environment: How easily can the wire shed heat into its surroundings?</b>
                    <ul>
                        <li>Number of conductors bundled together</li>
                        <li>Ambient air temperature</li>
                        <li>Airflow and ventilation</li>
                    </ul>
                </li>

                <li style="margin-top:12px;">
                    <b>Resistance: How much heat is generated when current flows?</b>
                    <ul>
                        <li>Conductor material (copper vs. aluminum)</li>
                        <li>Wire gauge (cross-sectional area)</li>
                    </ul>
                </li>

                <li style="margin-top:12px;">
                    <b>Thermal tolerance: How much heat can the wire and its insulation safely withstand?</b>
                    <ul>
                        <li>Insulation type and temperature rating</li>
                        <li>Material age—older insulation may not perform to its original rating</li>
                    </ul>
                </li>
            </ol>

            <p>
                Simple enough! To recap, here's what we've got so far:
            </p>

            <ul>
                <li>
                    <b>Wire</b>: The highway
                </li>

                <li>
                    <b>Electrons</b>: The cars
                </li>

                <li>
                    <b>Current</b>: The traffic flow
                </li>

                <li>
                    <b>Ampacity</b>: Maximum traffic flow the asphalt can safely support
                </li>
            </ul>

            <p>
                And given the factors just discussed, we can expand our analogy with some new definitions:
            </p>

            <ul>
                <li>
                    <b>Conductor Size</b>: Number of lanes
                </li>
                <li>
                    <b>Conductor Insulation</b>: The asphalt
                </li>
                <li>
                    <b>Conductor Insulation Rating</b>: How much heat the asphalt can safely tolerate
                </li>
            </ul>

            <p>
                And there you have it. It all comes down to heat: how much is made, how much can escape, and how much the wire can take.
            </p>

            <p>
                Whatever the situation may be, it's your job to make sure the roads stay safe. 
                That might mean adding more lanes, or it could mean upgrading your asphalt. Either way,
                the end goal is the same: don't catch your <s>house</s> car on fire.
            </p>
            
            <h2>
                How is Wire Ampacity Actually Calculated?
            </h2>

            <p>
                Before we head into this territory, a quick disclaimer: <strong>I am
                not a licensed electrician, nor am I an electrical engineer.</strong> I'm a software
                engineer, which is to say I'm barely an engineer at all.
            </p>

            <p>
                As such, this is for educational purposes only. There are any number of edge-cases,
                gotchas, and exceptions within the NEC that I'm simply not covering here. <strong>If somehow, by
                the end of this article, you're suddenly confident you've got this all figured out: don't be.</strong>
            </p>

            <p>
                With that out of the way, let's begin.
            </p>
            
            <h2>
                Base Wire Ampacity
            </h2>

            <p>
                "Base Wire Ampacity" isn't an officially NEC-recognized term, but I've found it to be semantically useful, so we can
                stick with it for now.
            </p>

            <p>
                Put simply, the <b>base ampacity</b> of a wire is:
            </p>

            <ul>
                <li>The nominal ampacity of a wire (Material / Insulation / Size)...</li>
                <li>Installed in a given medium (Raceway, Free Air)...</li>
                <li>Before correcting for the ambient temperature and bundling.</li>
            </ul>
            
            <p>
                But how do we determine the base ampacity of our wire, you ask? For this, the NEC helps us
                along by harnessing the magical power of ✨tables✨
            </p>

            <h3>
                Example
            </h3>
            
            <p>
                Let's suppose we're running <b>8AWG, 90°C-rated Copper</b> wire in a <b>Raceway</b>. The ambient temperature is
                <b>36–40°C</b>, and the wire is bundled with <b>four additional Current-Carrying Conductors</b> (five total).
            </p>

            <p>
                Since we're installing in a raceway, we'll refer to <b>NEC 2023 Table 310.16</b>:
            </p>

            <ArticleImg 
                :src="baseAmpTable" 
                alt="NEC 2023 Table 310.16. 55 is highlighted"
                caption="NEC 2023 Table 310.16"
                aspectRatio="12 / 8" />
            
            <p>
                As you can see, our base wire ampacity is going to be <b>55A</b>. If our insulation was 
                rated for only 75°C, it would have a base ampacity of only 50A. If our wire were 10AWG instead of 8AWG,
                it would have a base ampacity of 40A. Simple enough.
            </p>

            <p>
                But here's the thing; this table makes two key assumptions:
            </p>

            <ul>
                <li>
                    <b>Assumption 1: </b> The ambient temperature is 30°C
                </li>
                <li>
                    <b>Assumption 2: </b> The conductor is installed with no more than two <i>other</i> current-carrying conductors
                </li>
            </ul>

            <p>
                If this accurately described our installation, then the corresponding values in the table 
                would be the same as our wire's ampacity.
            </p>
            
            <p>
                Alas! Our ambient temperature is <b>40°C</b>, and we have <b>more than three bundled CCC's</b>.
                We'll need to adjust our base ampacity to account for those differences. 
            </p>

            <p>
                This process is called <b>derating</b>.
                We'll start with temperature correction, then move on to bundling.
            </p>
            
            <h2>
                Temperature Correction
            </h2>
            
            <p>
                A wire dredged through the ground in Antarctica will be able to safely handle more current than the same wire installed
                on a hot roof in Florida. The former has more "thermal headroom" than the latter, and we need to account for that. 
                This is where temperature correction comes in!
            </p>
            
            <p>
                The formula to calculate temperature correction isn't particularly complicated:
            </p>

            <ArticleImg 
                :src="tempFormula" 
                alt="Formula for temperature correction, from NEC 2023 Figure [310.15(B)(1)]"
                caption="NEC Figure 310.15(B)(1)"
                aspectRatio="12 / 4.5" />
            
            <p>
                But for our purposes—and everyone's sanity—we'll stick with the tables instead:
            </p>

            <ArticleImg 
                :src="ambientTable" 
                alt="NEC Table 310.16(B)(1)(1). 0.91 is highlighted" 
                caption="NEC Table 310.16(B)(1)(1)"
                aspectRatio="12 / 5" />
            
            <p>
                Ah, that's better. Since our initial wire ampacity was based on 30°C, we refer to <b>NEC Table 310.16(B)(1)(1)</b>. As you can see, our
                temperature correction factor is <b>0.91</b>. This makes sense, considering 40°C is hotter than 30°C. 
                Notice how if our installation's ambient temperature were 30°C, the temperature correction factor would be 1.00—no change!
            </p>

            <p>
                All of the values in the table are simply approximations of the aforementioned formula. An important detail is that there
                are actually <strong>two</strong> temperature correction tables:
            </p>

            <ul>
                <li>
                    <b>310.16(B)(1)(1)</b>, based on 30°C, and
                </li>
                <li>
                    <b>310.16(B)(1)(2)</b>, based on 40°C
                </li>
            </ul>

            <p>
                Since we've already said our base wire ampacities are based on 30°C, we're referring to the former. 
                That said, some of the NEC's ampacity tables assume 40°C, so <strong>always make sure you're referring to the 
                correct table</strong>.
            </p>

            <p>
                Next up: Bundling.
            </p>

            <h2>
                Bundling
            </h2>

            <p>
                I'll cut to the chase: there's only one table for bundling, <b>NEC Table 310.15(C)(1)</b>, and it's quite
                straight-forward.
            </p>

            <ArticleImg 
                :src="bundlingTable" 
                alt="NEC 2023 Table 310.15(C)(1). 80 is highlighted" 
                caption="NEC 2023 Table 310.15(C)(1)"
                aspectRatio="12 / 7" />

            <p>
                Pretty simple! Our installation has five conductors running through the raceway, so we'll have to multiply 
                our ampacity by <b>80%</b>.
            </p>

            <p>
                If you're still unclear as to the purpose of this, consider a conduit run that has 42 current-carrying conductors, 
                all bundled together. You could imagine that the wires in that bundle's center might have trouble
                shedding their heat, especially if the conductors surrounding them were running hot themselves.
            </p>

            <p>
                In that scenario, the NEC says we'd need to multiply our ampacity by a measly 35%! This can mean enormous
                amounts of expensive, underutilized copper, which is why electricians will oftentimes "split up" conductors into multiple conduit runs 
                rather than push everything through one big pipe.
            </p>

            <aside>
                <p>
                    An important thing to note is that we only consider the total number of 
                    <i>current-carrying</i> conductors in the raceway or cable for bundling—equipment grounding conductors don't count. Runs
                    shorter than 24 inches generally don't factor in either. That said, as far
                    as the NEC is concerned, there are exceptions to every exception. <strong>There's
                    no replacement for reading and comprehending the raw code straight from the NEC!</strong>
                </p>
            </aside>

            <p>
                Now that we've corrected for both temperature and bundling, we're finally ready to calculate our adjusted ampacity.
            </p>

            <h2>
                Results
            </h2>

            <p>
                Our base wire ampacity was <b>55A</b>, our temperature correction factor was <b>0.91</b>, and our bundling multiplier
                was <b>80%</b>. To get our final, adjusted wire ampacity, we simply multiply them together:
            </p>

            <p style="font-family: 'Libertinus Math'; font-size: 2.2rem; border: 4px solid var(--secondary-main); padding: 12px; text-align: center; background: white;">
                55A × 0.91 × 0.80 = <u><strong>40A</strong></u>
            </p>

            <p>
                <i>Et voilà!</i> The ampacity of our wire is <b>40A</b>. Hoo-ray. 🎉
            </p>

            <h2>
                Closing Thoughts
            </h2>

            <p>
                The NEC is not something you can learn in an afternoon. We've only scratched
                the surface, here, and I hope to be able to continue writing these articles
                as I continue to learn, myself.
            </p>

            <p>
                Some concepts I did <i>not</i> cover here include but aren't limited to:
            </p>

            <strong>
                <ul>
                    <li>OCPD Sizing</li>
                    <li>Terminal Ampacity</li>
                    <li>Voltage Drop</li>
                    <li>The 125% Rule</li>
                    <li>Other key concepts I haven't even learned about yet</li>
                </ul>
            </strong>

            <p>
            In the future, I'd like to update my calculator to include these features. Until then, remember:
            Electricity is as dangerous as it is powerful. The more you <i>think</i> you know about it,
            the more dangerous it becomes, so give it some respect ✌️
            </p>
        </ArticleBody>
    </Article>
</template>

<script>
    import bundlingTable from '@/assets/img/bundling-table.webp';
    import ambientTable from '@/assets/img/ambient-table.webp';
    import tempFormula from '@/assets/img/temp-formula.webp'
    import elmoOnFire from '@/assets/img/elmo-on-fire.webp';
    import baseAmpTable from '@/assets/img/base-amp-table.webp';

    import Article from "@/components/Article/Article.vue";
    import ArticleHeader from "@/components/Article/ArticleHeader.vue";
    import ArticleBody from "@/components/Article/ArticleBody.vue";
    import ArticleImg from "@/components/Article/ArticleImg.vue";

    export default {
        components: { Article, ArticleHeader, ArticleBody, ArticleImg },
        data: () => ({
            bundlingTable,
            ambientTable,
            tempFormula,
            elmoOnFire,
            baseAmpTable
        })
    }
</script>
