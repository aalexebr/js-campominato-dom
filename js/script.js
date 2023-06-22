

const submit = document.getElementById('submit');
submit.addEventListener('submit',
    function(event){
        event.preventDefault();
        const select = document.getElementById('select').value;
        document.querySelector(' main > .my-container .row').innerHTML= ''
        if(select == 'hard'){
            console.log('youre in easy mode')
            // creates a board with indicated cell number
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

// FUNCTION
// function to create the board with cycle of elements inside 
// argument = the number of max iterations = the number of elements created
function createBoard(cellNumber){
    let boxArray = []
    
    for(let i=1; i<=cellNumber; i++){

        const  box = document.createElement('div')
        box.classList.add('box',`box-${cellNumber}`)  
        box.innerHTML = i  
        document.querySelector(' main > .my-container .row').append(box);
        box.addEventListener('click',
            function(){
                box.classList.toggle('bkg-color')
               
            }
        );
        boxArray.push(box)
        
    };
    
    let rng = generateRng(1, 100, 5)
     
    
    let boxArrayWithoutBomb = boxArray
    for(let i=0; i<5; i++){
        let rngValue = rng[i]  
        console.log('array', rng)
        // boxArray[rngValue-1].classList.add('red')
        // boxArrayWithoutBomb.splice(rngValue,1)
        boxArray[rngValue-1].addEventListener('click',
            function(){
                this.classList.toggle('red')
               
            }
        );
        
    }
   
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


// FUNCTION FOR RANDOM UNIQUE NUMBERS


function generateRng(min, max, howMany){
    if (max < howMany){
        return null;
    }
    let arr = [];
    while(arr.length < howMany){
        let r = Math.floor(Math.random() * (max - min +1) + 1);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}
// let rng = generateRng(1, 20, 10)
let rngOfBoxNumber = generateRng (1, 100, 100)
// console.log('full array',rng, 'index of single',rng[0]);

// for (let i=1; i<=20; i++){
//     console.log(rng[i-1] );
// }

// for(let i=1; i<=100; i++){
//     console.log('array', rng,'index 0',rng[i])
// }