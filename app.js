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
  `<h2>String values must be enclosed wihtin ___ when being assigned to variables</h2>
  <div id="btns">
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice wrong">A. Commas</button>
        <button class="ansChoice wrong">B. Curly Brackets</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button class="ansChoice corect">C. Quotes</button>
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
    <button type="submit" id="finish">Submit</buttton>
  </form>
  `,
  `
  <h2>Highscores:</h2>
  <p id="scoreElem">
    ${localStorage.getItem('initials')} - ${score}
  </p>
  <p>
    <button id="clear">Clear</button>
    <button id="highscores>Highscores</button>
  </p>
  `
]


document.getElementById('scoreElem').localStorage.getItem('initials')

  // Timer
document.getElementById('startBtn').addEventListener('click', () => {
  
  setInterval(() => {
    count--
    document.getElementById('timer').innerHTML = `Time: ${count}`
  }, 1000);

  // Start quiz
  document.getElementById('quiz').innerHTML = quizQuestions[questionPos]

  document.addEventListener('click', event => {

    if(event.target.classList.contains('ansChoice')) {
      if(questionPos < ((quizQuestions.length)-1)) {
        questionPos++
        document.getElementById('quiz').innerHTML = quizQuestions[questionPos]

        if(event.target.classList.contains('wrong')) {
          count -= 10
        }
        if (event.target.classList.contains('correct')){
          score += 1
        } 
      }
      else {
        document.getElementById('quiz').innerHTML = finishPage[0]

        document.getElementById('finish').addEventListener('click', event => {
          event.preventDefault()

          console.log(score)
          let init = localStorage.setItem('initials', document.getElementById('initials').value)
          document.getElementById('quiz').innerHTML = finishPage[1]
          })
        }
      }
  })
})

  