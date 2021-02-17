
document.getElementById('btns').addEventListener('click', event => {
  if (event.target.className === 'ansChoice3') {
    let ansElem = document.createElement('div')
    ansElem.innerHTML = `
      <hr>
    `
    location.href = './question2.html'
    document.getElementById('ans').append('Correct!')

  } else {
    let ansElem = document.createElement('div')
    ansElem.innerHTML = `
      <hr>
    `
    location.href = './question2.html'
    document.getElementById('ans').append('Wrong!')
  }
})
