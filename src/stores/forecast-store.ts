import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { z } from 'zod';
import { Forecast } from './schemas/forecast';
import { decode } from 'utf8';

export const useForecastStore = defineStore('forecast', {
  state: () => ({
    forecastResponse: {} as z.infer<typeof Forecast>,
  }),
  getters: {
    forecastList: (state) => state.forecastResponse.forecast,
    forecastToday: (state) => state.forecastResponse.forecast?.[0],
  },
  actions: {
    fetchForecast() {
      api
        .get<z.infer<typeof Forecast>>('forecast')
        .then((res) => {
          const forecastResponse = Forecast.parse(res.data);
          this.forecastResponse = JSON.parse(
            decode(JSON.stringify(forecastResponse))
          );
        })
        .catch((error) => console.error(error));
    },
  },
});

useForecastStore().fetchForecast();
