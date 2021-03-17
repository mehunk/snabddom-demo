import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

const app = document.querySelector('#app')

const vnode = h('div#container', [
  h('h1.title', 'title'),
  h('p.content', 'content')
])

patch(app, vnode)
