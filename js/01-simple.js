import { init, h } from 'snabbdom'

// 使用一个空的模块集初始化，得到一个 patch 方法
const patch = init([])
// 获取占位的 DOM 元素
const app = document.querySelector('#app')
// 创建一个新的 vnode
const vnode = h('div#container.title', 'hello, world!')
// 将新的 vnode 转换为原生的 DOM 元素，并插入到占位的 DOM 元素之前，然后移除掉原来的占位 DOM 元素
patch(app, vnode)
