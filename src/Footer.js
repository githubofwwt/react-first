import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 测试父组件传递属性给子组件
 * 1.当父组件state改变时，所有的子组件均会发生渲染
 * 2.如果只是props单数据源，不需要componentWillReceiveProps，shouldComponentUpdate，当props发生改变时，子组件会自动render
 * 3.当双数据源（state，props）发生改变时，才需要 componentWillReceiveProp 和 shouldComponentUpdate进行拦截判断是否需要render,如果返回false，则不会进行渲染
 * 4.当该方法被调用时，并不意味着props肯定会不同
 * 5.在该函数中调用 this.setState() 将不会引起第二次渲染。
 * componentWillReceiveProps(nextProps)使用场景：
 * 1）可以在子组件的render函数执行前获取新的props，从而更新子组件自己的state。因为在这里我们能抽取出新的props并且更新内部状态，比如我们可能有一些状态，这些状态是props的计算结果，那么我们就可以在这个方法里写逻辑，使用this.setState()来存储结果 
 * 2）在此函数中可以进行通信请求，这样就不必将所有的通信请求放在父组件中
 * 3）该方法当props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过调用this.setState()来更新你的组件状态，旧的属性还是可以通过this.props来获取,这里调用更新状态是安全的，并不会触发额外的render调用。
 * 
 */
class Footer extends Component {
    state = {
        name:this.props.name,
    }
    componentWillReceiveProps({name}){
        console.log("componentWillReceiveProps this.state.name="+this.state.name);
        console.log("componentWillReceiveProps name="+name);
       if(this.state.name !== name){
          // 保存state的原因是存储，便于下一次props发生变化时和props做比对，判断是否需要进行渲染
          this.setState({
              name
          });
       }
    }
    
    // 会拖慢性能  能不用尽量不用
    shouldComponentUpdate(nextProps)  {  
        console.log('Footer shouldComponentUpdate nextProps='+JSON.stringify(nextProps));
        console.log('Footer shouldComponentUpdate this.state.name='+this.state.name);
        if(this.state.name !== nextProps.name){
           return true;
        }
        return false;   
    }

    //子组件接收父组件属性的默认值，如果父组件不传，则子组件使用
    static defaultProps = {
       name:'wwt'
    }

    //描述子组件中接收父组件属性的类型
    static propTypes = {
      name: PropTypes.string.isRequired,
    }
  
  render() {
    console.log('Footer  render');
    return (
      <div>
        <p>3.接收到父组件的name属性：{this.props.name}</p>
      </div>
    );
  }
}

export default Footer;
