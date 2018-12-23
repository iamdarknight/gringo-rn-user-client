import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

export const getCurrentLocation = () => {
  const options = {
    // timeout: 2000,
    // maximumAge: 10000,
    // enableHighAccuracy: true,
  };
  console.log('Calling Tracker....');
  const location = BackgroundGeolocation.getCurrentLocation(location => console.log(location), console.log(error.message), options);
  console.log(`Location:${  location}`);
  return location;
};

export const getTrackerStatus = () => {};
export const getRecentLocations = () => {};
export const deleteLocations = () => {};
