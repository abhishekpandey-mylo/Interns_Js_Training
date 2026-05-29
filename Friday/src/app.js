import {
  notes,
  addNote,
  deleteNote,
} from "./data.js";

import {
  renderNotes,
  renderTagFilters,
} from "./ui.js";

import {
  debounce,
} from "./utils.js";

const form =
  document.querySelector("#note-form");

const searchInput =
  document.querySelector("#search");

const notesContainer =
  document.querySelector("#notes");

const tagFilters =
  document.querySelector("#tag-filters");

let selectedTag = "";

let searchQuery = "";

function updateUI() {

  let filteredNotes = [...notes];

  if (selectedTag) {

    filteredNotes = filteredNotes.filter(
      note => note.tags.includes(selectedTag)
    );
  }

  if (searchQuery) {

    filteredNotes = filteredNotes.filter(note => {

      const text = `
        ${note.title}
        ${note.body}
      `.toLowerCase();

      return text.includes(
        searchQuery.toLowerCase()
      );
    });
  }

  renderNotes(filteredNotes, selectedTag);

  renderTagFilters(notes);
}

updateUI();

form.addEventListener("submit", event => {

  event.preventDefault();

  const data = Object.fromEntries(
    new FormData(form)
  );

  const newNote = {
    id: Date.now(),
    title: data.title.trim(),
    body: data.body.trim(),
    tags: data.tags
      .split(",")
      .map(tag => tag.trim())
      .filter(Boolean),

    createdAt: new Date().toISOString(),
  };

  addNote(newNote);

  updateUI();

  form.reset();
});

notesContainer.addEventListener("click", event => {

  const deleteBtn =
    event.target.closest(".delete-btn");

  if (deleteBtn) {

    const note =
      event.target.closest(".note");

    const id = Number(note.dataset.id);

    deleteNote(id);

    updateUI();

    return;
  }

  const tag =
    event.target.closest(".tag");

  if (tag) {

    selectedTag = tag.dataset.tag;

    updateUI();
  }
});

tagFilters.addEventListener("click", event => {

  const tag =
    event.target.closest(".tag");

  if (!tag) return;

  const clickedTag =
    tag.dataset.filter;

  selectedTag =
    selectedTag === clickedTag
      ? ""
      : clickedTag;

  updateUI();
});

const handleSearch = debounce(value => {

  searchQuery = value;

  updateUI();

}, 400);

searchInput.addEventListener("input", event => {

  handleSearch(event.target.value);
});