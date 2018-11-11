import React, {PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 测试react新的生命周期
 getDerivedStateFromProps:几种种情况会调用
 1）组件实例化
 2）父组件刷新
 3）props发生变化
 4)在任何一次render前，getDerivedStateFromProps都会被触发。这其中包括：
 
 getDerivedStateFromProps方法中不能调用
 
1. new props. 2. setState 3. forceUpdate
getSnapshotBeforeUpdate
执行在render之后
 */
class NewLife extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            innerShow: !this.props.show || false,
            innerOther:'wo bu bian',
        }
        console.log("newLife constructor");
    }
    //nextProps：新的props  prevState：上一个state
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("newLife getDerivedStateFromProps nextProps="+JSON.stringify(nextProps));
        console.log("newLife getDerivedStateFromProps prevState="+JSON.stringify(prevState));
    
        if (!nextProps.show !== prevState.innerShow) {
          return {
            innerShow: !nextProps.show,
          };//和以前的state进行合并
        }
        //这里调用setState不会导致重新render
        return null;//表示state不改变，仍然会render，除非shouldComponentUpdate拦截或子组件继承自PureComponent
      }

      componentDidMount() {
         console.log("newLife componentDidMount");
      }

    //   shouldComponentUpdate() {
    //     console.log("==shouldComponentUpdate");
    //        //这里可以进行一次拦截
    //     return false;
    //   }
    

    componentDidUpdate(prevProps, prevState,data) {
        console.log("newLife componentDidUpdate prevProps="+JSON.stringify(prevProps));
        console.log("newLife componentDidUpdate prevState="+JSON.stringify(prevState));
        console.log("newLife componentDidUpdate data="+JSON.stringify(data));
    }
    
    //返回值将作为componentDidUpdate的第三个参数
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('newLife getSnapshotBeforeUpdate this.state.innerShow='+this.state.innerShow);
        console.log("newLife getSnapshotBeforeUpdate prevProps="+JSON.stringify(prevProps));
        console.log("newLife getSnapshotBeforeUpdate prevState="+JSON.stringify(prevState));
        return {newData:2};
    }

    //子组件接收父组件属性的默认值，如果父组件不传，则子组件使用
    static defaultProps = {
       show:true
    }

    //描述子组件中接收父组件属性的类型
    static propTypes = {
      show: PropTypes.bool.isRequired,
    }
    

    // 通过state来改变子组件的属性值
  render() {
    const {innerShow,innerOther} = this.state;
    console.log("newLife  render innerShow="+innerShow);
    console.log('newLife  render innerOther='+innerOther);
    console.log("newLife render this.props.show="+this.props.show);
    return (
      <div>
        <p>6.接收到父组件的show属性：{this.props.show+''}</p>
        {
            innerShow?
            <p>可以看到我了</p>
            :null
        }
        <p>子组件内部不受影响的内容:{innerOther}</p>
      </div>
    );
  }
}

export default NewLife;
