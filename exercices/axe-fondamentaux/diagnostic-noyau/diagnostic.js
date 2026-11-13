// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
/**
 * 
 * @param {*} value 
 * @returns {string}
 */
export function valueType(value) {
  return typeof(value)
}

/**
 * Indique si la valeur est undefined.
 */
/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */
export function isUndefined(value) {
  return typeof(value) == "undefined"
}

/**
 * Indique si la valeur est null.
 */
/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */
export function isNull(value) {
  return value === null
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */
export function hasKnownValue(value) {
  return value != null
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
/**
 * 
 * @param {number} energy 
 * @param {number} minimumEnergy 
 * @returns {boolean}
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return energy >= minimumEnergy
}

/**
 * Compare strictement le nom de la zone attendue.
 */
/**
 * 
 * @param {string} zone 
 * @param {string} expectedZone 
 * @returns {boolean}
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone
}
