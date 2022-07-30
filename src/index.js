import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com', '2021-01-21')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2002-08-19')
console.log(novoAdmin.exibirInfos())