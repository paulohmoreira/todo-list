import React, { Component } from 'react';

import './styles.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          <input type="text" onChange={this.handleInputChange} />
          <button type="submit">Enviar</button>
        </form>

        <ul>
          <li>
            {novaTarefa}
          </li>
        </ul>
      </div>
    );
  }
}
