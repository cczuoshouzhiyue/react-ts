import * as React from 'react';
import './App.less';
import Header from './components/Header/index';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
