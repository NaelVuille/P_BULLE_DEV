// @ts-check

/**
 * Valide une quantité d'énergie.
 */
export function validateEnergy(energy) {
  if (energy < 0) throw new Error("Énergie invalide");
  return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
 */
export function safeEnergyCheck(energy) {
  let text;

  try {
    validateEnergy(energy);
    text = "Énergie valide";
  } catch {
    text = "Énergie invalide";
  }
  return text;
}

/**
 * Valide un code de porte autorisé.
 */
export function validateGateCode(code) {
  switch (code) {
    case "ALPHA":
    case "BETA":
    case "OMEGA":
      return code;
    default:
      throw new Error("Code inconnu");
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 */
export function safeGateCheck(code) {
  let result;

  try {
    validateGateCode(code);
    result = "Code accepté";
  } catch {
    result = "Code refusé";
  }

  return result;
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
export function countValidAttempts(text) {
  let result = 0;

  for (let i of text) {
    if (i === "A" || i === "B") result++;
  }
  return result;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
export function attemptsBeforeLock(sequence) {
  let result = 0;
  let error = 0;
  for (let i of sequence) {
    if (error !== 3) result++;
    if (i === "X") error++;
  }

  return result;
}
