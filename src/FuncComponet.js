import React from 'react';
/***
 * 函数式组件
 * 整个函数中使用属性中的值
 * 无法使用State，也无法使用组件的生命周期方法
 * 函数组件中没有this
 * 只是接收属性，渲染页面，它不执行与UI无关的逻辑处理,只是一个纯函数
 * 目前React还是会把函数组件在内部转换成类组件，所以使用函数组件和使用类组件在性能上并无大的差异。但是，React官方已承诺，未来将会优化函数组件的性能，因为函数组件不需要考虑组件状态和组件生命周期方法中的各种比较校验，
 * 
 */
const  FuncComponet = (props) => {
    const sayHi = () => {
      alert(`Hi ${props.age}`);
    }
  
    return (
      <div>
        <p>Hello, {props.age}</p>
        <button onClick ={sayHi}>显示属性的值</button>
      </div>
    )
  }

  export default FuncComponet;