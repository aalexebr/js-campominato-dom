

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
    let rng = generateRng(1, cellNumber, 16)
    console.log('array', rng)
    for(let i=1; i<=cellNumber; i++){
        // boxcreation 
        const  box = document.createElement('div');
        box.classList.add('box',`box-${cellNumber}`);  
        box.innerHTML = i;
        // index give index attribute to each box with iteration number
        box.setAttribute('index', i)
        // added index
        
        document.querySelector(' main > .my-container .row').append(box);
        box.addEventListener('click',
            function(){
                // get the Number object of each box and compare to the index of the array with includes.
                index = parseInt(box.getAttribute('index'))

                if(clickArrCount.includes(i)){

                }
                else{
                    clickArrCount.push(i)
                    console.log('new array', clickArrCount, 'length', clickArrCount.length)
                    document.getElementById('points').innerHTML = `POINTS =${clickArrCount.length}`
                }
                if(rng.includes(index)){
                    box.classList.toggle('red')
                    console.log('you lost', clickArrCount.length-1)
                    alert(`you lost with ${clickArrCount.length-1}`)
                    document.getElementById('points').innerHTML = `POINTS =${clickArrCount.length-1}`
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
    // WRONG SOLUTION creating a second cycle with indexes of both arrays
    // let boxArrayWithoutBomb = boxArray
    // let rng = generateRng(1, 100, 5)
    
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
