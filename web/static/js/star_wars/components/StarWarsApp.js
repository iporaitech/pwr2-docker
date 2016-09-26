// file: star-wars/components/StarWarsApp.js
import React from 'react';
import Relay from 'react-relay';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from 'material-design-lite/material.css';
// Example components
import StarWarsShip from './StarWarsShip';
import AddShipMutation from '../mutation/AddShipMutation';

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
        <div styleName="mdl-grid">
          <div styleName="mdl-cell mdl-cell--12-col">
            <h1>Start Wars example</h1>
          </div>
        </div>
        <div styleName="mdl-grid">
          <div styleName="mdl-cell mdl-cell--12-col">
            <h2 styleName="mdl-layout-title">Introduce Ship</h2>

            <div styleName="mdl-grid">
              <div styleName="mdl-cell mdl-cell--12-col">
                <div className="mdl-js-textfield" styleName="mdl-textfield mdl-textfield--floating-label">
                  <input id="ship-name" value={this.state.shipName} onChange={this.handleInputChange.bind(this)} styleName="mdl-textfield__input" type="text"/>
                  <label styleName="mdl-textfield__label" htmlFor="ship-name">Ship Name...</label>
                </div>
              </div>

              <div styleName="mdl-cell mdl-cell--12-col">
                <label className="mdl-js-radio mdl-js-ripple-effect" styleName="mdl-radio" htmlFor="option-1">
                  <input type="radio"
                    id="option-1"
                    styleName="mdl-radio__button"
                    name="options"
                    value={factions[0].id}
                    onChange={this.handleSelectionChange.bind(this)}
                    checked={this.state.factionId == factions[0].id}
                  />
                  <span styleName="mdl-radio__label">
                    {factions[0].name}
                  </span>
                </label>
                <label className="mdl-js-radio mdl-js-ripple-effect" styleName="mdl-radio" htmlFor="option-2">
                  <input type="radio"
                    id="option-2"
                    styleName="mdl-radio__button"
                    name="options"
                    value={factions[1].id}
                    onChange={this.handleSelectionChange.bind(this)}
                    checked={this.state.factionId == factions[1].id}
                  />
                  <span styleName="mdl-radio__label">
                    {factions[1].name}
                  </span>
                </label>
              </div>
              <div styleName="mdl-cell mdl-cell--12-col">
                <button className="mdl-js-button"
                  styleName="mdl-button mdl-button--raised mdl-button--colored"
                  onClick={this.handleAddShip.bind(this)}>
                  Add Ship
                </button>
              </div>
            </div>
          </div>
        </div>
        <div styleName="mdl-grid">
          {factions.map((faction, index) => (
            <div key={index} styleName="mdl-cell mdl-cell--6-col">
              <h1>{faction.name}</h1>
              <ol>
                {faction.ships.edges.map(({node}) => (
                  <li key={node.id}><StarWarsShip ship={node} /></li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    );
  }
} // class StarWarsApp

export default Relay.createContainer(
  mdlUpgrade(StarWarsApp, styles, { allowMultiple: true }),
  {
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
      `
    }
  }
);

export const Queries = {
  // TODO: Find out how to pass params from router.
  // factions: () => Relay.QL`query { factions(names: $factionNames) }`,
  factions: () => Relay.QL`query { factions(names: ["Galactic Empire", "Alliance to Restore the Republic"]) }`
};
