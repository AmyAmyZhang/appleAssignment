import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieList list="My List" btnName="Remove" listType="mylist"/>
        <MovieList list="Recommendation List" btnName="Add" listType="recommendations"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
