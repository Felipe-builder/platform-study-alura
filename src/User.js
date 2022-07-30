export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
  }

  #montaObjUser() {
    return ({
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo
    })
  }

  exibirInfos() {
    const userObject = this.#montaObjUser()
    return `{\n\tnome: ${userObject.nome},\n\temail: ${userObject.email}\n\tnascimento: ${userObject.nascimento}\n\trole: ${userObject.role}\n\tativo: ${userObject.ativo}\n}`
  }

  getNome() {
    return this.#nome
  }

  setNome(nome){
    this.#nome = nome
  }
}
