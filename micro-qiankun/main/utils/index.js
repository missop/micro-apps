window.cachedDispatch={}
export const event = {
  __handlerMap :{},
  __offHandlerMap :{},
  dispatch(event,data){
    if(!this.__handlerMap[event]){
      // console.log("事件未绑定,存入缓存中，待订阅后执行",window)
      window.cachedDispatch[event]=data
      return true
    }

    const cutomeEvent = new CustomEvent(event,{
      detail:data
    })
    document.dispatchEvent(cutomeEvent)
  },
  on(event,handler,context){
    if(!this.__handlerMap[event]){
      this.__handlerMap[event] = []

      const callback = ev => {
        this.__handlerMap[event].forEach(cb => cb.call(context, ev))
      }

      document.addEventListener(event, callback)
      this.__offHandlerMap[event] = ()=>{
        document.removeEventListener(event, callback)
      }
    }

    this.__handlerMap[event].push(handler)

    // 查看是否有之前触发的事件
    if(window.cachedDispatch[event]){
      this.dispatch(event,window.cachedDispatch[event])
    }

    return this
  }
}