import React, {PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 通过子组件的引用改变子组件的属性
 PureComponent: 只有属性发生变化时才会发生render
 PureComponent底层进行了属性的浅比较
 */
class Other extends PureComponent {
    //子组件接收父组件属性的默认值，如果父组件不传，则子组件使用
    static defaultProps = {
        school:'huawen'
    }

    //描述子组件中接收父组件属性的类型
    static propTypes = {
        school: PropTypes.string.isRequired,
    }

    // 通过state来改变子组件的属性值
  render() {
    console.log('Other  render');
    return (
      <div>
        <p>5.接收到父组件的school属性：{this.props.school}</p>
      </div>
    );
  }
}

export default Other;
