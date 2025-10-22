<template>
  <ContentContainer fullWidth extraWide>
    <WireAmpacityVisualizer :calculator="calculator" />
  </ContentContainer>

  <ContentContainer fullWidth style="margin-top: 32px;">
    <ArticleContainer>
      <WireAmpacityArticle />
    </ArticleContainer>
  </ContentContainer>
</template>

<script>
  import { AmpacityCalculator } from '../models/AmpacityCalculator';
  import { NEC } from '../models/NEC/_NEC';

  import ContentContainer from '../components/Layout/ContentContainer.vue';
  import ArticleContainer from '../components/Layout/ArticleContainer.vue';
  import WireAmpacityVisualizer from '../components/App/WireAmpacity/WireAmpacityVisualizer.vue';
  import ArticleHeader from '../components/Article/ArticleHeader.vue';
  import Article from '@/components/Article/Article.vue';

  import WireAmpacityArticle from '../content/WireAmpacityArticle.vue';

  export default {
    components: {
      ContentContainer,
      ArticleContainer,
      WireAmpacityVisualizer,
      ArticleHeader,
      Article,
      WireAmpacityArticle
    },
    data: () => ({
      calculator: new AmpacityCalculator(
          NEC.InstallationMethods.RACEWAY,
          NEC.ConductorMaterials.COPPER,
          NEC.WireGauges.GAUGE_10,
          NEC.ConductorRatings.RATED_75,
          NEC.ConductorCounts.COUNT_1_TO_3,
          NEC.AmbientTemperatures.C26_TO_30,
          NEC.ConductorRatings.RATED_75
      )
    })
  }
</script>

<style scoped>
  .wrapper {
    display: grid;
    font-size: 1.6rem;
  }
</style>