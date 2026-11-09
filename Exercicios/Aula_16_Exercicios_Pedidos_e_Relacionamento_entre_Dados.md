# Exercícios — Aula 16: Pedidos e Relacionamento entre Dados

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md#5. Criando o model de pedido 🧱|Rever model de pedido]]
🔗 [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md#8. Criando o service de pedidos ⚙️|Rever service de pedidos]]
🔗 [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md#11. Criando o controller de pedidos 🎮|Rever controller de pedidos]]

## Exercício 1 — Criar pedido com múltiplos produtos 🛒

Crie um pedido com pelo menos 2 produtos diferentes.

Exemplo:

```json
{
  "itens": [
    {
      "produtoId": "ID_DO_PRODUTO_1",
      "quantidade": 2
    },
    {
      "produtoId": "ID_DO_PRODUTO_2",
      "quantidade": 1
    }
  ]
}
```

Teste se o total foi calculado corretamente.

---

🔗 [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md#7. Criando validação de pedido ✅|Rever validação de pedido]]
🔗 [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md#20. Atualizando estoque depois do pedido 📉|Rever atualização de estoque]]

## Exercício 2 — Bloquear pedido sem estoque 📦

Tente criar um pedido com quantidade maior que o estoque disponível.

Exemplo:

```json
{
  "itens": [
    {
      "produtoId": "ID_DO_PRODUTO",
      "quantidade": 999
    }
  ]
}
```

A API deve retornar erro de estoque insuficiente.

---

🔗 [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md#15. Rotas criadas nesta aula 📌|Rever permissões das rotas]]
🔗 [[BackEnd/Aulas completas/🟢Aula_16_Pedidos e Relacionamento entre Dados.md#19. Testando atualização de status 👑|Rever teste de permissão]]

## Exercício 3 — Testar permissões de pedido 🔐

Teste os cenários:

1. Criar pedido sem token
2. Criar pedido com token válido
3. Listar seus pedidos
4. Buscar pedido de outro usuário
5. Atualizar status com usuário cliente
6. Atualizar status com usuário admin

Anote:

```text
rota usada
token usado
body enviado
status retornado
resposta da API
```
