import { connect } from 'react-redux';
import MyComponent from './myComponent'; // 纯UI组件

// Map Redux state to component props
// 将Redux状态映射到组件props
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}

// Map Redux actions to component props
// 将Redux动作映射到组件prop 
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'change',
      payload: e.target.value
    })
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default App;

// 2》容器组件，数据处理，映射关系  负责订阅 Store，将 Store 的数据处理以后，再通过参数传给 UI 组件。
