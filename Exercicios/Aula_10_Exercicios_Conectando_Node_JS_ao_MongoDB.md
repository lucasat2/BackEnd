# Exercícios — Aula 10: Conectando Node.js ao MongoDB

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_10_Conectando_Node_JS_ao_MongoDB.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_10_Conectando_Node_JS_ao_MongoDB.md#13. Criando a conexão com o banco 🍃|Rever conexão com MongoDB]]
🔗 [[BackEnd/Aulas completas/🟢Aula_10_Conectando_Node_JS_ao_MongoDB.md#Criando função assíncrona|Rever função assíncrona]]

## Exercício 1 — Criar conexão com MongoDB 🍃

Crie o arquivo:

```text
src/config/database.js
```

Dentro dele, crie a função `connectDatabase`.

Ela deve:

- usar `mongoose.connect`
- pegar a string do `process.env.MONGO_URL`
- mostrar mensagem de sucesso
- mostrar erro se falhar

---

🔗 [[BackEnd/Aulas completas/🟢Aula_10_Conectando_Node_JS_ao_MongoDB.md#18. Criando a pasta de models 🧱|Rever models]]
🔗 [[BackEnd/Aulas completas/🟢Aula_10_Conectando_Node_JS_ao_MongoDB.md#19. Criando o schema de Produto 📦|Rever schema]]

## Exercício 2 — Criar model de aluno 🎓

Crie o arquivo:

```text
src/models/Student.js
```

O schema deve ter:

```text
nome: String, obrigatório
email: String, obrigatório
curso: String, obrigatório
ativo: Boolean, obrigatório
```

Crie e exporte o model:

```text
Student
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_10_Conectando_Node_JS_ao_MongoDB.md#19. Criando o schema de Produto 📦|Rever schema]]
🔗 [[BackEnd/Aulas completas/🟢Aula_10_Conectando_Node_JS_ao_MongoDB.md#21. O que é model? 🧩|Rever model]]

## Exercício 3 — Criar model de pedido 🛒

Crie o arquivo:

```text
src/models/Order.js
```

O schema deve ter:

```text
cliente: String, obrigatório
produto: String, obrigatório
quantidade: Number, obrigatório
total: Number, obrigatório
status: String, obrigatório
```

Crie e exporte o model:

```text
Order
```
