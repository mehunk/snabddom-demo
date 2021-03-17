import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

const app = document.querySelector('#app')

let vnode = h('div#container', [
  h('h1.title', 'title'),
  h('p.content', 'content')
])

const oldVnode = patch(app, vnode)

window.changeVnode = function changeVnode () {
  vnode = h('div#container', [
    h('h1.title', '标题'),
    h('p.content', '正文')
  ])
  patch(oldVnode, vnode)
}
