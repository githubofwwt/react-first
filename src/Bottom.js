import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 通过子组件的引用改变子组件的属性
 */
class Bottom extends Component {
    state = {
        name:this.props.name,
    }
    

    //子组件接收父组件属性的默认值，如果父组件不传，则子组件使用
    static defaultProps = {
       name:'wwt'
    }

    //描述子组件中接收父组件属性的类型
    static propTypes = {
      name: PropTypes.string.isRequired,
    }
    

    //通过该方法直接改变该组件的属性
    changeName(name){
       this.setState({name});
    }

    // 通过state来改变子组件的属性值
  render() {
    console.log('Bottom  render');
    return (
      <div>
        <p>4.接收到父组件的name属性：{this.state.name}</p>
      </div>
    );
  }
}

export default Bottom;
