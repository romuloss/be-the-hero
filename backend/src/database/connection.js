const knex = require('knex') ;
const configuration = require('../../knexfile');

//Verifica variavel de ambiente e define qual configuracao ira usar
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//Configura Conexao
const connection = knex(config);

//Expoe Connection
module.exports = connection;