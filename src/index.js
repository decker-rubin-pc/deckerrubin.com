import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import { Attorneys, PracticeAreas, Contact, Home, Podcast } from './components/pages';
import './css/app.css';

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    } catch (ex) {
      console.log('ServiceWorker registration failed: ', ex);
    }
  });
}

const routes = [
  { path: '/', component: Home, text: 'Home' },
  { path: '/attorneys', component: Attorneys, text: 'Attorneys' },
  { path: '/practice-areas', component: PracticeAreas, text: 'Practice Areas' },
  { path: '/podcast', component: Podcast, text: 'Podcast' },
  { path: '/contact', component: Contact, text: 'Contact' }
];

const navigation = [
  { path: '/attorneys', text: 'Attorneys' },
  { path: '/practice-areas', component: PracticeAreas, text: 'Practice Areas' },
  { path: '/podcast', component: Podcast, text: 'Podcast' },
  { path: '/contact', component: Contact, text: 'Contact' }
];

const el = '#app';
const router = new VueRouter({
  mode: 'history',
  routes
});
const data = { navigation };

Vue.use(VueRouter);

new Vue({
  render: h => h(App, { props: data }),
  router,
  data
}).$mount(el);

let path = localStorage.getItem('path');
if (path) {
  localStorage.removeItem('path');
  router.push(path);
}
