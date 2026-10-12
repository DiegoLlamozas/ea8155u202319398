<script setup>
import {useRoute} from "vue-router";
import {useI18n} from "vue-i18n";

const route = useRoute();
const unavailableRoute = route.path;
const { t } = useI18n();
</script>

<template>
  <section class="pt-6 p-4 md:p-5">
    <div class="flex flex-col items-center justify-center">
      <h1>{{ t('page-not-found.title') }}</h1>
      <p>
        {{ t('page-not-found.content', { 'unavailable-route': unavailableRoute }) }}
      </p>
      <router-link to="/home">
        {{ t('page-not-found.go-home') }}
      </router-link>

    </div>

  </section>

</template>

<style scoped>

</style>