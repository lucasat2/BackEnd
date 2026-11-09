# Exercícios — Aula 02: Revisão de JavaScript

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_02_Revisao_de_JS.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_02_Revisao_de_JS.md#3. Tipos de dados 🧩|Rever tipos de dados]]
🔗 [[BackEnd/Aulas completas/🟢Aula_02_Revisao_de_JS.md#4. Objetos no backend 🧱|Rever objetos]]

## Exercício 1 — Dados de usuário 👤

Crie um arquivo:

```text
exercicio1.js
```

Crie um objeto chamado `usuario` com:

```text
nome
email
idade
ativo
```

Depois mostre no terminal uma mensagem assim:

```text
Usuário Ana, email ana@email.com, possui 22 anos.
```

Se o usuário estiver ativo, mostre:

```text
Usuário ativo.
```

Se não estiver, mostre:

```text
Usuário inativo.
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_02_Revisao_de_JS.md#11. `map` — transformar uma lista|Rever map()]]
🔗 [[BackEnd/Aulas completas/🟢Aula_02_Revisao_de_JS.md#Array de objetos|Rever array de objetos]]

## Exercício 2 — Lista de cursos 🎓

Crie um arquivo:

```text
exercicio2.js
```

Crie um array de cursos:

```jsx
const cursos = [
  { id: 1, nome: "Node.js", cargaHoraria: 40 },
  { id: 2, nome: "React", cargaHoraria: 30 },
  { id: 3, nome: "Python", cargaHoraria: 50 }
];
```

Faça:

1. Use `map` para criar uma lista apenas com os nomes dos cursos.
2. Use `filter` para listar cursos com carga horária maior que 35.
3. Mostre os resultados no terminal.

---

🔗 [[BackEnd/Aulas completas/🟢Aula_02_Revisao_de_JS.md#13. `find` — encontrar um item|Rever find() por ID]]

## Exercício 3 — Buscar produto por ID 🛒

Crie um arquivo:

```text
exercicio3.js
```

Crie um array de produtos:

```jsx
const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120, estoque: 10 },
  { id: 2, nome: "Teclado Mecânico", preco: 250, estoque: 0 },
  { id: 3, nome: "Monitor", preco: 900, estoque: 5 }
];
```

Crie uma variável:

```jsx
const produtoId = 2;
```

Use `find` para buscar o produto.

Depois crie uma regra:

- Se o produto não existir, mostre `Produto não encontrado.`
- Se o estoque for 0, mostre `Produto sem estoque.`
- Se tiver estoque, mostre `Produto disponível.`
