const { body, validationResult } = require('express-validator');

const validateCliente = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('cpf').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage('CPF inválido'),
  body('cep').optional().matches(/^\d{5}-\d{3}$/).withMessage('CEP inválido'),
  body('telefone').optional().isString(),
  body('data_nascimento').optional().isISO8601().toDate(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    next();
  },
];

const validateUpdate = [
  body('cpf').optional().matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage('CPF inválido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    next();
  },
];

module.exports = { validateCliente, validateUpdate };
