const form = document.querySelector('.form')
const emailInput = document.querySelector('.email-input')
const alert = document.querySelector('.alert')
alert.style.display = 'none'

form.addEventListener('submit', async function (e) {
  e.preventDefault()
  form.classList.add('loading')
  alert.style.display = 'none'
  const email = emailInput.value
  try {
    await axios.post('/api/6-newsletter', { email })
    form.innerHTML =
      '<h4 class="success">Uspešno! Odpri svoj e-poštni zbiralnik.</h4>'
  } catch (error) {
    console.log(error.response)
    alert.style.display = 'block'
    alert.textContent = 'Nekje se je zalomilo. Prosim poskusi pozneje.'
    // alert.textContent = error.response.data.email[0]
  }
  form.classList.remove('loading')
})
