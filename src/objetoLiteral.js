const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021-01-01",
  role: "admin",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email, this.nascimento, this.role, this.ativo)
  }
}

user.exibirInfos()
const exibir = user.exibirInfos
exibir()

const exibir1 = function() {
  console.log(this.nome)
}

exibir1()

const exibirNome = exibir.bind(user)

exibirNome()

