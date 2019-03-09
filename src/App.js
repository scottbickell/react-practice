import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {
  render() {

    const characters = [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspriring actrees'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ];
    return (
      <div class="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
