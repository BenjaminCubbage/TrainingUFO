<template>
  <div style="display: contents;">
    <div class="wrapper">
      <div class="steps-full">
        <div class="step">
          <label class="step-title" id="label-installation-method">
            INSTALLATION METHOD:
          </label>

          <FDropdown 
            v-model="calculator.installationMethod" 
            :options="NEC.InstallationMethods.ordered" 
            fullWidth
            aria-labelledby="label-installation-method">
            <template #label="{ datum }">
                {{ datum.label }}
            </template>
          </FDropdown>

          <label 
            class="step-title" 
            id="label-ambient-temperature"
            aria-labelledby="label-installation-method">
            AMBIENT TEMPERATURE:
          </label>

          <div class="step-group">
            <FDropdown 
              v-model="calculator.ambientTemperature" 
              :options="NEC.AmbientTemperatures.ordered"
              aria-labelledby="label-ambient-temperature">
                <template #label="{ datum }">
                    {{ datum.celsius.label }}
                </template>
            </FDropdown>

            <FRangeSlider 
              v-model="calculator.ambientTemperature" 
              :options="NEC.AmbientTemperatures.ordered"
              aria-labelledby="label-ambient-temperature"
              style="margin-top: 1px;" />
          </div>

          <label class="step-title" id="label-bundle-size">
            BUNDLE SIZE:
          </label>

          <div class="step-group">
            <FDropdown 
              v-model="calculator.conductorCount"
              :options="NEC.ConductorCounts.ordered"
              aria-labelledby="label-bundle-size">
                <template #label="{ datum }">
                    {{ datum.value }} Conductors
                </template>
            </FDropdown>

            <FRangeSlider 
              v-model="calculator.conductorCount" 
              :options="NEC.ConductorCounts.ordered"
              aria-labelledby="label-bundle-size"
              style="margin-top: 1px;" />
          </div>

          <label class="step-title">
            WIRE:
          </label>

          <FSegmentedButton
            v-model="calculator.conductorMaterial" 
            :options="NEC.ConductorMaterials.ordered" 
            fullWidth
            aria-label="Wire Conductor Material">
            <template #label="{ datum }">
              {{ datum.label }}
            </template>
          </FSegmentedButton>

          <FSegmentedButton 
            v-model="calculator.insulationRating" 
            :options="NEC.ConductorRatings.ordered" 
            fullWidth
            aria-label="Wire Insulation Rating">
            <template #label="{ datum }">
              {{ datum.label }}
            </template>
          </FSegmentedButton>

          <FDropdown 
            v-model="calculator.wireGauge" 
            :options="NEC.WireGauges.ordered.filter(gauge => NEC.BaseWireAmpacities[this.calculator.conductorMaterial][this.calculator.installationMethod][gauge][this.calculator.insulationRating].value)" 
            label="Wire Size:" 
            fullWidth
            aria-label="Wire Size in AWG">
            <template #label="{ datum }">
              {{ datum.label }}
            </template>
          </FDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import FSegmentedButton from '../../Form/FSegmentedButton.vue';
    import FDropdown from '../../Form/FDropdown.vue';
    import FRangeSlider from '../../Form/FRangeSlider.vue';

    import { AmpacityCalculator } from '../../../models/AmpacityCalculator';
    import { NEC } from '../../../models/NEC/_NEC';

    export default {
        components: {
            FSegmentedButton,
            FDropdown,
            FRangeSlider
        },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            NEC,
            analogAmbientTemperature: NEC.AmbientTemperatures.ordered[0]
        })
    }
</script>

<style scoped>
  .wrapper {
    container: container / inline-size;

    display: grid;
    font-size: 1.6rem;

    width: 100%;
    height: 100%;
    min-height: 0;
  }

  .title-bar {
    background: var(--bg-contrast-l0);
    border: 1px solid var(--border-contrast-lightest);
    border-radius: 3px;
    color: var(--text-contrast);
    font-family: var(--font-heading);
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 0;
  }

  .steps-full {
    display: flex;
    flex-flow: column nowrap;
  }

  .step {
    display: flex;
    flex-flow: column nowrap;
    gap: 18px;
  }

  .step-options {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: end;

    padding-right: 12px;
  }

  .step-group {
     display: flex; 
     gap: 8px; 
     flex-direction: column;
  }

  .step-title {
    position: relative;
    font-size: 1.7rem;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-bottom: -8px;
    margin-top: 4px;
    color: var(--text-light);
  }

  .step-title::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 30px;
    background: var(--secondary-lght);

    left: 0px;
    bottom: -1.5px;
    transform: skew(-20deg, 0deg);
  }
</style>