
export function filterArtistData(artistdata) {
  let output = {};

  output.name= artistdata.name ;
  output.mbid= artistdata.mbid ;
  output.picture= artistdata.image_url ;
  output.eventcount = artistdata.upcoming_event_count ;
  output.fb = artistdata.facebook_page_url ;

  return output;
}

export function filterEventData(eventdata) {

}
