// Sélectionne tous les éléments du form avec la balise "label"
const labels = $("form label");

// Parcourt chaque élément de label
labels.each(function () {
  // Récupère le texte contenu dans l'élément
  const labelText = $(this).text();

  // Crée un tableau de chaînes de caractères HTML représentant chaque lettre du texte d'origine
  const animatedLetters = labelText
    .split("") // Divise le texte en lettres individuelles
    .map((letter, idx) => {
      // Pour chaque lettre, crée une chaîne de caractères HTML avec une transition-delay croissante
      return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
    });

  // Concatène les chaînes de caractères HTML en une seule chaîne HTML
  const animatedText = animatedLetters.join("");

  // Remplace le contenu HTML de l'élément de label par la version "animée" du texte
  $(this).html(animatedText);
});
