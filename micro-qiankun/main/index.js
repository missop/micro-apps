import {registerMicroApps,runAfterFirstMounted,start,setDefaultMountApp} from 'qiankun'
import {event} from './utils'

// Step1:注册子应用
registerMicroApps([
  {
    name:'sub-vue',
    entry:'//localhost:8080',
    container:"#app1",
    activeRule:'/vue',
  },
  {
    name:'sub-vue2',
    entry:'//localhost:8081',
    container:"#app2",
    activeRule:'/vue2'
  }
])

// Step2:设置默认进入的应用
setDefaultMountApp('/vue');

// 启动应用
start({
  sandbox:{
    experimentalStyleIsolation:true
  }
})

runAfterFirstMounted(()=>{
  console.log("[MainApp] first app mounted")
  // event.dispatch("sendDataToChild","xxxx秘闻")
})

window.subVue="micro-main"

// setTimeout(()=>{
//   event.on("childChange",(data)=>{
//     console.log("childChange",data)
//   })
// },1000)
event.dispatch("sendDataToChild","xxxx秘闻")

// 比方说有一段函数需要访问this
// const funcStr = `function getState() {
//   console.log(this.state);
// }
// getState()`

// const str = "<html><body><div></div></body></html>"
// const div = document.createElement("div")
// div.innerHTML = str
// console.log("div",div)