<script setup>
import LanguageSwitcher from "./language-switcher.vue";
import {ref} from 'vue';
import {useI18n} from "vue-i18n";
import {Button as PvButton, ConfirmDialog as PvConfirmDialog} from "primevue";

const { t } = useI18n();

const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
}

const items = [
  {label: 'option.home', to: '/home'},
  {label: 'option.new-animal-intake', to: '/new-animal-intake'},
]
</script>

<template>
  <pv-toast/>
  <pv-confirm-dialog/>

  <header>
    <pv-toolbar>
      <template #start>
        <pv-button v-for="item in items" :key="item.label" as-child v-slot="slotProps">
          <router-link :to="item.to" :class="slotProps['class']">{{ t(item.label) }}</router-link>
        </pv-button>

        <language-switcher></language-switcher>
      </template>
    </pv-toolbar>

  </header>

  <main class="mt-7">
    <router-view/>

  </main>

</template>

<style scoped>

</style>