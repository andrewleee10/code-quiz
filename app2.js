
document.getElementById('btns').addEventListener('click', event => {
  if (event.target.className === 'ansChoice1') {
    document.getElementById('ans').innerHTML = `
      <hr>
    `
    location.href = './question3.html'
    localStorage.setItem('ans', 'Correct!')
    document.getElementById('ans').append('Correct!')

    //after certain amount of time, delete textContent
  } else {
    document.getElementById('ans').innerHTML = `
      <hr>
    `
    location.href = './question3.html'
    localStorage.setItem('ans1', 'Wrong!')
    document.getElementById('ans').append('Wrong!')

    // after certain amount of time, delete textContent
  }
})
