import { createApp } from 'vue'
import App from './App.vue'

import Harlem from '@harlem/core'

import { router } from './router'

import registerGlobalComponents from './plugins/global-components'
import setAuthorizationToken from './plugins/set-authorization-token'

// Don't copy this!
// The axe-live import should be conditional.
// Only include it in development builds.
import * as AxeLive from 'axe-live'

const app = createApp(App)
app.use(router)
app.use(Harlem)

setAuthorizationToken()
registerGlobalComponents(app)

app.mount('#app')
// eslint-disable-next-line @typescript-eslint/no-floating-promises
AxeLive.run({ minimized: true })
