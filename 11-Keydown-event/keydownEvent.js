const insert = $('#insert');

$(document).keydown(function(event) {

  // Créer un objet pour stocker les informations de l'événement
  const keyInfo = {
    key: event.key === ' ' ? 'Space' : event.key,
    keyCode: event.keyCode,
    code: event.code
  }

  // Créer une fonction utilitaire pour créer des éléments HTML
  const createKeyElement = (label, value) => {
    const keyElement = $('<div></div>').addClass('key');
    keyElement.html(`
      <span class="label">${label}</span>
      <span class="value">${value}</span>
    `);
    return keyElement;
  }

  // Créer un élément HTML pour chaque propriété de l'événement
  //Attention le keyInfo.code est en qwerty
  const keyElements = [
    createKeyElement('Touche', keyInfo.key),
    createKeyElement('Code', keyInfo.code),
    createKeyElement('Code Touche', keyInfo.keyCode)
  ]

  // Effacer le contenu HTML de l'élément avec l'ID "insert"
  insert.html('');

  // Ajouter chaque élément HTML créé à l'élément avec l'ID "insert"
  keyElements.forEach(keyElement => {
    insert.append(keyElement);
  })
});
