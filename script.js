// Seleciona os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

//Escuta inputs no campo com id amount
amount.oninput = () => {
  //Expressão regular para tirar letras e substituir por nada
  let value = amount.value.replace(/\D/g, "")

  //Transforma o valor em centavos
  value = Number(value) / 100

  //Pega o valor de value e atualiza value sem os caracteres letras
  amount.value = formatCurrencyBRL(value)
}

//Função para formatar o valor do input para padrão BRL
function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

    return value
}

//Captura evento de submit do formulario para obter os valores
form.onsubmit = (event) => {
  //Previne o comportamento padrão de recarregar a página
  event.preventDefault()

  //Cria um objeto com os detalhes da nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

}