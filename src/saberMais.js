function exibirInfos() {
  console.log(this.nome, this.email)
}

const user = {
  nome: 'Mariana',
  email: "m@m.com"
}

exibirInfos.call(user)

function User(nome, email) {
  this.nome = nome,
  this.email = email

  this.exibirInfos = function() {
    console.log(this.nome, this.email)
  }
}

const newUser = new User('mario', 'm@m.com')

const outroUser = {
  nome: 'Rodrigo',
  email: 'r@r.com'
}

newUser.exibirInfos()
newUser.exibirInfos.call(outroUser) 

function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email: ${email}`)
}
const user2 = {
  nome: 'mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.call(user2, this.nome, this.email)
  }
}

user2.executaFuncao(exibeMensagem)

function exibeMensagem3(nome, email) {
  console.log(`usuário: ${nome}, email: ${email}`)
}
const user3 = {
  nome: 'mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.apply(user3, [this.nome, this.email])
  }
}

user3.executaFuncao(exibeMensagem3)