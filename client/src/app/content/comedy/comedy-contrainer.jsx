import Comedy from './comedy';
import Relay from 'react-relay';

export default Relay.createContainer(Comedy, {
    fragments: {
      shows: () => Relay.QL`
        fragments on Shows {
          title,
          poster
        }
      `
    }
  }
});
