const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD pipeline!');
});

module.exports = app;   

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

