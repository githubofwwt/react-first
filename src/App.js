import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Title from './Title';
import Content from './Content';
import Footer from './Footer';
import Bottom from './Bottom';
import Other from './Other';
import FuncComponent from './FuncComponet';
import NewLife from './NewLife';

/**
 * 父子组件传值很关键的一个问题是需要先判断数据源 1）state  2）props  3）state + props
 */
class App extends Component {
  state = {
    title:'aaa',
    name:'xyz',
    school:'huawen',
    age:12,
    show:true,
  }
  //规范传递给子组件的属性的类型
  static childContextTypes = {
    title: PropTypes.string,
  }
   //规范传递给子组件的属性的初始值
   getChildContext() {
    return {
      title:this.state.title,
    }
  }

  //改变state的title属性
  changePropsTitle = () => {
     this.setState({
        title:'bbbb'
     });
  }
  
  //改变state的name属性
  changePropsName = () => {
    this.setState({
       name:'abc'
    });
 }

// 通过子组件的引用直接调用子组件的方法来改变子组件的状态
changePropsNameTwo= () => {
   this.bottom && this.bottom.changeName('tttttttt');
}

//改变school属性
changeSchoolProps = () => {
  this.setState({school:'qinghua'});
}

//改变age属性
changeAgeProps = () =>{
  this.setState({age:100});
}

//改变show属性
changeShowProps = ()=>{
  this.setState({show:!this.state.show});
}

  // 演示两个子组件接收相同的父组件传递的属性，子组件：Title  Content
  render() {
    const {name,show} = this.state;
    return (
      <div className="App">
        {/**父子组件传递属性1 */}
        <Title />
        <Content />
        <p style = {{height:'50px',backgroundColor:'#00ff00',textAlign:'center',lineHeight:'50px',}}  onClick = {this.changePropsTitle}>父组件改变属性title</p>

        {/**父子组件传递属性2 */}
        <Footer />
        <Footer name = {name}/>
        <p style = {{height:'50px',backgroundColor:'yellow',textAlign:'center',lineHeight:'50px',}}  onClick = {this.changePropsName}>父组件改变属性name</p>
        
        {/**通过子组件的引用改变子组件的状态 */}
        <Bottom ref = {bottom => {this.bottom = bottom}}/>
        <p style = {{height:'50px',backgroundColor:'#FFC0CB',textAlign:'center',lineHeight:'50px',}}  onClick = {this.changePropsNameTwo}>通过ref,父组件改变属性name</p>

        {/**PureComponent 改变子组件的属性 */}
        <Other school = {this.state.school}/>
        <p style = {{height:'50px',backgroundColor:'#FFA54F',textAlign:'center',lineHeight:'50px',}}  onClick = {this.changeSchoolProps}>父组件改变属性school</p>
         
        {/***函数式组件 */}
        <FuncComponent age = {this.state.age}/>
        <p style = {{height:'50px',backgroundColor:'#FF4040',textAlign:'center',lineHeight:'50px',}}  onClick = {this.changeAgeProps}>父组件改变属性age</p>
        
        {/***react新生命周期测试 */}
        <NewLife show = {show}/>
        <p style = {{height:'50px',backgroundColor:'	#E6E6FA',textAlign:'center',lineHeight:'50px',}}  onClick = {this.changeShowProps}>父组件改变属性show</p>

      </div>
    );
  }
}

export default App;
