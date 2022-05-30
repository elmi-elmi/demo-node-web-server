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

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    fetch(baseurl+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error) return console.log(data.error);
            console.log(data)
        })
    })

})
