document.getElementById('ans').textContent = localStorage.getItem('ans','Correct')
document.getElementById('ans').textContent = localStorage.getItem('ans1','Wrong!')

document.getElementById('btns').addEventListener('click', event => {
  if (event.target.className === 'ansChoice3') {
    let ansElem = document.createElement('div')
    ansElem.innerHTML = `
      <hr>
    `
    location.href = './question2.html'
    localStorage.setItem('ans','Correct!')
    document.getElementById('ans').append('Correct!')

  } else {
    let ansElem = document.createElement('div')
    ansElem.innerHTML = `
      <hr>
    `
    location.href = './question2.html'
    localStorage.setItem('ans1','Wrong!')
    document.getElementById('ans').append('Wrong!')
  }
})
