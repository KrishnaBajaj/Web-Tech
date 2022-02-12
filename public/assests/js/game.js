const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');

let currentQuestion ={}
let acceptingAnswers = true
let score =0
let questionCounter=0
let availableQuestions = []

let questions = [
    {
        question:'Which of these people have been prime ministers in British history?',
        choice1:'Edward Heath',
        choice2:'Jeremy Corbin ',
        choice3:'Tim Farren',
        choice4:'None of these',
        answer: 1,
    },
    {
        question:'Dead Sea is located b/w which two countries?',
        choice1:'Jordan and Sudan',
        choice2:'Jordan and Israel',
        choice3:'Turkey and UAE',
        choice4:'UAE and Egypt',
        answer: 2,
    },
    {
        question:'Which Indian organisation has commenced Crude oil production from Bengal basin?',
        choice1:'GAIL',
        choice2:'ONGC',
        choice3:'IOC',
        choice4:'HPCL',
        answer: 2,
    },
    {
        question:'Which state declared itself as a ‘controlled area’ amid the outbreak of the Avian Influenza?',
        choice1:'Punjab',
        choice2:'Sikkim',
        choice3:'Himachal Pradesh',
        choice4:'Uttar Pradesh',
        answer: 1,
    },
    {
        question:'Which company has manufactured India’s first driverless metro cars?',
        choice1:'HAL',
        choice2:'BMEL',
        choice3:'DRDO',
        choice4:'Alstrom',
        answer: 2,
    }
]

const SCORE_POINTS =100
const MAX_QUESTIONS=5

startGame =()=>{
    questionCounter=0
    score=0
    availableQuestions=[...questions]
    getNewQuestion()
}

getNewQuestion =()=>{
    if (availableQuestions.length===0||questionCounter>MAX_QUESTIONS){
        localStorage.setItem('mostRescentScore',score)
        return window.location.assign('/endgame') 
        }
        questionCounter++

        const questionsIndex =Math.floor(Math.random()*availableQuestions.length)
        currentQuestion=availableQuestions[questionsIndex]
        question.innerText= currentQuestion.question

        choices.forEach(choice=>{
            const number =choice.dataset['number']
            choice.innerText =currentQuestion['choice'+number]
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers=true
}

choices.forEach(choice=>{
    choice.addEventListener('click', (event) =>{
        if (!acceptingAnswers) return
        acceptingAnswers=false
        const selectedChoice = event.target
        const selectedAnswer = selectedChoice.dataset['number']

        // selectedAnswer is of type STRING. CONVERT TO INT as answer is of type INT
        let classToApply = (parseInt(selectedAnswer) === currentQuestion.answer)? 'correct':'incorrect'

        // Increment score not defined?

        if (classToApply==='correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)

    })
})

const incrementScore =(num)=>{
    score+=num
    console.log(score);
    scoreText.innerText=score
}


startGame()