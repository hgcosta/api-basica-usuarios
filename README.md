
# API de cadastro de Usuários
API de cadastro de usuários com Typescript, Nodejs e MongoDB


## Endpoints

### (GET) /users

Retorna um JSON com todos os Usuários presentes no banco de dados.
Parâmetros

Nenhum.
Respostas
200 - OK

Você recebe a lista de usuários.

### (GET) /usersEmail

Retorna um JSON com usuário cadastrado a partir do email presentes no banco de dados.
Parâmetros

Nenhum.
Respostas
200 - OK

Você recebe o usuário a partir do email.

### (POST) /user

Cadastra um usuário no banco de dados.
Parâmetros:

- name - [String]
- email  - [String] 
- password - [String] 

Respostas
200 - OK

Usuário Cadastrado com sucesso!.

400 - Bad Request
Usuário já existe.

500 - Erro 500
Opss, houve um erro ao tentar cadastrar esse usuário, verifique os dados e tente novamente.

