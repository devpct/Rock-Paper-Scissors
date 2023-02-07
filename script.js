let user = $('.user')
let bot = $('.bot')
let rockLeft = $('.box-rock-left')
let paperLeft = $('.box-paper-left')
let scissorLeft = $('.box-scissor-left')
let rockRight = $('.box-rock-right')
let paperRight = $('.box-paper-right')
let scissorRight = $('.box-scissor-right')
let resultBot = $('.result-bot')
let resultUser = $('.result-user')
let btnRestart = $('.btn-restart')
 
let selectBot = ''
let selectUser = ''
let scoreBot = 0
let scoreUser = 0


let startBot = false
let betClick = true




$(btnRestart).click(()=>{
     scoreBot = 0
     scoreUser = 0
})

$(rockRight).click(()=>{
    if(betClick){
        paperRight.css({display: 'none'})
        scissorRight.css({display: 'none'})
        startBot = true
        betClick = false
        selectUser = 'rock'
    }
})

$(paperRight).click(()=>{
    if(betClick){
    rockRight.css({display: 'none'})
    scissorRight.css({display: 'none'})
    startBot = true
    betClick = false
    selectUser = 'paper'
    }
})


$(scissorRight).click(()=>{
    if(betClick){
    paperRight.css({display: 'none'})
    rockRight.css({display: 'none'})
    startBot = true
    betClick = false
    selectUser = 'scissor'
    }
})


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


setInterval(()=>{
    resultBot.html(scoreBot)
    resultUser.html(scoreUser)

    if (startBot) {
        let numRandom = Math.floor(Math.random() * 3)
        if (numRandom == 0) {
            paperLeft.css({display: 'none'})
            scissorLeft.css({display: 'none'})
            selectBot = 'rock'
        }
        if (numRandom == 1) {
            rockLeft.css({display: 'none'})
            scissorLeft.css({display: 'none'})
            selectBot = 'paper'
        }
        if (numRandom == 2) {
            paperLeft.css({display: 'none'})
            rockLeft.css({display: 'none'}) 
            selectBot = 'scissor'
        }


        if(selectBot != selectUser){
            if(selectBot == 'rock' && selectUser == 'paper'){
                scoreUser++
                user.css({color: '#00ff22'})
            }
            if(selectBot == 'rock' && selectUser == 'scissor'){
                scoreBot++
                bot.css({color: '#00ff22'})
            }
            if(selectBot == 'paper' && selectUser == 'rock'){
                scoreBot++
                bot.css({color: '#00ff22'})
            }
            if(selectBot == 'paper' && selectUser == 'scissor'){
                scoreUser++
                user.css({color: '#00ff22'})
            }
            if(selectBot == 'scissor' && selectUser == 'rock'){
                scoreUser++
                user.css({color: '#00ff22'})
            }
            if(selectBot == 'scissor' && selectUser == 'paper'){
                scoreBot++
                bot.css({color: '#00ff22'})
            }
        }


        sleep(2000).then(() => {
            user.css({color: '#fff'})
            bot.css({color: '#fff'})
            rockRight.css({display: 'block'})
            paperRight.css({display: 'block'})
            scissorRight.css({display: 'block'})
            rockLeft.css({display: 'block'})
            paperLeft.css({display: 'block'})
            scissorLeft.css({display: 'block'})
            betClick = true
        });

        startBot = false
    }
        
    
},0)