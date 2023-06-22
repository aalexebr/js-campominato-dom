

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
    let clickArrCount = []
    // let count = 0;
    let newRng = generateRng(1, 100, 16)
    for(let i=1; i<=cellNumber; i++){
        let singleRNG = newRng[i-1]
        console.log('numbers', singleRNG, 'array', newRng)
        // boxcreation (make a function for it)
        const  box = document.createElement('div');
        box.classList.add('box',`box-${cellNumber}`);  
        box.innerHTML = i;
        box.setAttribute('index', i)
        // added index
        
        // console.log(index)
        document.querySelector(' main > .my-container .row').append(box);
        box.addEventListener('click',
            function(){
                index = parseInt(box.getAttribute('index'))
                // console.log('index clicked', index, i)
                // console.log(index, singleRNG)
                
                if(clickArrCount.includes(i)){

                }
                else{
                    clickArrCount.push(i)
                    console.log('new array', clickArrCount, 'length', clickArrCount.length)
                    document.getElementById('points').innerHTML = clickArrCount.length
                }
                if(newRng.includes(index)){
                    box.classList.toggle('red')
                    console.log('you lost', clickArrCount.length-1)
                    alert(`you lost with ${clickArrCount.length}`)
                    document.querySelector('.row').innerHTML= ''
                    
                }
                else{
                    box.classList.toggle('bkg-color')

                }
                
            }
        );
        boxArray.push(box)
        // 
   
    };
    
    // let boxArrayWithoutBomb = boxArray
    let rng = generateRng(1, 100, 5)
    
    // create function for number of bombs (5)
    // for(let i=0; i<5; i++){
    //     let rngValue = rng[i]  
    //     console.log('array', rng)
    //     // boxArray[rngValue-1].classList.add('red')
    //     let scope = 0
    //     boxArray[rngValue-1].addEventListener('click',
    //         function(){
    //             this.classList.toggle('red')
                
    //             scope=1
    //             if (scope == 1){
    //                 console.log('lost')
    //             }
               
    //         }
    //     );
        
    // }
    
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