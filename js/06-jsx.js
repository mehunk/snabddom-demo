import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'
import { attributesModule } from 'snabbdom/build/package/modules/attributes'
import Snabbdom from 'snabbdom-pragma'

const patch = init([
  classModule,
  attributesModule
])

const app = document.querySelector('#app')

const attrs = {
  id: 'container'
}

const classes = {
  title: true
}

const vnode = (
  <div
    attrs={attrs}
    class={classes}
  >
    hello, world!
  </div>
)

patch(app, vnode)
