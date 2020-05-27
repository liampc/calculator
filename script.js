const calculator = document.querySelector('.calcCont');
const btns = calculator.querySelector('.btnsDiv');
const display = calculator.querySelector('.displayBox')

btns.addEventListener('click', e => {
    if (e.target.matches('button')){
       const btn = e.target;
       const operation = btn.dataset.operation;
       const btnName = btn.textContent;
       const displayValue = display.textContent;

       if (!operation){ // for number btns
        if (displayValue === "0"){
            display.textContent = btnName;
        } else {
            display.textContent = displayValue + btnName;
        }
       }

       if ( operation === 'multiply' ||
            operation === 'divide' ||
            operation === 'add' ||
            operation === 'subtract'){
           console.log('its an operator')
       }

       if (operation === 'decimal'){
        console.log('its a decimal')
       }

       if (operation === 'calculate'){
        console.log('its equals')
       }

       if (operation === 'clear'){
            display.textContent = 0;
       }

       if (operation === 'delete'){
           if (displayValue.length > 1) {
               display.textContent = displayValue.slice(0,-1);
           } else {
               display.textContent = "0";
           }

        }
       
    }

})


