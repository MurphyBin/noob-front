import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Sider  from './menu/Sider'

class App extends Component {
  render() {
    return (
      <div className="App">
           <div className="top">
           <h1>X-Diamond 配置中心</h1>
           </div>
          <Sider />
          <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
