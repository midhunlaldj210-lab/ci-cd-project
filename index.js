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

name = "ci-cd-project"  
version = "1.0.0"
description = "A simple CI/CD pipeline project"
main = "index.js" 
scripts = {
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
author = "Your Name"
license = "ISC"