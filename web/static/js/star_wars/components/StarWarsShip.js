import React from 'react';
import Relay from 'react-relay';

class StarWarsShip extends React.Component {
  render() {
    const {ship} = this.props;
    return <div>{ship.name}</div>;
  }
}

export default Relay.createContainer(StarWarsShip, {
  fragments: {
    ship: () => Relay.QL`
      fragment on Ship {
        id,
        name
      }
    `,
  },
});
