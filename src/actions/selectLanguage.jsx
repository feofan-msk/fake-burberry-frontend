export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';

export default function selectLanguage(language) {
  return {
    type: SELECT_LANGUAGE,
    language,
  };
}
