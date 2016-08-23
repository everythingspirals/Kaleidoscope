import axios from 'axios';

export default class Guide{

  constructor(){
    this.guideData = [];
    this.currentShows = [];
  }

  init(){
    return this.setGuideData();
  }

  setGuideData(){
    return axios.get('build/data/data.json')
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
      this.showsToIDMap.set(show.id,show);
      return show;
    });
  }

  getShow(id){
    return this.showsToIDMap.get(id);
  }

  getCurrentShowsByGenre(genre){
    return this.currentShows.filter(show => {
      return show.Genre.indexOf(genre) > -1;
    }).slice(0,7);
  }

  getCurrentShowsByRating(){
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
    });
  }
}
