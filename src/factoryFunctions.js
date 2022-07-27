function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos: function() {
      return `${nome}, ${email}`
    }
  }
}

const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibirInfos())