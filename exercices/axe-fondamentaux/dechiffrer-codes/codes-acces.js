// @ts-check

/**
 * Convertit une valeur en nombre.
 */
/**
 * 
 * @param {string} value 
 * @returns {Number}
 */
export function convertCode(value) {
  return Number(value)
}

/**
 * Compare deux valeurs avec l'égalité souple.
 */
/**
 * 
 * @param {string} value1 
 * @param {string} value2 
 * @returns {Boolean}
 */
export function sameCodeLoose(value1, value2) {
  return value1 == value2
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 */
/**
 * 
 * @param {string} value1 
 * @param {string} value2 
 * @returns {boolean}
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2
}

/**
 * Indique si un code est pair.
 */
/**
 * 
 * @param {number} code 
 * @returns {Boolean}
 */
export function isEvenCode(code) {
  return code % 2 == 0 ? true : false
}

/**
 * Indique si la conversion de la valeur produit NaN.
 */
/**
 * 
 * @param {number} value 
 * @returns {boolean}
 */
export function isInvalidCode(value) {
  return isNaN(value)
}
