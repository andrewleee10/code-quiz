let count = 75
let score = 0
let questionPos = 0

let quizQuestions = [
  `<h2>Commonly used data types DO NOT include:</h2>
  <div id="btns">
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">A. Strings</button>
        <button class="ansChoice wrong">B. Booleans</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice correct">C. Alerts</button>
        <button class="ansChoice wrong">D. Numbers</button>
      </div>
    </div>
  </div>`,
  `<h2>The condition in an if/else statement is enclosed within ___.</h2>
  <div id="btns">
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">A. Quotes</button>
        <button class="ansChoice wrong">B. Curly Brackets</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice correct">C. Parentheses</button>
        <button class="ansChoice wrong">D. Square Brackets</button>
      </div>
    </div>
  </div>`,
  `<h2>Arrays in JavaScript can be used to store ___.</h2>
  <div id="btns">
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">A. Numbers and Strings</button>
        <button class="ansChoice wrong">B. Other Arrays</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">C. Booleans</button>
        <button class="ansChoice correct">D. All of the Above</button>
      </div>
    </div>
  </div>`,
  `<h2>String values must be enclosed within ___ when being assigned to variables</h2>
  <div id="btns">
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">A. Commas</button>
        <button class="ansChoice wrong">B. Curly Brackets</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice correct">C. Quotes</button>
        <button class="ansChoice wrong">D. Parentheses</button>
      </div>
    </div>
  </div>`,
  `<h2>A very useful tool used during development and debugging for printing content to the debugger is:</h2>
  <div id="btns">
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">A. JavaScript</button>
        <button class="ansChoice wrong">B. Terminal/Bash</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">C. For Loops</button>
        <button class="ansChoice correct">D. console.log</button>
      </div>
    </div>
  </div>`
]

let finishPage = [
  `<h2>All done!</h2>
  <form>
    <p>
      <label for="initial">Initials: </label>
      <input type="text" id="initials">
    </p>
  </form>
  <button type="submit" id="finish">Submit</buttton>
  `,
  `
  <h2>Highscores:</h2>
  <p id="scoreElem"></p>
  <p>
    <button id="clear">Clear</button>
    <button id="goBack">Go Back</button>
  </p>
  `
]


  // Timer starts and quiz starts
document.getElementById('startBtn').addEventListener('click', () => {
  
  let time = setInterval(() => {
    if (count > 0) {
      count--
      document.getElementById('timer').innerHTML = `Time: ${count}`
    } else {
      clearInterval(time)
      document.getElementById('quiz').innerHTML = finishPage[0]
    }
  }, 1000);

  // first question appears
  document.getElementById('quiz').innerHTML = quizQuestions[questionPos]

  document.addEventListener('click', event => {

    if(event.target.classList.contains('ansChoice')) {
      if(questionPos < quizQuestions.length) {
        questionPos++
        document.getElementById('quiz').innerHTML = quizQuestions[questionPos]

        if(event.target.classList.contains('wrong')) {
          count -= 20
        }
        if (event.target.classList.contains('correct')){
          score++
          console.log(score)
        } 
      }
      else if(questionPos >= quizQuestions.length){
        document.getElementById('quiz').innerHTML = finishPage[0]
        clearInterval(time)
        document.getElementById('finish').addEventListener('click', () => {

            document.getElementById('timer').textContent = `Time: 0`

            localStorage.setItem('initials', document.getElementById('initials').value)
            document.getElementById('scoreElem').append(document.getElementById('initials').value)
            document.getElementById('initials').value = ''
            
            document.getElementById('quiz').innerHTML = finishPage[1]
            
            document.getElementById('clear').addEventListener('click', () => {
              localStorage.clear()
              document.getElementById('scoreElem').textContent = ''
            })
            
            document.getElementById('goBack').addEventListener('click', () => {
              location.href = './index.html'
            })
          
        })
      }
    }
  })
})


// when 'highscores' is clicked show highscores
document.addEventListener('click', event => {
  if(event.target.classList.contains('showHigh')) {
    document.getElementById('quiz').innerHTML = finishPage[1]

    document.getElementById('clear').addEventListener('click', () => {
      localStorage.clear()
      document.getElementById('scoreElem').textContent = ''
    })

    document.getElementById('goBack').addEventListener('click', () => {
      location.href = './index.html'
    })
  }
})