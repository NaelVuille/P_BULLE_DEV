// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
export function sumRounds(numberOfRounds) {
  let result = 0;

  for (let i = 0; i <= numberOfRounds; i++) {
    result += i;
  }
  return result;
}

/**
 * Compte le nombre de caractères d'un code.
 */
export function countSymbols(code) {
  let result = 0;

  for (let i of code) {
    result++;
  }
  return result;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
export function countX(code) {
  let result = 0;

  for (let i of code) {
    if (i == "x" || i == "X") result++;
  }
  return result;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
  let result = 0;

  while (energy - consumption >= 0) {
    result++;
    energy -= consumption;
  }

  return result;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  let i = 0;
  let result = 0;

  while (sumRounds(i) <= limit) {
    result++;
    i++;
  }
  return result;
}
