import React from 'react';
import ReactDOM from 'react-dom';
// redux要求UI的渲染组件都是纯组件，不包含任何状态（this.state）
class MyComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <p>{this.props.text}</p>
        <input defaultValue={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default MyComponent;
// 》1 纯UI组件 不包含 state 和生命周期方法，不涉及组件的行为，只涉及组件的外观
