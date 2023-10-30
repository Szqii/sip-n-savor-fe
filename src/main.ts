import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// import {library} from "@fortawesome/fontawesome-svg-core";
// import {faMugSaucer} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// library.add(faMugSaucer);

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
