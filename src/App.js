import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateInformation from './components/CreateInformation';
import Main from './components/Main';
import axios from 'axios';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: '',
    };
  }

  componentDidMount() {
    // //fetch는 연결한다는거
    // fetch('http://localhost:3001/api')
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ username: data.username }));
    axios
      .get('http://localhost:3001/list', {
        nickname: '은지님',
      })
      .then((response) => {
        this.setState({
          texts: response.data[0],
        });
        console.log('xx', this.state.texts);
      })
      .catch(function (error) {
        console.log('getPost error', error);
      });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          {this.state.texts ? this.state.texts.title : 'Hello World'}
        </header> */}
        <Route exact={true} path="/" component={Main} />
        <Route path="/createinformation" component={CreateInformation} />
      </div>
    );
  }
}

export default App;
