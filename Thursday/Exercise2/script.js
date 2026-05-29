const members = [
  { id: 1, name: "Aarav", role: "Frontend", active: true },
  { id: 2, name: "Priya", role: "Backend", active: true },
  { id: 3, name: "Rahul", role: "Designer", active: false },
  { id: 4, name: "Sneha", role: "QA", active: true },
];


const list = document.querySelector("#team");


const activeMembers = members.filter(member => member.active);


const items = activeMembers.map(member => {
  const li = document.createElement("li");

  li.textContent = `${member.name} — ${member.role}`;

  li.dataset.id = member.id;

  return li;
});


list.replaceChildren(...items);


list.addEventListener("click", (event) => {

  const li = event.target.closest("li");

  if (!li || !list.contains(li)) {
    return;
  }

  li.classList.toggle("selected");

  console.log("Toggled member:", li.dataset.id);
});