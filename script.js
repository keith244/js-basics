const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world!!'

let iceCream = 'chocolate';
if (iceCream === 'chocolate'){
    // alert ('Yay, i love chocolate!')
}else{
    // alert('Thanks but no')
}

const myImage = document.querySelector('img');
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    
    if (mySrc === 'img/portfolio-7.jpg'){
        myImage.setAttribute('src', 'img/portfolio-8.jpg');
    }else{
        myImage.setAttribute('src', 'img/portfolio-7.jpg')
    }
};

let myButton = document.querySelector('button');
let myHead = document.querySelector('h1');

// function setUsername(){
//     const myName = prompt ('Please enter your username.');

//     if (!myName){
//         setUsername();
//     }else{
//         localStorage.setItem('name', myName);
//         myHead.textContent = `What do you think of mozilla, ${myName}` 
//     }

//     localStorage.setItem('name', myName);
//     myHead.textContent = `Hello, my name is ${myName}`;
// }
// if (localStorage.getItem('name')){
//     setUsername();
// }else{
//     const storedName = localStorage.getItem('name');
//     myHead.textContent = `Mozilla is cool, ${storedName}`
// }
// myButton.onclick = () =>{
//     setUsername();
// };

// if statement in js
/* 
if (condition){
    statement1;
}else{
    statement2
};
*/

const b = new Boolean (false);
if (b){
    console.log('Hey there')
}else{
    console.log('Hey bro')
}

// function checkData (){
//     if (document.form1.threeChar.value.length === 3){
//         return true;
//     }else{
//         alert (`Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`, );
//         return false;
//     };
// };
function checkData() {
    if (document.form1.threeChar.value.length === 3) {
      return true;
    } else {
      alert(
        `Enter exactly three characters. 
        ${document.form1.threeChar.value} is not valid.`,
      );
      return false;
    }
  }
  
// switch statement
// let userPrompt = prompt('What fruit would you like?');
// let fruitType = userPrompt.toLowerCase()


// switch (fruitType){
//     case 'oranges':
//         window.alert('Oranges are $0.49 a pound');
//         break;
//     case 'apples':
//         window.alert('Apples are $0.43 a pound');
//         break;
//     case 'bananas':
//         window.alert('Bananas are $1 a pound');
//         break;
//     default:
//         window.alert(`Sorry were out of ${fruitType}`);
// }
// window.alert('Is there anything else you\'d like?')


// This is a mini-program to prompt user input, then convert it to lower case

// let myPrompt = prompt('What is you favorite day?');
// let myDay = myPrompt.charAt(0).toUpperCase() + myPrompt.slice(1);
// switch (myDay){
//     case 'Monday':
//         window.alert('Today is Monday')
//         break;
//     case 'Tuesday':
//         window.alert('Today is Tuesday')
//         break;
//     case 'Wednesday':
//         window.alert('Today is Wednesday')
//         break;
//     case 'Thursday':
//         window.alert('Today is Thursday')
//         break;
//     case 'Friday':
//         window.alert('Today is Friday')
//         break;
//     case 'Saturday':
//         window.alert('Today is Saturday')
//         break;
//     case 'Sunday':
//         window.alert('Today is Sunday')
//         break;
//     default:
//         window.alert(`Sorry,but ${myDay} is not a valid date `)
// }

let shoppingDone = false;
let childAllowance;

if (shoppingDone === true){
    childAllowance = 10;
    console.log(`You get ${childAllowance}`);
}else{
    childAllowance = 5;
    console.log(`You get ${childAllowance}`);
}

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change',setWeather);

function setWeather(){
    const choice = select.value;

    if (choice=='sunny'){
        para.textContent = 
        'It is nice and sunny outside today.Wear shorts! Go to the beach, or the park.'
    }else if(choice==='rainy'){
        para.textContent =
        'It is rainy outside. Make sure to wear something warm and heavy';
    }else if (choice==='snowing'){
        para.textContent =
        'It is snowy outside. Go make some snow angels'
    }else if (choice === 'overcast'){
        para.textContent = 
        'The sky is rather grey today.'
    }else{
        para.textContent = ''
    };

};

// const selects = document.querySelector('select');
// const html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor){
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }

// selects.addEventListener ('change', ()=>
//     selects.value === 'black'
//         ?update ('black', 'white')
//         :update ('white', 'black'),
// );

let myselection = document.querySelector('select');
const html = document.querySelector('body');
document.body.style.padding = '10px';

function colorChange (bgColor, textColor) {
    bgColor = html.style.backgroundColor;
    textColor = html.style.color;
}

myselection.addEventListener('change', ()=>
    myselection.value === 'black'
)


let selection = document.querySelector('select');
let list = document.querySelector('ol');
let h3 = document.querySelector('h3');

selection.addEventListener('change', createCalender);
selection.addEventListener('change', ()=>{
    const choice = select.value;
    createCalender(choice);
})
function createCalender (month){
    let days = 31;
    
    if (month === 'february'){
        days = 28;
    }else if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december'){
        days = 31;
    }else{
        days = 30
    }

    list.textContent = '';
    h3.textContent = month;
    for (let i =1; i<=days; i++){
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem)
    }
}
