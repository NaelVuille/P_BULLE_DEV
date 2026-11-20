// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 */
export function isKnownUniversity(university) {
  let inside = false;

  for (let x of UNIVERSITIES) {
    if (x === university) {
      inside = true;
      break;
    }
  }
  return inside;
}

/**
 * Convertit un titre en niveau numérique.
 */
export function titleLevel(title) {
  switch (title) {
    case "Bachelor":
      return 1;
    case "Master":
      return 2;
    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 */
export function requiresMaster(university) {
  let inside = false;

  for (let x of MASTER_REQUIRED) {
    if (x === university) {
      inside = true;
      break;
    }
  }
  return inside;
}

/**
 * Indique si un visiteur est considéré comme fiable.
 */
export function isTrusted(university, title) {
  return (
    isKnownUniversity(university) &&
    ((titleLevel(title) >= 1 && !requiresMaster(university)) ||
      (requiresMaster(university) === true && titleLevel(title) === 2))
  );
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
export function welcomeMessage(university, title) {
  let result;

  if (!isKnownUniversity(university)) result = "Université inconnue";
  else if (titleLevel(title) === 0) result = "Titre inconnu";
  else if (requiresMaster(university) && titleLevel(title) !== 2)
    result = "Master requis";
  else result = "Bienvenue dans la Citadelle";

  return result;
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
/** */
export function allTrusted(universities, titles) {
  let trust = true;
  for (let i = 0; i < universities.length; i++) {
    if (!isTrusted(universities[i], titles[i])) trust = false;
  }
  return trust;
}
