require('marko/node-require').install();
require('marko/express');
const app = require('./src/config/custom-express');

app.listen(3000, () => {
  console.log(`listening on port 3000...`);
});
