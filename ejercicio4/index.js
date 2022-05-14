const $FORM = document.getElementById('form')
const $DNI = document.getElementById('dni')
const $NAME = document.getElementById('name')
const $DATE = document.getElementById('birth')
const $EMAIL = document.getElementById('email')
const $WEB = document.getElementById('url')
const $PASSWD = document.getElementById('password')

$FORM.addEventListener('submit', handleSubmit)

/**
 * Validates form fields displaying an alert if they are not valid and creating an object otherwise.
 * @param {Event} e
 */
function handleSubmit (e) {
  e.preventDefault()

  const dni = $DNI.value.trim()
  const name = $NAME.value.trim()
  const date = $DATE.value.trim()
  const email = $EMAIL.value.trim()
  const web = $WEB.value.trim()
  const passwd = $PASSWD.value.trim()

  if (isValidDni(dni) && isValidName(name) && isValidDate(date) && isValidEmail(email) && isValidWeb(web) && isValidPassword(passwd)) {
    const obj = createObject(dni, name, date, email, web, passwd)
    console.log(obj)
  } else {
    window.alert('Algunos datos no son correctos')
  }
}

/**
 * @param {String} dni
 * @param {String} name
 * @param {String} date
 * @param {String} email
 * @param {String} web
 * @param {String} passwd
 * @returns {object}
 */
function createObject (dni, name, date, email, web, passwd) {
  return {
    dni,
    name,
    date,
    email,
    web,
    passwd
  }
}
/**
 * @param {string} dni
 * @returns {boolean}
 */
function isValidDni (dni) {
  const pattern = /^\d{8}[a-zA-Z]$/
  return pattern.test(dni)
}
/**
 * @param {string} name
 * @returns {boolean}
 */
function isValidName (name) {
  const pattern = /^(([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/
  return pattern.test(name)
}
/**
 * @param {string} date
 * @returns {boolean}
 */
function isValidDate (date) {
  const pattern = /^\d{2}\/\d{2}\/\d{4}$/
  return pattern.test(date)
}
/**
 * @param {string} web
 * @returns {boolean}
 */
function isValidWeb (web) {
  const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

  return pattern.test(web)
}
/**
 * @param {string} passwd
 * @returns {boolean}
 */
function isValidPassword (passwd) {
  const pattern = /.{8,10}/
  return pattern.test(passwd)
}
/**
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail (email) {
  const pattern = /^(.+@.+\..+)$/

  return pattern.test(email)
}
