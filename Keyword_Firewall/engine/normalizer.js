/**
 * Normalization Pipeline - Adaptive DFA Memory Compiler
 * Previene la explosion de estados en RE2 para cadenas > 4 caracteres.
 */

const LEET_MAP = {
  'a': '[a4@]',
  'b': '[b8]',
  'e': '[e3]',
  'g': '[g96]',
  'i': '[i1!|]',
  'l': '[l1|]',
  'o': '[o0]',
  's': '[s5$]',
  't': '[t7+]',
  'z': '[z2]'
};

export function foldDiacritics(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

/**
 * Compila una palabra individual.
 * Si es corta (<= 4 letras), permite separadores internos.
 * Si es larga (> 4 letras), usa sustitucion leet lineal (consumo RE2 O(1)).
 */
function compileSingleWord(word) {
  const folded = foldDiacritics(word);
  const allowInternalDelimiters = folded.length <= 4;
  const delimiter = allowInternalDelimiters ? '[-._+%]*' : '';

  return folded
    .split('')
    .map(char => LEET_MAP[char] || char)
    .join(delimiter);
}

/**
 * Procesa frases completas preservando separadores de red (+, %20, guiones) entre palabras.
 */
export function buildTokenRegex(token) {
  const cleaned = token.trim();
  // Divide frases por espacios ("traje de bano" -> ["traje", "de", "bano"])
  const words = cleaned.split(/\s+/);
  
  const compiledWords = words.map(compileSingleWord);
  
  // Conector entre palabras: exige al menos un caracter de espacio/separador de red
  return compiledWords.join('[-._+%]+');
}