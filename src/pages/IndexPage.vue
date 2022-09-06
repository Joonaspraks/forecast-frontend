<template>
  <q-page class="row items-center justify-evenly">
    <carousel-component />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CarouselComponent from '../components/CarouselComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CarouselComponent },
});
</script>
