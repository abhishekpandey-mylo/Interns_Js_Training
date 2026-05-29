export let notes = JSON.parse(
  localStorage.getItem("notes")
) || [
  {
    id: 1,
    title: "Standup notes",
    body: "Discussed sprint goals.",
    tags: ["work", "meeting"],
    createdAt: "2026-05-20T10:00:00Z",
  },
  {
    id: 2,
    title: "Grocery list",
    body: "Milk, eggs, bread, fruit.",
    tags: ["personal"],
    createdAt: "2026-05-21T08:30:00Z",
  },
  {
    id: 3,
    title: "Reading list",
    body: "Finish You Don't Know JS.",
    tags: ["learning"],
    createdAt: "2026-05-22T19:15:00Z",
  },
  {
    id: 4,
    title: "Bug to fix",
    body: "Search input doesn't debounce.",
    tags: ["work", "bug"],
    createdAt: "2026-05-23T14:45:00Z",
  },
];

function saveNotes() {
  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );
}

export function addNote(note) {

  notes.push(note);

  saveNotes();
}

export function deleteNote(id) {

  notes = notes.filter(
    note => note.id !== id
  );

  saveNotes();
}