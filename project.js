                //NOTE First method 
const Green = document.querySelector('#Green');
const Brown = document.querySelector('#Brown');
const Purple = document.querySelector('#Purple');
const Blue = document.querySelector('#Pink');
const Body = document.querySelector('body');
const bk = document.querySelector('.button');

Green.addEventListener('click',function(){
    Body.style.backgroundColor = "#12372A";
    Body.style.color ="#fff";
});
Brown.addEventListener('click',function(){
    Body.style.backgroundColor = "#561C24";
    Body.style.color ="#fff";
});
Purple.addEventListener('click',function(){
    Body.style.backgroundColor = "#E26EE5";
    Body.style.color ="#fff";
});
Pink.addEventListener('click',function(){
    Body.style.backgroundColor = "#F28585";
    Body.style.color ="#fff";
});
bk.addEventListener('click',function(){
    Body.style.backgroundColor = "#fff";
    Body.style.color ="#000";
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                //NOTE Second Method 

// const btn = document.querySelectorAll('.btn');
// const Body = document.querySelector('body');

// btn.forEach((items) => {
//     items.addEventListener('click',(abc) => {
//         console.log(abc.target);
//         //! click on th colorBox in WebPage Observe in console 

//         if(abc.target.id === 'Green'){
//             Body.style.backgroundColor = "#12372A";
//              Body.style.color ="#fff";
//         }

//         if(abc.target.id === 'Pink'){
//             Body.style.backgroundColor = "#F28585";
//              Body.style.color ="#fff";
//         }

//         if(abc.target.id === 'Brown'){
//             Body.style.backgroundColor = "#561C24";
//              Body.style.color ="#fff";
//         }

//         if(abc.target.id === 'Purple'){
//             Body.style.backgroundColor = "#E26EE5";
//              Body.style.color ="#fff";
//         }

//     })

// });

// const bk = document.querySelector('.button');

// bk.addEventListener('click',function(){
//     Body.style.backgroundColor = "#fff";
//     Body.style.color ="#000";
// });