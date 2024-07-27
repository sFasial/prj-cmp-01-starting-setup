import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';
import ErrorAlert from './UI/ErrorAlert.vue';
import BaseDialog from './UI/BaseDialog.vue';

const app = createApp(App);

// app.component('the-header', TheHeader);
// app.component('badge-list', BadgeList);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('error-alert', ErrorAlert);
app.component('base-dialog', BaseDialog);

app.mount('#app');
