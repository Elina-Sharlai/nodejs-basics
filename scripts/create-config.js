const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config.json');

const defaultConfig = {
  port: 3000,
  env: 'development',
  db: {
    host: 'localhost',
    port: 5432,
    user: 'user',
    password: 'password',
    name: 'my_database',
  },
};

fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 2), (err) => {
  if (err) {
    console.error('❌ Не вдалося створити config.json:', err);
  } else {
    console.log('✅ Файл config.json створено успішно.');
  }
});
