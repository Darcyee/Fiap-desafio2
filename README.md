# Fiap-desafio2
Demonstração do Github actions para os professores da Fiap.

📝 Tech Challenge – API de Blog
📌 Visão Geral

Este projeto consiste no desenvolvimento de uma API REST para gerenciamento de posts, criada como parte do Tech Challenge da FIAP.
A aplicação permite criar, listar, atualizar e remover posts, utilizando Node.js, Express, PostgreSQL e Docker, seguindo boas práticas de organização de código e automação.

🛠️ Tecnologias Utilizadas

Node.js

Express

PostgreSQL

Docker

Docker Compose

GitHub Actions (CI/CD)

Git / GitHub

🏗️ Arquitetura do Sistema

A aplicação é composta por dois serviços principais, orquestrados via Docker Compose:

API
Serviço backend desenvolvido em Node.js com Express, responsável pelas regras de negócio e exposição dos endpoints REST.

Banco de Dados (PostgreSQL)
Responsável pela persistência dos dados dos posts.

Os containers se comunicam através de uma rede interna Docker, garantindo isolamento e portabilidade do ambiente.

Cliente → API (Node.js / Express) → PostgreSQL

▶️ Como Executar o Projeto
📋 Pré-requisitos

Docker

Docker Compose

🚀 Subindo a aplicação

No diretório raiz do projeto, execute:

docker compose up --build


Após a inicialização:

A API estará disponível em:
👉 http://localhost:3000

🔗 Endpoints da API
➕ Criar um post

POST /posts

{
  "title": "Meu primeiro post",
  "content": "Conteúdo do post"
}

📄 Listar posts

GET /posts

✏️ Atualizar um post

PUT /posts/:id

{
  "title": "Post atualizado",
  "content": "Novo conteúdo"
}

❌ Remover um post

DELETE /posts/:id

🧪 Exemplos de Teste via Terminal

Criar um post:

curl -X POST http://localhost:3000/posts \
-H "Content-Type: application/json" \
-d '{"title":"Post teste","content":"Conteúdo do post"}'


Listar posts:

curl http://localhost:3000/posts

🔄 Integração Contínua (CI/CD)

O projeto conta com um pipeline de Integração Contínua utilizando GitHub Actions.

📌 Funcionamento

O workflow é executado automaticamente a cada push ou pull request na branch main

O pipeline realiza o build do Docker Compose, garantindo que a aplicação continue funcionando após alterações no código

Isso assegura maior confiabilidade e qualidade no processo de desenvolvimento.

🧠 Relato de Experiência e Desafios

Durante o desenvolvimento do projeto, alguns desafios importantes foram enfrentados:

Configuração correta do Docker Compose e comunicação entre containers

Organização do projeto seguindo o padrão routes / controllers / database

Resolução de erros relacionados a volumes Docker e caminhos de arquivos

Configuração de permissões e tokens para uso do GitHub Actions

Integração da API com o banco PostgreSQL utilizando consultas parametrizadas

Esses desafios contribuíram para um aprendizado prático e aprofundado sobre arquitetura backend, containerização e automação de pipelines, aproximando o projeto de um cenário real de mercado.

📌 Considerações Finais

Este projeto demonstra a aplicação prática de conceitos fundamentais de desenvolvimento backend, integração com banco de dados, uso de containers e automação de processos, atendendo aos requisitos propostos pelo Tech Challenge da FIAP.

👤 Autor

Emerson Darcy
GitHub: https://github.com/Darcyee
