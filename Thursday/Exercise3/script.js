const members = [
  { id: 1, name: "Aarav", role: "Frontend", active: true },
  { id: 2, name: "Priya", role: "Backend", active: true },
  { id: 3, name: "Rahul", role: "Designer", active: false },
  { id: 4, name: "Sneha", role: "QA", active: true },
];

const list = document.querySelector("#team");

const form = document.querySelector("#add-member");

function createMemberItem(member) {

  const li = document.createElement("li");

  li.dataset.id = member.id;

  const info = document.createElement("span");

  info.textContent = `${member.name} — ${member.role}`;

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.className = "delete-btn";

  li.append(info, deleteBtn);

  return li;
}

function renderMembers() {

  const activeMembers = members.filter(
    member => member.active
  );

  const items = activeMembers.map(createMemberItem);

  list.replaceChildren(...items);
}

renderMembers();

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const data = Object.fromEntries(
    new FormData(form)
  );

  if (data.name.trim().length < 2) {

    alert("Name must be at least 2 characters");

    return;
  }

  const newMember = {
    id: Date.now(),
    name: data.name.trim(),
    role: data.role.trim(),
    active: true,
  };

  members.push(newMember);

  const li = createMemberItem(newMember);

  list.append(li);

  form.reset();
});

list.addEventListener("click", (event) => {

  const li = event.target.closest("li");

  if (!li) return;

  if (event.target.classList.contains("delete-btn")) {

    const id = Number(li.dataset.id);

    const index = members.findIndex(
      member => member.id === id
    );

    if (index !== -1) {
      members.splice(index, 1);
    }

    li.remove();

    return;
  }

  li.classList.toggle("selected");
});