import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from "axios"

class Home extends Component {
  state = { programs: [] }

    componentDidMount() {
      axios.get('/api/programs')
        .then( res => {
          this.setState({ programs: res.data })
          // this.props.dispatch({ type: 'HEADERS', headers: res.headers });
      });
    }

    render() {
      return(
        <div className="ui grid">
          <Header>App Store</Header>
          { this.state.programs.map( program =>
              <div key={program.id} className="ui card four wide column">
                <h2>{program.name}</h2>
                <img src={program.avatar} />
                <h3>{program.description}</h3>
                <h3>{program.author}</h3>
              </div>
            )
          }
        </div>
      );
    }
}

export default Home;
