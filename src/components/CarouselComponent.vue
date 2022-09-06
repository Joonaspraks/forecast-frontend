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
        v-for="(place, index) in store.forecastToday.day.place"
        :key="place.name"
      >
        <q-carousel-slide :name="place.name" class="column no-wrap flex-center">
          <card-component
            :name="place.name"
            :dayTempmax="place.tempmax"
            :nightTempmin="store.forecastToday.night.place[index].tempmin"
            :dayPhenomenon="place.phenomenon"
            :nightPhenomenon="store.forecastToday.night.place[index].phenomenon"
          />
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
import CardComponent from './CardComponent.vue';

export default {
  setup() {
    const q = useQuasar();
    q.loading.show();
    const currentSlide = ref('');

    watchEffect(() => {
      if (useForecastStore().forecastList) {
        q.loading.hide();
        currentSlide.value = useForecastStore().forecastToday.day.place[0].name;
      }
    });

    return {
      slide: currentSlide,
      store: useForecastStore(),
    };
  },
  components: { CardComponent },
};
</script>
