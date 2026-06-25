// ============================================================
// Docalya — Configuration centrale
// Modifiez ces valeurs pour mettre à jour la landing.
// ============================================================

/** URL de l'application (toutes les CTA pointent ici). */
export const APP_URL = "https://app.docalya.fr";

/** Nombre total de places en accès gratuit à vie. */
export const SPOTS_TOTAL = 15;

/** Nombre de places déjà prises. */
export const SPOTS_TAKEN = 5;

/** Places restantes (calculé automatiquement). */
export const SPOTS_LEFT = Math.max(SPOTS_TOTAL - SPOTS_TAKEN, 0);
