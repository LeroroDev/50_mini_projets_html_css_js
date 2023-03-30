// Récupération du bouton d'ajout de notes et des notes existantes dans le local storage si c'est le cas
const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));

// Si des notes existent déjà dans le local storage, on les ajoute à la page avec la fonction addNewNote()
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

// Eventlistener onClick sur le bouton d'ajout de notes
addBtn.addEventListener("click", () => addNewNote());

// La fonction addNewNote() crée une nouvelle note avec des boutons d'actions (éditer et supprimer) et un champ de texte
function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete\"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  // Eventlistener onclic sur le bouton de suppression
  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  // Eventlistener onclic sur le bouton de modification
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  // Eventlistener onInput sur la zone de texte
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  // Ajout de la note à la page
  document.body.appendChild(note);
}

// Fonction de mise à jour du local storage
function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
