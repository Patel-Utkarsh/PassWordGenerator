let defVal = 10;
let strPass = '';
const handleSlider = document.querySelector('[slider]');
const manageNum = document.querySelector('#pm');
let dp = document.querySelector('[display-pass]');
const symbols = '!@#$%^&*()?/,|{}]['
let checkCount = 2;

defSlider();

function defSlider() {
    handleSlider.value = defVal;
    manageNum.innerText = defVal;


}


handleSlider.addEventListener('input',function(val) {
    defVal = val.target.value;
    defSlider();



});


const manageCopy = document.querySelector('.cpy-btn');
manageCopy.addEventListener('click',function() {
    if(dp.value.length >= 1) {
        navigator.clipboard.writeText(dp.value);

        if(window.innerWidth > 768) {
            const cpy = document.querySelector('.copied');
            cpy.style.scale = 1;
    
            setTimeout(() => {
                cpy.style.scale = 0;
            
            }, 1000);


        }

        else {
            const cpy = document.querySelector('.cpm');
            cpy.style.scale = 1;
        
           setTimeout(() => {
                cpy.style.scale = 0;
                
            }, 1000);
    
        }

        
    }
 

})


function generateInt(min ,max) {
    return Math.floor(Math.random()* (max-min) + min);

}

let ck1 = document.querySelector('#UC');

let ck2 = document.querySelector('#LC');

let ck3 = document.querySelector('#IN');

let ck4 = document.querySelector('#IS');

ck1.checked = true;
ck3.checked = true;


const allCheckBox = document.querySelectorAll('input[type = checkbox]');

function handleCheckBoxChange() {
    checkCount = 0;

    allCheckBox.forEach(function(check) {
        if(check.checked) {
            checkCount++;
        }
    })

    if(defVal < checkCount) {
        defVal = checkCount;
        defSlider();
    }

}

allCheckBox.forEach(function(checkbox) {
    checkbox.addEventListener('change',handleCheckBoxChange);


})




function isStrong() {
    const obj = document.querySelector('.circle');
    if(checkCount >=3 && defVal > 5) {
        obj.style.backgroundColor = 'lawngreen';

    }

    else if(checkCount >=2 && defVal > 5) {

    
        obj.style.backgroundColor = 'yellow';

    }

    else {

        obj.style.backgroundColor = 'red';

    }


}

function shufflePassword(password) {
    let passArr = password.split('');
    for(let i = 0; i<passArr.length; i++) {
        let j = generateInt(i+1,(passArr.length)-1);

        let c= passArr[i];
        passArr[i] = passArr[j];
        passArr[j] = c;
    }

    password = passArr.join('');

    return password;



}



function generatePass() {

   if(checkCount == 0 || checkCount > defVal) {
    return;
   }
   

    while(strPass.length < defVal) {

        if(ck1.checked && strPass.length < defVal) {
            let val  = generateInt(65,90);
        
            strPass += String.fromCharCode(val);
           
        }

        if(ck2.checked && strPass.length < defVal) {
       
            let val  = generateInt(97,122);
            strPass += String.fromCharCode(val);
           
        }

        if(ck3.checked && strPass.length < defVal) {
      
            let val  = generateInt(0,9);
            strPass += val
           
        }

        if(ck4.checked && strPass.length < defVal) {
    
            let val  = generateInt(0,17);
            strPass += symbols[val];
           
        }

    }

    isStrong();

    dp.value = shufflePassword(strPass);
    strPass = '';

}

const bt = document.querySelector('.btn');
bt.addEventListener('click',generatePass);

