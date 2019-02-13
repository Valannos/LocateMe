import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var divApp = document.createElement('div');
divApp.id = 'app';
document.body.appendChild(divApp);

var app = new Vue({
    el : '#app',
    render : h => h(App)
})