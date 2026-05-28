const users = [
  {
    id: 1,
    name: "Aarav",
    address: {
      city: "Mumbai",
      pincode: "400001",
    },
    prefs: {
      theme: "dark",
    },
  },

  {
    id: 2,
    name: "Priya",
    address: {
      city: "Bengaluru",
    },
  },

  {
    id: 3,
    name: "Rahul",
  },

  {
    id: 4,
    name: "Sneha",
    address: null,
    prefs: {
      theme: null,
    },
  },
];


// Format Profile
const formatProfile = (user) => {
  const city = user.address?.city ?? "n/a";

  const pincode = user.address?.pincode ?? "n/a";

  const theme = user.prefs?.theme ?? "light";

  return `${user.name} | ${city} (${pincode}) | theme: ${theme}`;
};


// Output
users.forEach((user) => {
  console.log(formatProfile(user));
});