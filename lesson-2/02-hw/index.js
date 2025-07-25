const fs = require('node:fs/promises');

const DB_PATH = 'db.json';

async function readContacts() {
  const data = await fs.readFile(DB_PATH, { encoding: 'utf-8' });

  const contacts = JSON.parse(data);

  console.log(typeof contacts, Array.isArray(contacts));

  console.log(contacts[0].name);

  return contacts;
}

async function writeContact(contacts) {
  await fs.writeFile(DB_PATH, JSON.stringify(contacts, undefined, 2));
}

async function main() {
  const contacts = await readContacts();

  contacts.push({
    id: 4,
    name: 'Lyly',
  });

  await writeContact(contacts);
}

main();
