// @flow
import axios from 'axios';
import { APP_ID } from './constants';

const fetchPlaceInfo: Function =
 (placeID: string) => axios({
   method: 'get',
   url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&fields=formatted_address&key=${APP_ID}`,
 });

export default fetchPlaceInfo;
