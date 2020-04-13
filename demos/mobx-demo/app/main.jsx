import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import Store from './store';

@observer
class App extends React.Component { // UI 层是观察者 UI 会观察到 Store 的变化，自动重新渲染。
  render() {
    return (
      <div className="index">
        <p>{this.props.store.decorated}</p>
        <input
          defaultValue={this.props.store.name}
          onChange={(event) => this.props.store.name = event.currentTarget.value}
        />
      </div>
    );
  }
}

const store = new Store(); // Store 是被观察者

ReactDOM.render(
  <App store={store} />,
  document.body.appendChild(document.createElement('div'))
);
