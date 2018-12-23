// @flow
import axios from 'axios';
import { APP_ID } from './constants';

const fetchSearchQueryResults =
 (query, location) => axios({
   method: 'get',
   url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location.latitude},${location.longitude}&radius=${100000}&key=${APP_ID}`,
 });

export default fetchSearchQueryResults;
