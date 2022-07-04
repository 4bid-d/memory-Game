//array for defining image and image name
const cardArray =[
    {
        name:'fries',
        img:'./images/fries.png',
    },
    {
        name:'burger',
        img:'./images/burger.png',
    },
    {
        name:'friedchicken',
        img:'./images/friedChicken.png',
    },
    {
        name:'pen',
        img:'./images/pen.png',
    },
    {
        name:'pizza',
        img:'./images/pizza.png',
    },
    {
        name:'cat',
        img:'./images/cat.png',
    },
    {
        name:'dog',
        img:'./images/dog.png',
    },
    {
        name:'bag',
        img:'./images/bag.png',
    },  
    {
        name:'camera',
        img:'./images/camera.png',
    },  {
        name:'football',
        img:'./images/football.png',
    }, 
     {
        name:'globe',
        img:'./images/globe.png',
    }, 
     {
        name:'spectacles',
        img:'./images/spectacles.png',
    }, 
     {
        name:'laptop',
        img:'./images/laptop.png',
    }, 
     {
        name:'button',
        img:'./images/button.png',
    },
    {
        name:'fries',
        img:'./images/fries.png',
    },
    {
        name:'burger',
        img:'./images/burger.png',
    },
    {
        name:'friedchicken',
        img:'./images/friedChicken.png',
    },
    {
        name:'pen',
        img:'./images/pen.png',
    },
    {
        name:'pizza',
        img:'./images/pizza.png',
    },
    {
        name:'cat',
        img:'./images/cat.png',
    },
    {
        name:'dog',
        img:'./images/dog.png',
    },
    {
        name:'bag',
        img:'./images/bag.png',
    },  
    {
        name:'camera',
        img:'./images/camera.png',
    },  {
        name:'football',
        img:'./images/football.png',
    }, 
     {
        name:'globe',
        img:'./images/globe.png',
    }, 
     {
        name:'spectacles',
        img:'./images/spectacles.png',
    }, 
     {
        name:'laptop',
        img:'./images/laptop.png',
    }, 
     {
        name:'button',
        img:'./images/button.png',
    },
    {
        name:'house',
        img:'./images/house.png',
    }, 
     {
        name:'telephone',
        img:'./images/telephone.png',
    }, 
    {
        name:'house',
        img:'./images/house.png',
    }, 
     {
        name:'telephone',
        img:'./images/telephone.png',
    },
]

//to sort the array
cardArray.sort(()=> 0.5 - Math.random())

//to select #grid-div as gridDisplay
const gridDisplay = document.querySelector('#grid')
//to select #result as resultDisplay
const resultDisplay = document.getElementById('result')
const winButtonDisplay = document.getElementById('buttons')
const winButtonDisplay2 = document.getElementById('buttons2')
//array called cardsChosen
const cardsChosen = []

let constantIdArray = []

//array called cardsChosenIds
let cardsChosenIds = []

let result = 0

createboard()



// A function to append the image elements to the targeted div
function createboard(){
    for (let i =0; i < cardArray.length ; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/block.png')
        card.setAttribute('class','pic')
        card.setAttribute('data-id',i)

        card.addEventListener('click',flipCard)

        gridDisplay.appendChild(card)
    }
}



//function for changing image on click
function flipCard(){

    //it is storing the the id taken from the 'card' in callback function creatboard()
    const cardId = this.getAttribute('data-id')

    //storing the namevalue equal to  clicked id from cardArray to cardArrayName variable
    var cardArrayName = cardArray[cardId].name

    //pushing cardArrayName to cardsChosen
    cardsChosen.push(cardArrayName)

    // pusing cardid to cardsChosenIds array
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    this.setAttribute('alt',cardArrayName)


    // calling checkMatch function when cardsChosen arrays length tunrned to 2
    if(cardsChosen.length === 2 ) {
        const cards = document.querySelectorAll('img')
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        setTimeout(checkMatch,500)
        
    }if(cardsChosen.length === 1){
        const cards = document.querySelectorAll('img')
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
    }
}
//A function for checking first and second values of cardschosen array are same and i
// if it is same turn them to a white image
function checkMatch(){
    // to select all image element
    const cards = document.querySelectorAll('img')

    console.log('Checking for match')
    
    if(cardsChosen[0]== cardsChosen[1]){
        alert('You Found A Match')

        constantIdArray.push(cardsChosenIds[0])
        constantIdArray.push(cardsChosenIds[1])

        //changing image tag attribuite to ./images/white.png when match was founded
        cards[cardsChosenIds[0]].setAttribute('src','./images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','./images/blank.png')

        //and also stoping Eventlisener when click()
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)

        cardsChosenIds.length = 0
        cardsChosen.length = 0

        result++
        resultDisplay.innerHTML= result

        if(constantIdArray.length === cardArray.length){

            let button = document.createElement('button')
            button.setAttribute('onclick','window.location.reload()')

            // let button2 = document.createElement('button')
            // button2.setAttribute('onclick',"window.location.href='./index.html")

            button.innerText='retry';
            // button2.innerText='Level 3';

            winButtonDisplay.appendChild(button)
            // winButtonDisplay2.appendChild(button2)

            resultDisplay.innerHTML= 'congratulations, your score :'+ result
        }
    }else{
        console.log('No Match')

        cards[cardsChosenIds[0]].setAttribute('src','./images/block.png')
        cards[cardsChosenIds[1]].setAttribute('src','./images/block.png')

        cards[cardsChosenIds[0]].addEventListener('click',flipCard)
        cards[cardsChosenIds[1]].addEventListener('click',flipCard)
    
        cardsChosenIds.length = 0
        cardsChosen.length = 0
        console.log(cardArray.length)
      
    }
}
