import React from 'react';
import Relay from 'react-relay';
import StarWarsShip from './StarWarsShip';
import AddShipMutation from '../mutation/AddShipMutation';

class StarWarsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      factionId: 1,
      shipName: '',
    };
  }

  handleAddShip() {
    const name = this.state.shipName;
    this.props.relay.commitUpdate(
      new AddShipMutation({
        name,
        faction: this.props.factions[this.state.factionId],
      })
    );
    this.setState({shipName: ''});
  }

  handleInputChange(e) {
    this.setState({
      shipName: e.target.value,
    });
  }

  handleSelectionChange(e) {
    this.setState({
      factionId: e.target.value,
    });
  }

  render() {
    const {factions} = this.props;
    return (
      <div>
        <ol>
          {factions.map(faction => (
            <li key={faction.id}>
              <h1>{faction.name}</h1>
              <ol>
                {faction.ships.edges.map(({node}) => (
                  <li key={node.id}><StarWarsShip ship={node} /></li>
                ))}
              </ol>
            </li>
          ))}
            <li>
              <h1>Introduce Ship</h1>
              <ol>
                <li>
                  Name:
                  <input type="text" value={this.state.shipName} onChange={this.handleInputChange.bind(this)} />
                </li>
                <li>
                  Faction:
                  <select onChange={this.handleSelectionChange.bind(this)} value={this.state.factionId}>
                    <option value="0">Galactic Empire</option>
                    <option value="1">Alliance to Restore the Republic</option>
                  </select>
                </li>
                <li>
                  <button onClick={this.handleAddShip.bind(this)}>Add Ship</button>
                </li>
              </ol>
            </li>
        </ol>
      </div>
    );
  }
}

export default Relay.createContainer(StarWarsApp, {
  fragments: {
    factions: () => Relay.QL`
      fragment on Faction @relay(plural: true) {
        id,
        factionId,
        name,
        ships(first: 10) {
          edges {
            node {
              id
              ${StarWarsShip.getFragment('ship')}
            }
          }
        }
        ${AddShipMutation.getFragment('faction')},
      }
    `,
  },
});
