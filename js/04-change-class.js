import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'
import { classModule } from 'snabbdom/build/package/modules/class'

const patch = init([
  classModule // 一定要在初始化的时候将类模块传进来
])

const app = document.querySelector('#app')

let vnode = h('div#container.title', 'hello, world!')

const oldVnode = patch(app, vnode)

window.changeVnode = function changeVnode () {
  vnode = h('div#container.title', {
    class: {
      title: false,
      'title-after': true
    }
  }, 'hello, world!')
  patch(oldVnode, vnode)
}
