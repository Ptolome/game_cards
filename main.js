


// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
    const array = []
    for (let i=1; i<=count;i++){
        array.push(i)
        array.push(i)
    }
    return array

}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
   
    for (let i=arr.length-1; i>0;i--){
        let j = Math.floor(Math.random()*(i+1))
        let t=arr[j]
        arr[j]=arr[i]
        arr[i]=t
        
    }
 return arr
}
// функция создает крточки и помещает их в дом дерево
function createCards(arr){ 
    
    for (let item of arr){
            const div = document.createElement("div")
            div.classList.add('card')
            div.setAttribute('num',item)
            divCards.append(div)
            cards.push(div)
            div.addEventListener('click',function(){isBlocked ? console.log('isBlocked') :clickCard(this)})

        }
    return cards
}

// функция отмечает отгаданные карты и переворачивает неотгаданные
function clickCard(item){
    
        pair.push(item)
        pair.shift()
        
        if (pair[0]!==pair[1] && pair[0].getAttribute('num')==pair[1].getAttribute('num')) {
            pair[0].classList.add('guessted')
            pair[1].classList.add('guessted')
            
        }
        // проверяем что игра окончена и создаем кнопку 'Сыграть ещё раз'
        if (close()){
            const butRestart=document.createElement('button')
            butRestart.textContent='Сыграть ещё раз'
            divCards.after(butRestart)
            butRestart.addEventListener('click',()=>{
                startGame();
                butRestart.remove() })
            
        }
        
        item.classList.add('toReversCard')

        if (item.classList.contains('toReversCard') ){
            const numberOfCards=item.getAttribute('num')
            setTimeout(()=>item.innerHTML=`<span>${numberOfCards}</span>`,200)
            
            clickedCards.push(numberOfCards)
        
        } else {
            item.textContent=''
        }

}
//  функция закрывает все карточки кроме угаданных и определяет выигрыш
function close() {
    isBlocked=true
    isWin=true
    for (const item of cards){
        if (!item.classList.contains('guessted') && item.classList.contains('toReversCard')) {
            item.classList.remove('toReversCard')
            item.textContent=''
           
        }
        if (!item.classList.contains('guessted')){
            isWin=false
        }

    }
    isBlocked=false
   return isWin 
}
const divCards=document.querySelector('.cards')
const clickedCards=[] 
const pair=[document.body, document.body]
let cards=[]
let isBlocked=false

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame() {

    divCards.innerHTML=''

    const quantityOfCards= document.querySelector('#quantity').value
    let cards = createCards(shuffle(createNumbersArray(quantityOfCards)))
    // setInterval(()=>{
    //     close()
       
    // }, 1000)
   

}


