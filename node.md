# promise 状态改变

实力对象中的一个属性 PromiseStatus
pendding 变为 resolved
pendding 变为 rejected
状态只能改变一次

### promise 对象的值

实力对象中的一个属性 PromisrResult
保存着异步任务 成功或者失败的结果（err,data）

### promise 工作流程

new Promise ==> 触发 resolved 或者 rejected ==>执行相应的回调 ==> 返回新的 Promise 对象

### Promise 相关 API

exp: new Promise((resolved,rejected)=>{
console.log("111")
})
console.log("222") // 111 222

1. executor 函数 ：
   执行器 (resolved,rejected)=>{
   console.log("hello promise")
   }
   会在内部同步调用

2. resolved 和 rejected 成功/失败 时调用的函数

Promise.protoType.then 方法（onResolved,onRejected）=>{}
onResolved,onRejected 成功，失败的回调 返回一个新的 Promise 对象

Promise.protoType.catch 方法 （err）=> {}
只能执行失败的回调 (做了一个封装，内部也是用 then 来实现的)

### Promise.resolve()/reject() 方法

属于 Promise 对象 不是实力对象的方法 用于快速得到一个 promise 对象

let p1 = Promise.resolve(123) //如果传入参数为非 promise 对象 返回成功/失败的 promise 对象，如果传入 promise 对象，resolve 返回结果状态和传入的 promise 对象一样, reject 始终返回失败对象

### Promise.all([])

### Promise.race([])

### Promise 几个关键问题

    改变状态有三个方法： resolve  reject throw
    三个状态输出结果 ：Promise{<fulfilled>:值} Promise{<rejected>:值} Promise{<pending>}

    如果指定多个回调  改变状态后所有的回调都会执行 例如
      const p = Promise.resolve(1);
      p.then((res) => console.log(1));
      p.then((res) => console.log(2));      //1 2


    then 返回的结果  （个人理解，跟Promise.resolve()还有async结果一样）

    异常穿透  链式调用只需要在最后catch捕获异常

    终端promise链 返回一个pending promise对象 唯一方法

### 手写 Promise


### http 

超文本传输协议  HyperText Transfer Protool HTTP

是一种无状态 ， 以请求/应答方式运行的协议，它使用可扩展的寓意和描述的消息格式，与机遇网络的超文本信息系统灵活的互动

1. http 报文格式

    请求报文和响应报文结构基本相同，有三大部分组成：
          起始行 start line ：描述请求或响应的基本信息
          头部字段集合 header ： 使用key-value的形式更详细的说明报文
          消息正文 entity： 实际传输的数据，它不一定是纯文本，可以使图片、视频等二进制数据

2. 输入网址之后发生了什么

  应用层
  
   1. 浏览器解析ip地址 从url中解析出域名，并检查村村中有没有对应域名的Ip，如果之前访问过而且没有过期，会命中缓存。否者会取本机域名解析文件hosts ，如果有配置就返回对应IP 如果没有配置过，则发起DNS请求获取IP，如果还没找到，继续往上找（顶级IP服务商之类的）
   

  传输控制层
   2. 
      首先是TCP三次握手
      发起HTTP请求=>服务器
      服务器=>响应
      浏览器解析响应，渲染页面
      tcp四次挥手 （请求结束）

   3. TCP 面向连接的  可靠的连接

      三次握手 （资源开辟）
      资源传输
      四次挥手  
      