import { init, h } from 'snabbdom'

const patch = init([])

const app = document.querySelector('#app')

let vnode = h('div#container.title', 'hello, world!')

const oldVnode = patch(app, vnode)

window.changeVnode = function changeVnode () {
  vnode = h('div#container.title', 'hello, China!')
  patch(oldVnode, vnode)
}
