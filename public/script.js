let submitBtn=document.querySelector('.submit')
let post=document.querySelector('#posty')
let input=document.getElementById("inputs")
 
let data=[]
console.log(data)
// const options={
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json'},

// body: JSON.stringify(data)
// }
// fetch('api', options)
console.log(data)

 
 console.log('fndifjdif')
const deleteItem = (e)=>{
  e.preventDefault()
const cardId = parseInt(e.target.parentElement.id);
console.log(cardId)
 
let deleteCard = null;
 
for(let i = 0; i < data.length; i++){
 const currentCard = data[i]

  if(currentCard.id === cardId){
     deleteCard = i
        break;
      
    }
}
 
data.splice(deleteCard, 1);
 
arrayLoop()
 
}
 
 
 
const editItem = (e)=>{
 e.preventDefault()
 
 const cardId = parseInt(e.target.parentElement.id);
console.log(cardId)
 
let editCard = null;
 
for(let i = 0; i < data.length; i++){
 const currentCard = data[i]
  if(currentCard.id === cardId){
     editCard = data[i].text
        break;
   }
 }
 let newInput=document.createElement('input')
 
 newInput.value=editCard
 post.appendChild(newInput)
 
}

 let newTodo;
let arrayLoop=()=>{
let cards=document.querySelectorAll('.card')
 

    

 for (let i=0; i<cards.length; i++) {
  cards[i].remove()
  
  
  }
 
 
 for(let i=0; i<data.length; i++){
 newTodo=data[i]
 
    

  let list=document.createElement('li')
   list.innerText=newTodo.text

 
  let div=document.createElement('div')
   div.id=newTodo.id
 
 let listItem= div.classList
   listItem.add('card')

 
 let deleteBtn=document.createElement('button')
   deleteBtn.innerHTML='Delete'
   deleteBtn.setAttribute('id', data[i].id)
   deleteBtn.classList.add('deletebtn')
   deleteBtn.addEventListener('click',deleteItem)
 
 
 let editBtn=document.createElement('button')
 editBtn.innerHTML="Edit"
 editBtn.classList.add('editbtn')
 
 editBtn.onclick=function(e){
   e.preventDefault()
 
 
 const cardId = parseInt(e.target.parentElement.id);
 console.log(cardId)
 let editCard = null;
 for(let i = 0; i < data.length; i++){
  const currentCard = data[i]
 
  if(currentCard.id === cardId){
      editCard = data[i].text
         break;
    }
   
  }
 
  let newInput=document.createElement('input')
  newInput.type='text'
newInput.value=editCard
  div.appendChild(newInput)
  editBtn.setAttribute('disabled','true')
 let updateBtn=document.createElement('button')
 updateBtn.innerText='Update'
 div.appendChild(updateBtn)
  updateBtn.onclick=function(e) {
   e.preventDefault()
   editCard=newInput.value
 }

 }
 
 div.appendChild(list)
 div.appendChild(deleteBtn)
 div.appendChild(editBtn)
 
  
 post.appendChild(div)
 
 }

 
}
 

submitBtn.addEventListener('click', (e) =>{
e.preventDefault()
data.push({Name:'my todo',text:input.value, id: Date.now()})
input.value=''


  arrayLoop()

 const options={
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'},
    
    body: JSON.stringify(newTodo)
    }
    fetch('api', options)
    console.log(options)
})

 
 
 
 
 
 
// const CREATE_BUTTON = document.querySelector("#createBtn");
// const CARDS_CONTAINER = document.querySelector("#cardsContainer");
 
// const noteItems = [];
 
// const deleteHandler = (e)=>{
//     //parse int because dom items are always strings
//  const cardId = parseInt(e.target.parentElement.id);
 
//  //find item in arr
//  let foundCardIndex = null;
 
//  for(let i = 0; i < noteItems.length; i++){
//      const currentCard = noteItems[i];
   
//      if(currentCard.id === cardId){
//          //save the index
//          foundCardIndex = i
//          break;
//      }
//  }
 
//  //remove item from array
//  noteItems.splice(foundCardIndex, 1);
 
//  //rebuild dom
//  createItems()
// }
 
// const createItems = () => {
//     //we are going to remove all the cards before adding new ones
//     const cards = document.querySelectorAll('.card');
//     for(let i = 0; i < cards.length; i++ ){
//         cards[i].remove();
//     }
 
//     console.log(noteItems)
//     //add items from noteItems arr
//     for(let i = 0; i < noteItems.length; i++){
//         const currentNote = noteItems[i];
      
//         const title = document.createElement('p');
//         title.innerHTML = currentNote.title;
//         const description = document.createElement('p');
//         description.innerHTML = currentNote.description;
 
//         const div = document.createElement('div');
//         div.id = currentNote.id;
//         const list = div.classList;
//         list.add("card");
 
//         const deleteBtn = document.createElement('button');
//         deleteBtn.innerHTML = 'Delete';
//         deleteBtn.classList.add('deletebtn');
//         deleteBtn.addEventListener('click', deleteHandler)
 
//         div.appendChild(title);
//         div.appendChild(description);
//         div.appendChild(deleteBtn);
 
//         CARDS_CONTAINER.appendChild(div)
//     }
 
// }
 
// CREATE_BUTTON.addEventListener('click', function(e){
//     e.preventDefault();
 
//     //Add new item to array. This is hardcoded, but yours wont be
//     noteItems.push({
//         id: Date.now(),
//         title: This is item num - ${noteItems.length},
//         description: "blah blah"
//     })
 
//     createItems();
// })
