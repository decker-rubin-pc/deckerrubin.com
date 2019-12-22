import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import { Attorneys, PracticeAreas, Contact, Home, Podcast } from './components/pages';
import './css/app.css';

const pages = [
  {path: '/', component: Home, text: 'Home'},
  {path: '/attorneys', component: Attorneys, text: 'Attorneys'},
  {path: '/practice-areas', component: PracticeAreas, text: 'Practice Areas'},
  {path: '/contact', component: Contact, text: 'Contact'},
  {path: '/podcast', component: Podcast, text: 'Podcast'}
];

const el = '#app';
const routes = pages.map(({path, component}) => ({path, component}));
const navigation = pages
  .filter(({path}) => path !== '/')
  .map(({path, text}) => ({path, text}));

const router = new VueRouter({routes});
const data = {navigation};

Vue.use(VueRouter);

new Vue({
  render: h => h(App, {props: data}),
  router,
  data
}).$mount(el);
