// file: star-wars/index.js
import React from 'react';
import Relay from 'react-relay';

// Base components
import Ship from './Ship';
import AddShipMutation from './AddShipMutation';
import Grid, { Cell } from 'shared/grid';
import Textfield from 'shared/textfield';

// CSS
import mdlUpgrade from 'lib/mdlUpgrade';
import CSSModules from 'react-css-modules';

class StarWarsApp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      factionId: props.factions[0].id,
      shipName: ''
    };
  }

  handleAddShip() {
    const name = this.state.shipName;
    this.props.relay.commitUpdate(
      new AddShipMutation({
        name,
        faction: this.props.factions.find(f => f.id == this.state.factionId),
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
        <Grid>
          <Cell col={12}>
            <h1>Start Wars example</h1>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h2 className="mdl-layout-title">Introduce Ship</h2>
            <Grid>
              <Cell col={12}>
                <Textfield id="ship-name"
                  labelText="Ship Name..."
                  value={this.state.shipName}
                  onChange={this.handleInputChange.bind(this)}
                />
              </Cell>
              <Cell col={12}>
                <label className="mdl-js-radio mdl-js-ripple-effect mdl-radio" htmlFor="option-1">
                  <input type="radio"
                    id="option-1"
                    className="mdl-radio__button"
                    name="options"
                    value={factions[0].id}
                    onChange={this.handleSelectionChange.bind(this)}
                    checked={this.state.factionId == factions[0].id}
                  />
                  <span className="mdl-radio__label">
                    {factions[0].name}
                  </span>
                </label>
                <label className="mdl-js-radio mdl-js-ripple-effect mdl-radio" htmlFor="option-2">
                  <input type="radio"
                    id="option-2"
                    className="mdl-radio__button"
                    name="options"
                    value={factions[1].id}
                    onChange={this.handleSelectionChange.bind(this)}
                    checked={this.state.factionId == factions[1].id}
                  />
                  <span className="mdl-radio__label">
                    {factions[1].name}
                  </span>
                </label>
              </Cell>
              <Cell col={12}>
                <button onClick={this.handleAddShip.bind(this)}
                  className="mdl-js-button mdl-button mdl-button--raised mdl-button--colored">
                  Add Ship
                </button>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
        <Grid>
          {factions.map((faction, index) => (
            <Cell key={index} col={6}>
              <h1>{faction.name}</h1>
              <ol>
                {faction.ships.edges.map(({node}) => (
                  <li key={node.id}><Ship ship={node} /></li>
                ))}
              </ol>
            </Cell>
          ))}
        </Grid>
      </div>
    );
  }
} // class StarWarsApp

/*** exports ***/
export default Relay.createContainer(
  mdlUpgrade(
    StarWarsApp
  ),{
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
                ${Ship.getFragment('ship')}
              }
            }
          }
          ${AddShipMutation.getFragment('faction')},
        }
      `
    }
  }
);
