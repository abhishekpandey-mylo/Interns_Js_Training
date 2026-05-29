import { formatDate } from "./utils.js";

const notesContainer =
  document.querySelector("#notes");

const tagFilters =
  document.querySelector("#tag-filters");

export function renderNotes(
  notes,
  selectedTag = ""
) {

  const items = notes.map(note => {

    const div = document.createElement("div");

    div.className = "note";

    div.dataset.id = note.id;

    div.innerHTML = `
      <h3>${note.title}</h3>

      <p>${note.body}</p>

      <small>${formatDate(note.createdAt)}</small>

      <div class="tags">
        ${note.tags.map(tag => `
          <span
            class="tag ${selectedTag === tag ? "active-tag" : ""}"
            data-tag="${tag}"
          >
            ${tag}
          </span>
        `).join("")}
      </div>

      <button class="delete-btn">
        Delete
      </button>
    `;

    return div;
  });

  notesContainer.replaceChildren(...items);
}

export function renderTagFilters(notes) {

  const tags = [
    ...new Set(
      notes.flatMap(note => note.tags)
    )
  ];

  tagFilters.innerHTML = tags.map(tag => `
    <span class="tag" data-filter="${tag}">
      ${tag}
    </span>
  `).join("");
}