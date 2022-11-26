import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import App from './App.vue'
import router from '~/router'

import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
