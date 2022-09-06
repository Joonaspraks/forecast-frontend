<template>
  <q-card class="my-card" flat bordered>
    <q-item>
      <q-item-section>
        <q-item-label class="text-h4">{{ name }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section class="col-6">
        <q-card-section class="text-h6">Day</q-card-section>

        <q-icon :name="iconMap[dayPhenomenon]" color="primary" size="56px" />
        <q-card-section>{{ dayPhenomenon }}</q-card-section>
        <q-card-section>Max temp: {{ dayTempmax }}</q-card-section>
      </q-card-section>

      <q-separator vertical />
      <q-card-section class="col-6">
        <q-card-section class="text-h6">Night</q-card-section>

        <q-icon :name="iconMap[nightPhenomenon]" color="primary" size="56px" />
        <q-card-section>{{ nightPhenomenon }}</q-card-section>
        <q-card-section>Min temp: {{ nightTempmin }}</q-card-section>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    name: {
      type: String,
      required: true,
    },
    nightTempmin: {
      type: Number,
      required: true,
    },
    dayTempmax: {
      type: Number,
      required: true,
    },
    nightPhenomenon: {
      type: String,
      required: true,
    },
    dayPhenomenon: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      iconMap: {
        Clear: 'sunny',
        'Few clouds': 'sunny',
        'Variable clouds': 'cloud',
        'Cloudy with clear spells': 'cloud',
        Cloudy: 'cloud',
        'Light snow shower': 'ac_unit',
        'Moderate snow shower': 'ac_unit',
        'Heavy snow shower': 'ac_unit',
        'Light shower': 'water_drop',
        'Moderate shower': 'water_drop',
        'Heavy shower': 'water_drop',
        'Light rain': 'water_drop',
        'Moderate rain': 'water_drop',
        'Heavy rain': 'water_drop',
        'Risk of glaze': 'ac_unit',
        'Light sleet': 'ac_unit',
        'Moderate sleet': 'ac_unit',
        'Light snowfall': 'ac_unit',
        'Moderate snowfall': 'ac_unit',
        'Heavy snowfall': 'severe_cold',
        Snowstorm: 'severe_cold',
        'Drifting snow': 'severe_cold',
        Hail: 'ac_unit',
        Mist: 'cloud',
        Fog: 'cloud',
        Thunder: 'flash_on',
        Thunderstorm: 'thunderstorm',
      },
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
