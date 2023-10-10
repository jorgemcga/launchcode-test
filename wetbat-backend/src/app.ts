import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import airportsRoutes from './routes/airports';
import transportationsRoutes from './routes/transportations';
import quotesRoutes from './routes/quotes';

const app = express();

app.use(bodyParser.json());

sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error: Error) => {
    console.error('Error on database connection:', error);
  });

app.use('/airports', airportsRoutes);
app.use('/transportations', transportationsRoutes);
app.use('/quotes', quotesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
