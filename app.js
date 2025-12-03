const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


function getGreeting(name = 'World') {
  return `Hello, ${name}!`;
}


app.get('/', (req, res) => {
  res.send(getGreeting('popka ogurchika 1'));
});


if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// экспортируем для тестов
module.exports = { app, getGreeting };
