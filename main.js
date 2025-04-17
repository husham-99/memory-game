

let allCards = document.querySelectorAll('.card')
let firstCard = null
let secondCard = null
let canKlick = true
let score = 0


allCards.forEach(card =>{

    card.addEventListener('click', handleCardClicked)

})

// handle clicking on card
function handleCardClicked(){

    if(!canKlick) return
    // prevent card double click
    if(this.classList.contains('flip')) return

    this.classList.add('flip')

    if(!firstCard) firstCard = this
    else if (!secondCard) secondCard = this
    

    let img1 = firstCard? firstCard.firstElementChild.src : null
    let img2 = secondCard? secondCard.firstElementChild.src : null
    
    // handle matching condition
    if(img1 === img2){

        console.log('haaaaaa')
        firstCard = null
        secondCard = null

        score++
        if(score === 6) handleGameOver()
    }
    // handle none matching condition
    else if(img1 && img2){

        canKlick = false
        setTimeout(() => {
            
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            firstCard = null
            secondCard = null
            canKlick = true
        }, 1000);
    }


}

function handleGameOver(){

    setTimeout(() => {
        
        let retVal = confirm('you win the game 😉😉 \n play again ???')
        if(retVal === true){

            location.reload()
        }
    }, 1000);
}
// shuffle cards

allCards.forEach(card =>{

    let randPos = Math.floor(Math.random() * 12)
    
    card.style.order = randPos
})

























