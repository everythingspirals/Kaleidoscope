import data from './data.json';

export function getShows(id){
  if(id){
    return [data.shows[id]];
  }

  return data.shows;
}
