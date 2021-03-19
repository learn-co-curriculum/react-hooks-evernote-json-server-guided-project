const faker = require("faker");
const fs = require("fs");
const path = require("path");

function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

const db = {
  users: [],
  notes: [],
};

db.users.push({
  id: 1,
  name: process.env.USER,
});

for (let id = 1; id <= 10; id++) {
  db.notes.push({
    id,
    userId: db.users[0].id,
    title: faker.lorem.sentence(rand(4)),
    body: faker.lorem.paragraphs(3),
  });
}

fs.writeFile(
  path.join(__dirname, "db.json"),
  JSON.stringify(db, null, 2),
  (err) => {
    if (err) {
      console.error("🚫 Something went wrong!");
      console.error(err);
    }
    console.log("🌱 Seed data saved to db/db.json");
  }
);
