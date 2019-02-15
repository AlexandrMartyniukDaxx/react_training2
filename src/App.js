import React, { Component } from 'react';
import './App.css';
import fixtures from './fixtures';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={fixtures}/>
      </div>
    );
  }
}

export default App;
