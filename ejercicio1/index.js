const $FORM = document.getElementById('form')
const $NUMBER1 = document.getElementById('n1')
const $NUMBER2 = document.getElementById('n2')
const $OPERATION = document.getElementById('operation')
const $RESULT = document.getElementById('result')

function handleSubmit ( e ) {
  e.preventDefault()
  
  const n1 = parseFloat($NUMBER1.value)
  const n2 = parseFloat($NUMBER2.value)
  const operation = $OPERATION.value
  let result

  $FORM.reset()

  if ((n1 || n1 === 0) && (n2 || n2 === 0) && operation) {
    switch (operation) {
      case '+':
        result = n1 + n2
        break;
      case '-':
        result = n1 - n2
        break;
      case '*':
        result = n1 * n2
        break;
      case '/':
        result = n2 !== 0 ? n1 / n2 : 'No puedo dividir entre 0.'
        break;
      default:
        break;
    }
  }
  else {
    alert('Falta algún valor por definir')
  }

  $RESULT.innerText = result

}

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando operación.')
