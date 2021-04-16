import React from "react";
import ReactDom from "react-dom";
// let name = function (){
// setTimeout(()=>{
//   console.log(22222);
// },2200)
// }

// const react = require("react")
// const reactDom = require("react-dom")

//   // let h1 = <h1 >{name}</h1>
//   let h1 = <h1>{name()}</h1>
//   // let h1 = <h1 >{name === '张三' ? '嘿嘿' : '嘎嘎'}</h1>

//   ReactDom.render(h1,document.getElementById('root'))

// 2:这是jsx ----------------------------------------------------------------------------------------------------
// function render(){
//   let el =(
//     <div>
//       <h3 key='1' title="cc">时间显示</h3>
//       <h3>{ new Date().toLocaleString()}</h3>
//     </div>
//   )

//   ReactDom.render(el,document.getElementById('root'))
// }

// setInterval(() => {
//   render(
//   )
// }, 1000);

// 3 :函数组件 ----------------------------------------------------------------------------------------------------
// function Child (prop){
//   return (
//     <div>
//       <div>ha-----{prop.name}</div>
//       <div>ga-----{prop.age}</div>
//     </div>
//   )
// }
// 4 :箭头函数创建语法 ----------------------------------------------------------------------------------------------------
// let Child = (prop) => (
//   <div>
//    <div>ha-----{prop.name}</div>
//     <div>ga-----{prop.age}</div>
//    </div>
// )

// ReactDom.render(<Child name={"张三" } age={50} />, document.getElementById('root'))

// 5 : 创建类 ----------------------------------------------------------------------------------------------------
// class Person {
//   constructor(name,age){
//     this.name = name
//     this.age = age
//     console.log(this);
//   }

//   say(){
//     console.log('冰雨');
//   }
// }
// let p = new Person('张珊',13)
// console.log(p.name);
// p.say()
// 6 :创建类 ----------------------------------------------------------------------------------------------------
// class Person{
//   constructor(){
//     this.max = 120
//   }
// }
// //子类继承父类的constructor
// class Child extends Person{
//   constructor(name,age){
//     console.log('%c this','background-color:red');
//     super(name,age)
//     console.log(this);
//       this.name = name
//       this.age = age

//   }
// }

// const p = new Child('中国人',20)
// console.log(p.name);
// console.log(p.max);
// 7 : ----------------------------------------------------------------------------------------------------
// class Child extends React.Component {
//   // constructor(props){
//   //   super(props)
//   //   console.log(props);
//   // }

//   render() {
//     return (
//       <div>
//         <div>哈哈</div>
//         <div>哈哈</div>
//       </div>
//     );
//   }
// }

// ReactDom.render(<Child names="战三" age={18} />,document.getElementById("root"));
// 8: state的使用 ----------------------------------------------------------------------------------------------------
/* class Child extends React.Component{
  // constructor(){
  //   super()
  //   this.state ={
  //     name:"ls",
  //     age:20
  //   }
  // }
  state = {
    name:'ls',
    age:18
  }
  render(){
    return (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.age}</div>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.state.name);
    this.setState(
      {
        name:'张三'
      }
    )
    console.log(this.state.name);
  }
}

ReactDom.render(<Child/>,document.getElementById('root')) */
// 9 改造定时器 ----------------------------------------------------------------------------------------------------
/* class Child extends React.Component{
  // 1: 准备数据
  state ={
    time: new Date()
  }
  // 2: 准备模板
  render(){
    return(
      <div>
        <h1>时间标题</h1>
        <h2>{this.state.time.toLocaleString()}</h2>
      </div>
    )
  }
 // 3: 准备定时器
  componentDidMount(){
    setInterval(() => {
      this.setState({
        time:new Date()
      })
    }, 1000);
  }
}
 // 4: 在出口渲染
ReactDom.render(<Child/>, document.getElementById("root")) */
// 10 绑定事件----------------------------------------------------------------------------------------------------
/* class Child extends React.Component{
  // state ={
  //   name:'张三'
  // }
  // constructor(){
  //   super()
  //   this.updateDom = this.updateDom.bind(this)
  // }
  state ={

  }

  render(){
    return(
      <div>
        <button onClick={() => this.fn2()}>点击</button>
      </div>
    )
  }
  // updateDom(num){
  // console.log(num);
  // }
  fn2 =() => {
    console.log("fn2",this.fn2);
  }
}
ReactDom.render(<Child / >,document.getElementById('root')) */
// 11 : ------------------------------------------------------------------------------------------------------------------------------------------
/* class Child extends React.Component{
  state = {
    isloading:true
  }

  render(){
    if(this.state.isloading){
      return <div>zheishj wo </div>
    }else{
    return <h1>zheishiwo de1daaaaaaaaa</h1>
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        isloading:false
      })
    }, 3000);
  }
}
ReactDom.render(<Child/>,document.getElementById('root')) */

// 12 :传参 ------------------------------------------------------------------------------------------------------------------------------------------
class Child extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.fn1.bind(this,111)}>点击我fn1</button>
      <button onClick={this.fn2}>点击我fn2</button>
      <button onClick={e =>this.fn3(123,e)}>点击我fn3</button>
      </div>
      
    )
  }
  fn1(num,e){
    console.log("fn1",num ,e);
  }
  fn2 = e =>{
    console.log("fn2",e);
  }
  fn3(num,e){
    console.log("fn3",num ,e);
  }
}
ReactDom.render(<Child/>,document.getElementById('root'))