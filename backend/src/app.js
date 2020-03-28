//(@) &
const express = require('express');

const cors = require('cors');

const { errors } = require('celebrate');
// importando as rotas
const routes = require('./routes');


const app = express();

// seguranca
app.use(cors());

// Defini requesr como json
app.use(express.json());

// Usando as Rotas essa linha deve ficar abaixo do Json
app.use(routes);
app.use(errors());

/**
* Rota  / Recurso
*/

/**
 * Metodos Http
 * 
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Altarar uma informacao no back-end
 * DELETE : deletar uma informacao no back-end
*/

/**
 * Tipos de parametros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" Filtros, paginacao
 * Route Params: Parâmetros utilizados para identificar recusros
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


 /**
  * SQL: MySQL, SQLlite, PostgreSQL, Oracle, etc..
  * NoSQL, MongoDB, etc..
  * 
  */

  /**
   * KNEX para query com com banco de dados
   */

   /**
    * Rotas : criado arquivo especifico para rotas routes
    * 
    */


module.exports = app;