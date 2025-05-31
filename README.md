API RESTful de Cadastro de Clientes

Esta é uma API RESTful desenvolvida com Node.js, Express e PostgreSQL que permite o gerenciamento de um cadastro de clientes com as operações básicas de CRUD (Create, Read, Update, Delete).

🛠️ Tecnologias Utilizadas

Node.js

Express.js

PostgreSQL

Sequelize (ORM)

express-validator

dotenv

nodemon (ambiente de desenvolvimento)


📦 Pré-requisitos

Node.js instalado

npm ou yarn instalado

PostgreSQL instalado e em execução


⚙️ Configuração do Banco de Dados

Crie um banco de dados PostgreSQL e execute o seguinte comando para criar a tabela:

CREATE TABLE clientes (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    rg VARCHAR(20),
    cpf VARCHAR(14) UNIQUE,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    numero VARCHAR(10),
    cidade VARCHAR(100),
    uf CHAR(2),
    cep VARCHAR(9)
);

🔧 Instalação

Clone o repositório e instale as dependências:

git clone <URL_DO_REPOSITORIO>
cd cliente-api
npm install

🌐 Configuração do Ambiente

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

DB_NAME=nome_do_banco
DB_USER=usuario
DB_PASSWORD=senha
DB_HOST=localhost
DB_PORT=5432
PORT=3000

🚀 Como Executar a API

npm start

A API estará disponível em: http://localhost:3000/api/clientes


---

📚 Documentação das Rotas (Endpoints)

➕ Criar Cliente

POST /api/clientes

Corpo da requisição (JSON):


{
  "nome": "Maria da Silva",
  "data_nascimento": "1990-05-12",
  "rg": "1234567",
  "cpf": "123.456.789-00",
  "telefone": "11999998888",
  "endereco": "Rua das Flores",
  "numero": "123",
  "cidade": "São Paulo",
  "uf": "SP",
  "cep": "01001-000"
}

Respostas:

201 Created: Cliente criado com sucesso.

400 Bad Request: Validação falhou ou CPF já cadastrado.

500 Internal Server Error: Erro inesperado no servidor.




---

🔍 Buscar Cliente por Código

GET /api/clientes/:codigo

Resposta:

200 OK: Cliente encontrado.

404 Not Found: Cliente não encontrado.

500 Internal Server Error: Erro inesperado.




---

📄 Listar Todos os Clientes

GET /api/clientes

Filtros (opcional): nome, cidade, uf

Resposta:

200 OK: Lista de clientes.

500 Internal Server Error: Erro inesperado.




---

✏️ Atualizar Cliente

PUT /api/clientes/:codigo

Corpo da requisição (JSON): Enviar apenas os campos que deseja atualizar.


{
  "telefone": "11988887777",
  "cidade": "Campinas"
}

Respostas:

200 OK: Cliente atualizado.

404 Not Found: Cliente não encontrado.

400 Bad Request: Erro de validação.

500 Internal Server Error: Erro inesperado.




---

🗑️ Excluir Cliente

DELETE /api/clientes/:codigo

Resposta:

204 No Content: Cliente removido.

404 Not Found: Cliente não encontrado.

500 Internal Server Error: Erro inesperado.




---

✅ Como Utilizar

Você pode usar ferramentas como:

Postman

Insomnia

Comando curl:


curl -X POST http://localhost:3000/api/clientes \
-H "Content-Type: application/json" \
-d '{"nome":"João","cpf":"123.456.789-10"}'


---

📌 Observações

Projeto modularizado e validado.

Suporte a filtros de busca.

Proteção contra duplicação de CPF.

Validações básicas implementadas com express-validator.

Possíveis melhorias futuras: autenticação, paginação, testes automatizados.



---
