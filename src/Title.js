import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Title extends Component {
  //规范接收父组件传递过来的子组件的属性类型
  static contextTypes = {
     title: PropTypes.string,
  }

  // 获取父组件传递过来的属性值通过this.context来获取
  render() {
    return (
      <div>
        <p>1.接收到父组件的title属性：{this.context.title}</p>
      </div>
    );
  }
}

export default Title;
