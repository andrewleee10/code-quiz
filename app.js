let time = 75
let score = 0

// document.getElementById('startBtn').addEventListener('click', event => {
//   event.preventDefault()

//   document.location.href = './question1.html'
//   let time = 75
//   setInterval(() => {
//     time--
//     document.getElementById('timer').textContent = `Time: ${time}`
//     localStorage.setItem('time', time)
//   }, 1000)
// })

document.getElementById('btns1').addEventListener('click', event => {
  if(event.target.className === 'ansChoice3') {
    document.getElementById('ans1').innerHTML = `
    <hr>
    `
    document.getElementById('ans1').append('Correct!')
    score++
    setInterval(() => {
      document.getElementById('ans1').textContent = ''
    }, 3000);
  } else {
    document.getElementById('ans1').innerHTML = `
    <hr>
    `
    document.getElementById('ans1').append('Wrong!')
    setInterval(() => {
      document.getElementById('ans1').textContent = ''
    }, 3000);
  }
})

document.getElementById('btns2').addEventListener('click', event => {
  if (event.target.className === 'ansChoice3') {
    document.getElementById('ans2').innerHTML = `
    <hr>
    `
    document.getElementById('ans2').append('Correct!')
    score++
    setInterval(() => {
      document.getElementById('ans2').textContent = ''
    }, 3000);
  } else {
    document.getElementById('ans2').innerHTML = `
    <hr>
    `
    document.getElementById('ans2').append('Wrong!')
    setInterval(() => {
      document.getElementById('ans2').textContent = ''
    }, 3000);
  }
})

document.getElementById('btns3').addEventListener('click', event => {
  if (event.target.className === 'ansChoice4') {
    document.getElementById('ans3').innerHTML = `
    <hr>
    `
    document.getElementById('ans3').append('Correct!')
    score++
    setInterval(() => {
      document.getElementById('ans3').textContent = ''
    }, 3000);
  } else {
    document.getElementById('ans3').innerHTML = `
    <hr>
    `
    document.getElementById('ans3').append('Wrong!')
    setInterval(() => {
      document.getElementById('ans3').textContent = ''
    }, 3000);
  }
})

document.getElementById('btns4').addEventListener('click', event => {
  if (event.target.className === 'ansChoice3') {
    document.getElementById('ans4').innerHTML = `
    <hr>
    `
    document.getElementById('ans4').append('Correct!')
    score++
    setInterval(() => {
      document.getElementById('ans4').textContent = ''
    }, 3000);
  } else {
    document.getElementById('ans4').innerHTML = `
    <hr>
    `
    document.getElementById('ans4').append('Wrong!')
    setInterval(() => {
      document.getElementById('ans4').textContent = ''
    }, 3000);
  }
})

document.getElementById('btns5').addEventListener('click', event => {
  if (event.target.className === 'ansChoice4') {
    document.getElementById('ans5').innerHTML = `
    <hr>
    `
    document.getElementById('ans5').append('Correct!')
    score++
    setInterval(() => {
      document.getElementById('ans5').textContent = ''
    }, 3000);
  } else {
    document.getElementById('ans5').innerHTML = `
    <hr>
    `
    document.getElementById('ans5').append('Wrong!')
    setInterval(() => {
      document.getElementById('ans5').textContent = ''
    }, 3000);
  }
})

document.getElementById('highscores').textContent = localStorage.getItem('initials')

document.getElementById('submit').addEventListener('click', event => {
  localStorage.setItem('initial', document.getElementById('initials').value)
  document.getElementById('highscores').textContent = localStorage.getItem('initials')
})