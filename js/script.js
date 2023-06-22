

const submit = document.getElementById('submit');
submit.addEventListener('submit',
    function(event){
        event.preventDefault();
        const select = document.getElementById('select').value;
        document.querySelector(' main > .my-container .row').innerHTML= ''
        if(select == 'hard'){
            console.log('selected 10')
            createBoard(100);

        };

        if(select == 'medium'){
            console.log('selected 9')
            createBoard(81);    
        };

        if(select == 'easy'){
            console.log('selected 7')
            createBoard(49);
        };
    }
  
);
const reset = document.getElementById('reset')
    reset.addEventListener('click',
        function(){
            document.querySelector('.row').innerHTML= ''
        } 
    );

// for(let i=1; i<=100; i++){
    
//     document.querySelector(`main .my-container .row`).innerHTML+=`<div class="box box-100">
//     ${i}
//     </div>`
//     let box = document.querySelector('.box.box-100')
//     console.log(i)
//     // const box = document.createElement('div')
//     // box.classList.add('box')  
//     // box.innerHTML = i  
//     // document.querySelector(' main > .my-container').append(box);
//     box.addEventListener('click',
//         function(){
//             box.classList.toggle('bkg-color')
//             // console.log(i)
//         }
//     );
    
// }

// function to create the board with cycle of elements inside
function createBoard(cellNumber){
    for(let i=1; i<=cellNumber; i++){

        const box = document.createElement('div')
        box.classList.add('box',`box-${cellNumber}`)  
        box.innerHTML = i  
        document.querySelector(' main > .my-container .row').append(box);
        box.addEventListener('click',
            function(){
                box.classList.toggle('bkg-color')
                // console.log(i)
            }
        );
       
    };
};

// function that creates the single element
// function createBox(){
//     const box = document.createElement('div')
//     box.classList.add('box','box-100')  
//     box.innerHTML = i  
//     box.addEventListener('click',
//             function(){
//                 box.classList.toggle('bkg-color')
//             }
//         );

//     return box;
// };