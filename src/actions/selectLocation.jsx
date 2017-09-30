export const SELECT_LOCATION = 'SELECT_LOCATION';

export default function selectLocation(location) {
  return {
    type: SELECT_LOCATION,
    location,
  };
}
