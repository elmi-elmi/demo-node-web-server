console.log('Client side javascript file is loaded.')

//
// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })
//
//
// const url = 'http://localhost:3000/weather?address=shiraz';
//
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error) return console.log(data.error);
//         console.log(data)
//     })
// })
const baseurl = 'http://localhost:3000/weather?address='
const form = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('.message-1');
const messageTwo = document.querySelector('.message-2');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    const location = search.value;
    fetch(baseurl+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error;
                return
            }
            console.log(data)
            messageOne.textContent = 'Country: ' + data.country + ', Region: ' + data.region;
            messageTwo.textContent = 'Temperature: '+data.tempreture+', Feelslike: '+ data.feelslike;
        })
    })
})
