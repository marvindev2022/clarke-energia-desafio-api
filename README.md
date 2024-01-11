
# Desafio Clarke Energia - API de Fornecedores de Energia

## Sobre o Projeto

A API de Fornecedores de Energia é parte integrante do projeto "Consumo de energia mensal", um serviço de mercado livre de energia sustentável. Nesta aplicação, você pode encontrar fornecedores que atendem à sua demanda mensal de consumo de energia.

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Express
- Prisma (ORM para interação com o banco de dados)
- OpenAPI 3.0.0
- Jest (para testes)

## Deploy e URLs

- **Backend (API):** [https://desafio-clarke-energia-backend-3ueh.vercel.app/](https://desafio-clarke-energia-backend-3ueh.vercel.app/)
- **Documentação OpenAPI (Swagger):** [Link para o Swagger](inserir-link-do-swagger-aqui)

## Como Rodar o Projeto Localmente

1. Verifique se o Node.js e o npm estão instalados em seu ambiente.

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

   ```env
   DATABASE_URL=sua-url-do-banco-de-dados-local
   ```

   Substitua `sua-url-do-banco-de-dados-local` pela URL real do seu banco de dados local.

4. Execute as migrações do Prisma para criar o esquema do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

5. Execute o comando para gerar os modelos do Prisma:

   ```bash
   npx prisma generate
   ```

6. Execute o projeto localmente:

    ```bash
    npm run start:prod
    ```

7. Acesse a API localmente usando:

    ```bash
    http://localhost:3000
    ```

## Testes

Os testes foram implementados usando Jest. Execute os testes com o seguinte comando:

```bash
npm run test
```

## Considerações Finais

Este projeto foi desenvolvido como parte do processo seletivo proposto pela Clarke Energia. Se tiver dúvidas ou sugestões, não hesite em entrar em contato pelo e-mail <mavirolero@gmail.com>.
