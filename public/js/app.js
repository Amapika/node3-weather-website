// console.log('This is getting loaded on client side which is json file')
// /*
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
// */
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageContent1=document.querySelector('#msg1')
const messageContent2=document.querySelector('#msg2')
weatherForm.addEventListener('submit',(e)=>
{
    e.preventDefault()
    console.log(search.value)
    const location=search.value
    
    messageContent1.textContent='Loading......'
     messageContent2.textContent=''
    
     fetch('http://localhost:3000/weather?address='+location).then((response) => {
     response.json().then((data) => {
         if (data.error) {
             messageContent1.textContent=data.error
             console.log(data.error)
         } else {
            messageContent1.textContent=data.location
            messageContent2.textContent=data.forecast
             console.log(data.location)
             console.log(data.forecast)
         }
     })
 })
})
// const weatherForm=document.querySelector('form')
// weatherForm.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log ('testing')
// })
/*
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})
*/