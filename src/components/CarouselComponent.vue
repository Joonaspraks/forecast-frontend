<template>
  <div class="q-pa-md" v-if="store.forecastToday">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <template
        v-for="place in store.forecastToday.day.place"
        :key="place.name"
      >
        <q-carousel-slide :name="place.name" class="column no-wrap flex-center">
          <q-icon
            :name="iconMap[place.phenomenon]"
            color="primary"
            size="56px"
          />
          <div class="q-mt-md text-center">
            <li>Phenomenon: {{ place.phenomenon }}</li>
            <li>Max temp: {{ place.tempmax }}</li>
          </div>
        </q-carousel-slide>
      </template>
    </q-carousel>
    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="
          store.forecastToday.day.place.map((p) => {
            return {
              label: p.name,
              value: p.name,
            };
          })
        "
      />
    </div>
  </div>
</template>
<script>
import { useQuasar } from 'quasar';
import { ref, watchEffect } from 'vue';
import { useForecastStore } from '../stores/forecast-store';

export default {
  setup() {
    const q = useQuasar();
    q.loading.show();

    watchEffect(() => useForecastStore().forecastList && q.loading.hide());

    return {
      slide: ref(''),
      store: useForecastStore(),
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
};
</script>
