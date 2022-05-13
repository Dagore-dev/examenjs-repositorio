const $FORM = document.getElementById('form')
const $NUMBER1 = document.getElementById('n1')
const $NUMBER2 = document.getElementById('n2')
const $OPERATION = document.getElementById('operation')
const $RESULT = document.getElementById('result')

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', () => {
  $RESULT.innerText = 'Esperando operación.'
})

/**
 * A handler function who manage a submit event getting the values from form. Then calls calculate function and show the result in a #result HTMLElement.
 * @param {Event} e
 */
function handleSubmit (e) {
  e.preventDefault()

  const n1 = parseFloat($NUMBER1.value)
  const n2 = parseFloat($NUMBER2.value)
  const operation = $OPERATION.value

  const result = calculate(n1, n2, operation)

  if (result.ok) {
    $FORM.reset()
    $RESULT.innerText = result.value.toString()
  } else {
    window.alert(result.errorMsg)
  }
}

/**
 * Perform the choosen operation between the two numbers and returns an Option object.
 * @param {Number} n1
 * @param {Number} n2
 * @param {String} operation
 * @returns {Option}
 */
function calculate (n1, n2, operation) {
  /** @type {Option} */
  const result = createOption()
  result.errorMsg = 'No se han introducido todos los datos'

  if ((n1 || n1 === 0) && (n2 || n2 === 0) && operation) {
    switch (operation) {
      case '+':
        result.value = n1 + n2
        result.ok = true
        break
      case '-':
        result.value = n1 - n2
        result.ok = true
        break
      case '*':
        result.value = n1 * n2
        result.ok = true
        break
      case '/':
        if (n2 !== 0) {
          result.value = n1 / n2
          result.ok = true
        } else {
          result.ok = false
          result.errorMsg = 'No puedo dividir entre cero.'
        }
        break
      default:
        result.ok = false
        result.errorMsg = 'Operación no reconocida'
        break
    }
  }

  return result
}

/**
 * Option type definition
 * @typedef {Object} Option
 * @property {any} value
 * @property {Boolean} ok
 * @property {String} errorMsg
 */
/**
 * Creates an Option type
 * @param {any} value
 * @param {boolean} ok
 * @param {String} errorMsg
 * @returns {Option}
 */
function createOption (value = undefined, ok = false, errorMsg = '') {
  return {
    value,
    ok,
    errorMsg
  }
}
