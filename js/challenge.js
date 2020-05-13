let timerNum = 0

const pauseButton = document.querySelector("#pause")
let likeList = document.querySelector("#likes-list")

var intervalID = window.setInterval(myCallback, 1000);
console.log("interval id: ", intervalID)

function myCallback()
{
    timerNum += 1
    document.getElementById("counter").innerHTML = `${timerNum}`
}

const minusButton = document.querySelector("#minus")

minusButton.addEventListener("click", function(e){
    e.preventDefault();
    if (timerNum > 0){
        timerNum -= 1;
    }
})
const plusButton = document.querySelector("#plus")

plusButton.addEventListener("click", function(e){
    e.preventDefault();
        timerNum += 1;
})

const heartButton = document.querySelector("#heart")
let heartTrack = {}
console.log("hash is: ",heartTrack)
console.log("Key: ", heartTrack['3'])

heartButton.addEventListener("click", function(e){
    e.preventDefault();
    timerStr = timerNum.toString();
    console.log("timeStr:", timerStr)

    // let boolVal = Object.keys(heartTrack).map(function(key, index){
    //     if (key === timerStr){
    //         heartTrack[timerStr] += 1
    //     return true;}
    //     else{
    //         return false;
    //     }
    // });

    // console.log("bool: ", boolVal)
    // if (cat === false){
    //     console.log("Hello")
    //     heartTrack[timerStr] = 1
    // }

    if (heartTrack[timerStr] !== undefined){
        heartTrack[timerStr] += 1
    } else {
        heartTrack[timerStr] = 1
    }


    console.log("timeStr:", timerStr)
    console.log("hash key:", heartTrack[timerStr])

    likeList.innerHTML += `<ul>
    ${timerStr}'s total likes: ${heartTrack[timerStr]}</ul>`

    console.log("hash is now:", heartTrack)
})

let pauseCheck = false

pauseButton.addEventListener("click", function(e){
    e.preventDefault();
    
    if (pauseCheck === false){
        pauseButton.innerHTML = "Start"
        likeList.innerHTML = ""
        clearInterval(intervalID)
        pauseCheck = true
    }
    else if (pauseCheck === true){
        timerNum = 0
        heartTrack = {}
        pauseButton.innerHTML = "Reset"
        intervalID = window.setInterval(myCallback, 1000);
        pauseCheck = false

    }


})

const submitButton = document.querySelector("#submit")
submitButton.addEventListener("click", function(e){
    e.preventDefault();

    const getText = document.querySelector("#comment-input")

    let list = document.querySelector("#list")
    list.innerHTML += `<ul>${getText.value}</ul>`
})