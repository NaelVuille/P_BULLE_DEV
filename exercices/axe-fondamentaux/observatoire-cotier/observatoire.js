// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 */
/**
 * 
 * @param {*} value 
 * @returns {string}
 */
export function dataType(value) {
  return typeof(value)
}

/**
 * Indique si le comptage vaut undefined.
 */
/**
 * 
 * @param {number} count 
 * @returns {boolean}
 */
export function isNotTransmitted(count) {
  return count === undefined
}

/**
 * Indique si le comptage vaut null.
 */
/**
 * 
 * @param {Number} count 
 * @returns {boolean}
 */
export function isOffline(count) {
  return count === null
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 */
/**
 * 
 * @param {Number} count 
 * @returns {boolean}
 */
export function hasBirdCount(count) {
  return count != null
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 */
/**
 * 
 * @param {Number} northCount 
 * @param {Number} southCount 
 * @returns {Number}
 */
export function totalBirds(northCount, southCount) {
  if (isNaN(northCount) || typeof(northCount) == undefined) northCount = 0
  if (isNaN(southCount) || typeof(southCount) == undefined) southCount = 0
  return northCount + southCount
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 */
/**
 * 
 * @param {number} height 
 * @returns {boolean}
 */
export function isValidWaveHeight(height) {
  return typeof(height) == "number" && !isNaN(height)
}
