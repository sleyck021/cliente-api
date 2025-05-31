const Cliente = require('../models/Cliente');
const { Op } = require('sequelize');

exports.createCliente = async (req, res) => {
  try {
    const { cpf } = req.body;
    const existing = await Cliente.findOne({ where: { cpf } });
    if (existing) {
      return res.status(400).json({ error: 'CPF já cadastrado.' });
    }
    const cliente = await Cliente.create(req.body);
    return res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar cliente.' });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado.' });
    return res.status(200).json(cliente);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar cliente.' });
  }
};

exports.getClientes = async (req, res) => {
  try {
    const { nome, cidade, uf } = req.query;
    const where = {};
    if (nome) where.nome = { [Op.iLike]: `%${nome}%` };
    if (cidade) where.cidade = cidade;
    if (uf) where.uf = uf;
    const clientes = await Cliente.findAll({ where });
    res.status(200).json(clientes);
  } catch {
    res.status(500).json({ error: 'Erro ao listar clientes.' });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const { codigo } = req.params;
    const cliente = await Cliente.findByPk(codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado.' });

    if (req.body.cpf && req.body.cpf !== cliente.cpf) {
      const cpfExists = await Cliente.findOne({ where: { cpf: req.body.cpf } });
      if (cpfExists) {
        return res.status(400).json({ error: 'CPF já em uso por outro cliente.' });
      }
    }

    await cliente.update(req.body);
    res.status(200).json(cliente);
  } catch {
    res.status(500).json({ error: 'Erro ao atualizar cliente.' });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    const { codigo } = req.params;
    const cliente = await Cliente.findByPk(codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado.' });

    await cliente.destroy();
    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Erro ao excluir cliente.' });
  }
};
