# Detalhes

Vou explicar brevemente o que está acontecendo nesta implementação:

- A classe `inMemorySupplierRepository` implementa a interface `SupplieRepository`, que define os métodos para criar, ler, atualizar e excluir fornecedores.
- Esta implementação mantém os fornecedores em uma matriz (`supplies`) em memória.
- Os métodos implementados nesta classe manipulam a matriz `supplies` de acordo com as operações CRUD:
  - `createSupplie`: Adiciona um novo fornecedor à matriz.
  - `getSupplier`: Retorna todos os fornecedores armazenados na matriz.
  - `getSupplieById`: Retorna um fornecedor específico com base no ID fornecido.
  - `updateSupplie`: Atualiza um fornecedor existente na matriz com base no ID fornecido.
  - `deleteSupplie`: Remove um fornecedor da matriz com base no ID fornecido.
- Se algum erro ocorrer durante essas operações (por exemplo, se um ID não for encontrado), um erro será lançado.

Esta implementação é útil para testes de unidade ou em cenários onde você precisa simular o comportamento de um repositório de dados sem realmente persistir dados em um banco de dados real. Isso pode ser especialmente útil em testes automatizados, onde você deseja isolar o comportamento de uma parte específica do código e garantir que ela funcione conforme o esperado.
