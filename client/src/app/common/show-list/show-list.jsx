
import style from './show-list.css';
import {Grid,GridNode} from 'lib/grid';

export default React.createClass({
  render() {
    let show, href;
    return (
    <div className="show-list" >
      <Grid gridId="gallery">
      {Object.keys(this.props.shows).map(key => {
        show = this.props.shows[key];
        return (
          <GridNode nodeId={key} key={key}>
           <ShowCard show={show}/>
          </GridNode>
         )}
      )}
    </Grid>
  </div>)
  }
});
