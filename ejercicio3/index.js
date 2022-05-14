// En este ejercicio se emplea el patrón factoria para los diferentes objetos:
/**
 * @typedef {Object} Empleado
 * @property {String} nombre
 * @property {String} departamento
 */
/**
 * @typedef {Object} Director
 * @property {String} nombre
 * @property {String} departamento
 * @property {String[]} informes
 */
/**
 * @typedef {Object} Tecnico
 * @property {String} nombre
 * @property {String} departamento
 * @property {String[]} proyectos
 */
/**
 * @typedef {Object} Ingeniero
 * @property {String} nombre
 * @property {String} departamento
 * @property {String[]} proyectos
 * @property {String}  maquina
 */

/**
 * Creates a new Empleado.
 * @param {String} nombre
 * @param {String} departamento
 * @returns {Empleado}
 */
function createEmpleado (nombre = '', departamento = 'General') {
  return {
    nombre,
    departamento
  }
}

/**
 * Creates a new Director.
 * @param {String} nombre
 * @param {String=} departamento
 * @param {String[]} informes
 * @returns {Director}
 */
function createDirector (nombre, departamento, informes = []) {
  return {
    ...createEmpleado(nombre, departamento),
    informes
  }
}

/**
 * Creates a new Tecnico.
 * @param {String} nombre
 * @param {String=} departamento
 * @param {String[]} proyectos
 * @returns {Tecnico}
 */
function createTecnico (nombre, departamento, proyectos = []) {
  return {
    ...createEmpleado(nombre, departamento),
    proyectos
  }
}

/**
 * Creates a new Ingeniero
 * @param {String} nombre
 * @param {String[]} proyectos
 * @param {String} maquina
 * @returns {Ingeniero}
 */
function createIngeniero (nombre, proyectos = [], maquina = '') {
  return {
    ...createTecnico(nombre, undefined, proyectos),
    maquina,
    departamento: 'Ingeniería'
  }
}

const empleado1 = createEmpleado('Fernando García')
const empleado2 = createEmpleado('David Gómez', 'Frontend')
console.log(empleado1, empleado2)

const director1 = createDirector('José Gámez', undefined, ['informe 1'])
const director2 = createDirector('Manuel Gómez', 'Backend')
console.log(director1, director2)

const tecnico1 = createTecnico('Jesús Yoquese')
const tecnico2 = createTecnico('Paco Paquito', 'UX', ['proyecto1', 'proyecto2'])
console.log(tecnico1, tecnico2)

const ingeniero1 = createIngeniero('Javier Otín')
const ingeniero2 = createIngeniero('Daniel Pérez', ['proyecto1', 'proyecto2'], 'máquina cualquiera')
console.log(ingeniero1, ingeniero2)
