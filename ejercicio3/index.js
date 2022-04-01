//En este ejercicio se emplea el patrón factoria para los diferentes objetos:

function createEmpleado (nombre = '', departamento = 'General') {
  return {
    nombre,
    departamento
  }
}

function createDirector (nombre, departamento, informes = []) {
  return {
    ...createEmpleado(nombre, departamento),
    informes
  }
}

function createTecnico (nombre, departamento, proyectos = []) {
  return {
    ...createEmpleado(nombre, departamento),
    proyectos
  }
}

function createIngeniero (nombre, proyectos, maquina = '') {
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
