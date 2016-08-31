import axios from 'axios';

export default class Guide{

  constructor(){
    this.guideData = null;
    this.currentShows = [];
  }

  init(){
    return this.getGuideData();
  }

  getGuideData(){
    return axios.get('http://localhost:1337/guide.json')
    .then(response => {
      this.guideData = response.data;
      this.setCurrentShows();
      this.build
    });
  }

  setCurrentShows(){
    this.showsToIDMap = new Map();
    let show = null;

    this.currentShows = this.guideData.channels.map(channel => {
      show = channel.shows[0];
      show.Channel = channel.name;
      show.ChannelLogo = channel.logo;
      this.showsToIDMap.set(show.id,show);
      return show;
    });
  }

  getShow(id){
    return this.showsToIDMap.get(id);
  }

  getShowsByGenre(genre){
    return this.currentShows.filter(show => {
      return show.Genre.indexOf(genre) > -1;
    }).slice(0,6);
  }

  getShowsByRating(){
    return this.currentShows.sort((a,b)=>{
      a = parseFloat(a.imdbRating),
      b = parseFloat(b.imdbRating);

      if(a < b){
        return 1;
      }

      if(a > b){
        return -1;
      }

      return 0;
    }).slice(0,6);
  }

  getEntitlements(){

  }

  getRankings(){

  }
}
