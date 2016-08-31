import React from 'react';
import Guide from 'lib/guide';
import {Grid,GridNode} from 'lib/grid';
import ShowPreview from 'common/show-preview/show-preview.jsx';
import style from './details.css';

export default React.createClass({
  getInitialState(){
    return {
      show : {},
    }
  },

  componentDidMount() {
    this.getShow();
  },

  getShow() {
    let guide = new Guide();
    guide.init().then(()=>{
      this.setState({
        show: guide.getShow(this.props.params.id)
      });
    })
  },

  render() {
    let show = this.state.show,
        cast = show.Actors ? show.Actors.split(",") : null;

      return (
        <div className="details">
          <div className="details-titlebar card">
            <div className="details-channel">
              <img src={show.ChannelLogo}/>
            </div>
            <div className="details-title">
                {show.Title}
            </div>
          </div>


          <div className="details-column details-poster card">
            <img className="card-img-top" src={show.Poster} alt="Card image cap"/>
              <div className="card-block">
                      <div>
                        <b>Runtime:</b> {show.Runtime}
                      </div>
                      <div>
                        <b>Rated:</b> {show.Rated}
                      </div>
                      <div>
                        <b>IMDB Rating:</b> {show.imdbRating}
                      </div>
            </div>
          </div>

          <div className="details-column details-main card">
            <Grid gridId="gallery">
              <GridNode nodeId="0">
                <div className="details-preview">
                  <ShowPreview id={show.id} src={show.Preview}/>
                </div>
              </GridNode>
            </Grid>

              <div className="card-block">
                <div>
                  <legend>Plot</legend>
                  {show.Plot}
                </div>
                <br/>
                <div>
                  <legend>Cast</legend>
                  {cast}
                </div>
              </div>
          </div>
      </div>

      )
    }
});
