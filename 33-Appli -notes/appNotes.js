// Récupération du bouton d'ajout de notes et des notes existantes dans le local storage si c'est le cas
const addBtn = $('#add');
let notes = JSON.parse(localStorage.getItem('notes'));

// Si des notes existent déjà dans le local storage, on les ajoute à la page avec la fonction addNewNote()
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

// Eventlistener onClick sur le bouton d'ajout de notes
addBtn.click(() => addNewNote());

// La fonction addNewNote() crée une nouvelle note avec des boutons d'actions (éditer et supprimer) et un champ de texte
function addNewNote(text = '') {
  const note = $('<div>').addClass('note');

  note.html(`
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `);

  const editBtn = note.find('.edit');
  const deleteBtn = note.find('.delete');
  const main = note.find('.main');
  const textArea = note.find('textarea');

  textArea.val(text);
  main.html(marked(text));

  // Eventlistener onclic sur le bouton de suppression
  deleteBtn.click(() => {
    note.remove();

    updateLS();
  });

  // Eventlistener onclic sur le bouton de modification
  editBtn.click(() => {
    main.toggleClass('hidden');
    textArea.toggleClass('hidden');
  });

  // Eventlistener onInput sur la zone de texte
  textArea.on('input', (e) => {
    const { value } = e.target;

    main.html(marked(value));

    updateLS();
  });

  // Ajout de la note à la page
  $('body').append(note);
}

// Fonction de mise à jour du local storage
function updateLS() {
  const notesText = $('textarea');

  const notes = [];

  notesText.each((index, note) => {
    notes.push(note.value);
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}