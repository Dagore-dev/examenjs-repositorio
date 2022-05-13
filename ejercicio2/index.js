const valores = [true, 5, false, 'hola', 'adios', 2, true]
const $RESULTADO = document.getElementById('result')

function arrayReport (valores) {
  const initialValue = {
    length: 0,
    maxLengthIndex: 'No hay cadenas de texto',
    sum: 0,
    substract: 0,
    count: 0,
    max: Number.MIN_VALUE,
    min: Number.MAX_VALUE,
    and: true,
    or: false
  }

  const report = valores.reduce(reducer, initialValue)
  report.mean = report.sum / report.count

  return report
}

function reducer (accumulated, current, i) {
  switch (typeof current) {
    case 'string':
      if (current.length >= accumulated.length) accumulated.maxLengthIndex = i
      break
    case 'number':
      accumulated.count++
      accumulated.sum += current
      accumulated.substract -= current
      if (current > accumulated.max) accumulated.max = current
      if (current < accumulated.min) accumulated.min = current
      break
    case 'boolean':
      accumulated.and = accumulated.and && current
      accumulated.or = accumulated.or || current
      break
    default:
      break
  }

  return accumulated
}

function printIn (valores, { maxLengthIndex, sum, substract, mean, max, min, and, or }, $RESULTADO) {
  $RESULTADO.innerText = `
  ${valores}

  String más largo: '${valores[maxLengthIndex]}',
  Suma: ${sum},
  Resta: ${substract},
  Media: ${mean},
  Máximo: ${max},
  Mínimo: ${min},
  Operador AND: ${and},
  Operador OR: ${or}

  En la consola está el array mutado con las opciones que se solicitan.
`
}

const result = arrayReport(valores)
printIn(valores, result, $RESULTADO)

// Para agregar o eliminar un elemento del array funcionando como una cola se usan los métodos shift() para eliminar el primer elemento (desencola) y unshift(nuevoElemento) para añadir un nuevo elemento al principio del array (encola)

valores.shift()
valores.unshift('esternocleitomastoideo')

// Para cambiar el valor en una posición especificada:
valores[3] = 'ei'// El cuarto elemento es la posición 3 puesto que el primer elemento es la posición 0

console.log(valores)
