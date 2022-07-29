import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role="admin", ativo = true){
    super(nome, email, nascimento, role, ativo)
  }

  aprovaEstudante(estudante, curso) {
    return `estudante ${estudante} aprovado(a) no curso ${curso}`
  }
}