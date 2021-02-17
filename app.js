document.getElementById('timer').textContent = localStorage.getItem('time')

document.getElementById('startBtn').addEventListener('click', event => {
  event.preventDefault()

  document.location.href = './question1.html'
  let time = 75
  setInterval(() => {
    time--
    document.getElementById('timer').textContent = `Time: ${time}`
    localStorage.setItem('time', time)
  }, 1000)
})