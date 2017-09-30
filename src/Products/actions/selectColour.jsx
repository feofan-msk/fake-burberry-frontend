export const SELECT_COLOUR = 'SELECT_COLOUR';

export default function selectColour(colourIndex) {
  return {
    type: SELECT_COLOUR,
    colourIndex,
  };
}
