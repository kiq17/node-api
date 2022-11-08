<h1 align="center">Node Api</h1>

## :sparkles: Sobre ##
Api com ações CRUD e autenticação

## :rocket: Tecnologias ##

O que foi usado neste projeto:

- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose](https://github.com/Automattic/mongoose)
- [Node.js](https://nodejs.org/en/)

## :sparkles: Endpoints ##

<h3>Criando usuário</h3>

<p><b>POST</b> {url}/users</p>

<p>Exemplo de requisição</p>

```
{
  "email": "teste@gmail.com",
  "password": "123456"
}
```

<h3>Criando repositório</h3>

<p><b>POST</b> {url}/users/:user_id/repository</p>

<p>Exemplo de requisição</p>

```
{
  "name": "vue",
  "url": "https://github.com/vuejs/vue"
}
```

<h3>Criando Token</h3>

<p><b>POST</b> {url}/login</p>

<p>Exemplo de requisição</p>

```
{
  "email": "teste@gmail.com",
  "password": "123456"
}
```

<p>Exemplo da resposta</p>

```
{
  "user": {
    "id": "seuId",
    "email": "seuEmail"
  },
  "token": "seuToken"
}
```

<p>Para acessar as rotas protegidas basta passar o token gerado no Login no Bearer Token</p>
