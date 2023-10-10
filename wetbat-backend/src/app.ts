import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import airportsRoutes from './routes/airports';
import transportationsRoutes from './routes/transportations';
import quotesRoutes from './routes/quotes';

const app = express();

app.use(bodyParser.json());

// Conecta ao banco de dados
sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error: Error) => {
    console.error('Error on database connection:', error);
  });

// Rotas para CRUD de aeroportos
app.use('/airports', airportsRoutes);

// Rotas para CRUD de transportes
app.use('/transportations', transportationsRoutes);

// Rotas para CRUD de cotações
app.use('/quotes', quotesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
