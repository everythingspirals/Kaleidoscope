import React from 'react';
import YouTube from 'react-youtube';

export default React.createClass({
  onReady(e) {
    e.target.mute();
  },
  render() {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Show pause/play buttons in player
        showinfo: 0,        // Hide the video title
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        cc_load_policty: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0         // Hide video controls when playing
      }
    };

    return (
        <YouTube
          videoId={this.props.src}
          opts={opts}
          onReady={this.onReady}
          className="show-preview"/>
    );
  }
});

/*
<div >
    <img data-src="holder.js/100px280/thumb" alt="100%x280" src={this.props.src} data-holder-rendered="true"/>
</div>
*/
