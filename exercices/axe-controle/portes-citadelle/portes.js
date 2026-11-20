// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 */
export function accessMessage(level) {
  let message
  if (level >= 5) message = "Accès autorisé"
  else message = "Accès refusé"
  return message
}

/**
 * Retourne l'état textuel d'une porte.
 */
export function doorStatus(isOpen) {
  let etat
  if (isOpen) etat = "Ouverte"
  else etat = "Fermée"
  return etat
}

/**
 * Retourne le nom de la zone correspondant à un code.
 */
export function zoneName(code) {
  let name
  if (code == "N")name = "Les Fondations"
  else if(code == "E")name = "Les Archives"
  else if(code == "SE")name = "La Forge"
  else if(code == "SO")name = "La Citadelle"
  else if(code == "O")name = "La Faille"
  else name = "Zone inconnue"
  return name
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 */
export function alertLevel(energy) {
  let text
  if (energy < 20)text = "CRITIQUE"
  else if(energy >= 20 && energy <= 49)text = "FAIBLE"
  else if(energy >= 50 && energy <= 79)text = "STABLE"
  else text = "OPTIMAL"
  return text
}
