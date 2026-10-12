import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue, {ConfirmationService, ToastService} from 'primevue';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import router from './router.js';

import {Toolbar,Sidebar,Button,Card,Column,ConfirmDialog,Dialog,DialogService,Textarea,InputText,
Row,SelectButton,InputNumber} from "primevue";
import i18n from "./i18n.js";
import pinia from "./pinia.js";

const primeUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;


createApp(App)
    .use(i18n)
    .use(PrimeVue, {theme: {preset: Material}, ripple: true, primeUiLicenseKey})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-toolbar', Toolbar)
    .component('pv-sidebar', Sidebar)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-dialog', Dialog)
    .component('pv-textarea', Textarea)
    .component('pv-input-text', InputText)
    .component('pv-row', Row)
    .component('pv-select-button', SelectButton)
    .component('pv-input-number', InputNumber)
    .use(router)
    .use(pinia)
    .mount('#app')
