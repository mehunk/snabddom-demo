import { init, classModule, attributesModule, jsx } from 'snabbdom'

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
