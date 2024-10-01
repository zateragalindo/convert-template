// Cotação de moedas do dia.
const USD = 5.45
const EUR = 6.04
const GBP = 7.25

// Obtendo elemento do formulario
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")

const description = document.querySelector("#description")
const result = document.querySelector("#result")

// Manipulando o input amount para receber somente númenros.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD": 
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
    default: 
      alert("E obrigatorio selecionar uma moeda")
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    footer.classList.add("show-result")
    description.textContent = `${symbol} 1 = ${formatCurrentBRL(price)}`
    

    let total = amount * price

    if (isNaN(total)) {
      return alert("Porfavor, digite um valor corretamente para converter.")
    }

    total = formatCurrentBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`

  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde")
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrentBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}