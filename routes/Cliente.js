const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: DataTypes.DATEONLY,
  rg: DataTypes.STRING,
  cpf: {
    type: DataTypes.STRING,
    unique: true,
  },
  telefone: DataTypes.STRING,
  endereco: DataTypes.STRING,
  numero: DataTypes.STRING,
  cidade: DataTypes.STRING,
  uf: DataTypes.STRING,
  cep: DataTypes.STRING,
}, {
  tableName: 'clientes',
  timestamps: false,
});

module.exports = Cliente;
