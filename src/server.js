const { PORT } = require('./common/config');
const app = require('./app');
const { connectToDb } = require('./common/mongoDb');

connectToDb(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
