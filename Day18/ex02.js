const logs = [
  { user: "A", action: "login", time: "2024-01-01" },
  { user: "B", action: "login", time: "2024-01-01" },
  { user: "A", action: "logout", time: "2024-01-02" },
  { user: "A", action: "purchase", time: "2024-01-02" },
  { user: "C", action: "login", time: "2024-01-01" },
];

const actions = ["login", "logout", "purchase"];

const grouped = logs.reduce((acc, log) => {
  if (!acc[log.time]) {
    acc[log.time] = actions.reduce((o, a) => {
      o[a] = 0;
      return o;
    }, {});
  }
  acc[log.time][log.action]++;
  return acc;
}, {});

console.log(grouped);
