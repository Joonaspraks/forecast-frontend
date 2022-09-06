import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { z } from 'zod';
import { Forecast } from './schemas/forecast';

export const useForecastStore = defineStore('forecast', {
  state: () => ({
    forecastResponse: {} as z.infer<typeof Forecast>,
  }),
  getters: {
    forecastList: (state) => state.forecastResponse.forecast,
  },
  actions: {
    fetchForecast() {
      api
        .get<z.infer<typeof Forecast>>('forecast')
        .then((res) => {
          this.forecastResponse = Forecast.parse(res.data);
        })
        .catch((error) => console.error(error));
    },
  },
});
