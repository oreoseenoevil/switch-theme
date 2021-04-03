const checkbox = document.getElementById('checkbox')
const label = document.querySelector('.label')

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  label.classList.toggle('dark')
})