const counter = document.getElementById('counter')
const increase = document.getElementById('plus')
const decrease = document.getElementById('minus')
const like = document.getElementById('heart')
const likes = document.querySelector('.likes')
const pauseButton = document.getElementById('pause')
const submit = document.getElementById('submit')
const commentList = document.querySelector('.comments')
const form = document.getElementById('comment-form')


let i = 1
const theCounter = setInterval(function(){
    i++
    counter.innerText = i
}, 1000)

increase.addEventListener('click', add)
decrease.addEventListener('click', subtract)

function add() {
    i++
    counter.innerText = i
}

function subtract(){
    i--
    counter.innerText = i
}

like.addEventListener('click', createLikes)

let countClicks = 1

function createLikes(){
    if (document.getElementById(`${i}`)){
        countClicks++ 
        const varToChange = document.getElementById(`${i}`)
        varToChange.innerHTML = `${i} has been liked ${countClicks} times`
    } else {
    const $li = document.createElement('li')
    $li.innerHTML = `${i} has been liked 1 time` 
    $li.setAttribute('id', `${i}`)
    likes.appendChild($li)
    countClicks = 1    
    }
}

pauseButton.addEventListener('click', pauseProgram)


function pauseProgram() {
    clearInterval(theCounter)
    increase.disabled = true
    decrease.disabled = true
    like.disabled = true
    submit.disabled = true
    pauseButton.innerText = 'resume'
    pauseButton.addEventListener('click', resume)
}

function resume() {
    setInterval(function(){
        i++
        counter.innerText = i
    }, 1000)
    increase.disabled = false
    decrease.disabled = false
    like.disabled = false
    submit.disabled = false
    pauseButton.innerText = 'pause'
    pauseButton.addEventListener('click', pauseProgram)
}

form.addEventListener('submit', displayComments)

function displayComments() {
    event.preventDefault()
    const formData = new FormData(form)
    const comment = formData.get('comment')
    const $p = document.createElement('p')
    $p.innerText = comment 
    commentList.append($p)
}