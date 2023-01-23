# driven-poc1-typescript

* **PoC #1 - TypeScript** do aluno Luiz Cláudio F. Fernandez, Turma 8 da Driven.

---

## Instruções para rodar localmente

* Certifique-se de ter o [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) (ou [NVM](https://github.com/nvm-sh/nvm)) e [PostgreSQL](https://www.postgresql.org/download/) instalados e configurados.

* Baixe ou clone o projeto na sua máquina local.

* Certifique-se de que o servidor do PostgreSQL esteja rodando.

* Restaure o dump do banco de dados presente em `./dump`.

* Na raiz do projeto, instale as dependências necessárias com o comando:

    ```
    npm i
    ```

    ou

    ```
    npm install
    ```

- Com base no arquivo `.env.example`, crie um arquivo `.env` preenchendo as variáveis de acordo com a configuração do banco criado anteriormente e com os devidos ajustes baseados na sua configuração local. A conexão com o banco exige uma configuração semelhante a:

    ```
    DATABASE_URL = postgres://<usuario>:<senha>@localhost:5432/<banco>
    ```

    onde `<usuario>`, `<senha>` e `<banco>` são o usuário, senha e banco do seu ambiente local e assumindo que o Postgres esteja rodando na porta padrão (5432);

    ```
    PORT = <porta>
    ```

    onde `<porta>` é a porta desejada para que aplicação rode. Caso essa variável não seja especificada, por padrão, será feita a tentativa de conexão na porta 4000.

* Rode o projeto no ambiente de desenvolvimento com o comando:

    ```
    npm run dev
    ```

* Um servidor local estará rodando na porta 4000 (ou outra especificada no `.env`) ao ser retornada a mensagem:

    ```
    Server running on port 4000
    ```

    ---

## Sobre a aplicação

* O intuito é simular um livro de receitas, no qual o usuário pode cadastrar, editar, deletar, listar e rankear as mesmas.

* Rotas:

```
POST: /recipes
Body: { "name": "Batida de Cappuccino", "ingredients": "Metade de uma lata de leite condensado (395g), 40g de cappuccino solúvel, 200ml leite integral, 100ml vodka e 5 pedras de gelo", "directions": "Bater tudo no liquidificador (de preferência, líquidos mais abaixo). Ir provando e acertando a gosto (deixar mais espesso ou ralo, mais forte ou mais fraco, etc). Rende cerca de 500ml." }
```

```
GET: /recipes
```

```
PUT: /recipes/:id
Body: { "name": "Batida de cappuccino", "ingredients": "Metade de uma lata de leite condensado (395g), 40g de cappuccino solúvel, 200ml leite integral, 100ml vodka e 5 pedras de gelo", "directions": "Bater tudo no liquidificador (de preferência, líquidos mais abaixo). Ir provando e acertando a gosto (deixar mais espesso ou ralo, mais forte ou mais fraco, etc)." }
```

```
DELETE: /recipes/:id
```

```
POST: /recipes/:id/rating
Body: { "rating": 8 }
```

```
GET: /recipes/ranking
```
