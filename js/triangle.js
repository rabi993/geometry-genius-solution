
// let inputF1 = document.getElementById("triangle-field-b");
// inputF1.addEventListener("triangle-field-b", function() {
//     if (isNaN(inputF1.value) || inputF1.value <= 0 ) {
//         inputF1.value = "";
//         alert("Please enter a positive number");
        
    
        
//     }
//     });
// let inputF2 = document.getElementById("triangle-field-h");
// inputF2.addEventListener("triangle-field-h", function() {
//     if (isNaN(inputF2.value) || inputF2.value <= 0 ) {
//         inputF2.value = "";
//         alert("Please enter a positive number");
        
    
        
//     }
//     });






document.getElementById('btn-triangle-calculate').addEventListener('click',function(){


    // if (isNaN(triangle-field-b.value) || triangle-field-b.value <= 0 ) {
    //     triangle-field-b.value = "";
    //     alert("Please enter a positive number");
    // }

    const triangleFieldB = getInputFieldById('triangle-field-b');
    const triangleFieldH = getInputFieldById('triangle-field-h');

    
    if(validationCheck(triangleFieldB,triangleFieldH) === true ){
        return;
    }

    // validationCheck(triangleFieldB ,triangleFieldH);
    // if(isNaN(triangleFieldB) || isNaN(triangleFieldH) || triangleFieldB <= 0 || triangleFieldH <= 0 ){
    
    //     alert('please enter a valid number');
    //     return;
    // }
    
    else{

    const triangleArea = (0.5 * triangleFieldB * triangleFieldH).toFixed(1);

    const previousAreaTotal = getTextElementValueById('triangle-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);





    // const innerTextL = document.getElementById('m1').innerText;
    // if( innerTextL === "m²"){

    //     const resultX = getTextElementValueById('triangle-area');
    //     const resultY = (resultX / 10000).toFixed(3);

    //     setTextElementValueById('triangle-area', resultY);
    //     const newString1="m²";
    //     replaceTextElementValueById('m1', newString1);
    // }

    // else{
    //      setTextElementValueById('triangle-area', currentTriangleArea);
    // }
    
    setTextElementValueById('triangle-area', currentTriangleArea);
    }

})


 getElementHoverById('triangle-hover');
  
