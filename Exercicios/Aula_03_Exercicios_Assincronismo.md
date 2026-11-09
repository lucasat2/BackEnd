# Exercícios — Aula 03: Assincronismo

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_03_Assincronismo.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_03_Assincronismo.md#9. Exemplo contextualizado: buscar aluno 🎓|Rever busca assíncrona de aluno]]
🔗 [[BackEnd/Aulas completas/🟢Aula_03_Assincronismo.md#7. O que é `async` e `await`? ⚡|Rever async/await]]

## Exercício 1 — Buscar aluno 🎓

Crie um arquivo:

```text
exercicio1.js
```

Crie uma função `buscarAluno` que retorna uma Promise.

A Promise deve devolver este aluno depois de 2 segundos:

```jsx
{
  id: 1,
  nome: "Mariana",
  curso: "Node.js"
}
```

Depois, crie uma função `mostrarAluno` com `async/await` para mostrar:

```text
Aluno: Mariana
Curso: Node.js
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_03_Assincronismo.md#12. Exemplo de mercado: buscar produto por ID 🛒|Rever busca de produto por ID]]

## Exercício 2 — Buscar produto por ID 🛒

Crie um arquivo:

```text
exercicio2.js
```

Use este array:

```jsx
const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 250 },
  { id: 3, nome: "Monitor", preco: 900 }
];
```

Crie uma função `buscarProdutoPorId(id)` que:

- usa `Promise`
- usa `setTimeout`
- busca o produto pelo ID
- se encontrar, retorna o produto
- se não encontrar, retorna erro

Depois teste com:

```jsx
buscarProdutoPorId(1);
```

E também com:

```jsx
buscarProdutoPorId(10);
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_03_Assincronismo.md#14. Exemplo completo: simulação de login 🔐|Rever simulação de login]]

## Exercício 3 — Simular login 🔐

Crie um arquivo:

```text
exercicio3.js
```

Use este array:

```jsx
const usuarios = [
  {
    id: 1,
    nome: "Ana",
    email: "ana@email.com",
    senha: "123456"
  }
];
```

Crie:

1. Uma função `buscarUsuarioPorEmail(email)`
2. Uma função `fazerLogin(email, senha)`
3. Use `async/await`
4. Use `try/catch`

Regras:

- Se o email não existir, mostrar `Usuário não encontrado.`
- Se a senha estiver errada, mostrar `Senha incorreta.`
- Se estiver tudo certo, mostrar `Login realizado com sucesso.`
