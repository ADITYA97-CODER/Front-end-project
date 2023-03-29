let sidebar = document.querySelector('.sidebar')
let menuItem = document.querySelector('.menu-item');
let act = document.querySelector('.act');


sidebar.onclick = ()=>{
    menuItem.classList.toggle('act');
} 


// const changeactItem = () =>{
//     menuItem.for = () =>{
//         item.classList.remove('act');
//     }
// }
// menuItem.for(item => {
//     item.addEventListener('click', () => {
//         changeactItem();
//         item.classList.add('act');
//     })
// })


// console.log('hello world');