document.getElementById('btn-pentagon-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('pentagon-field-p');
    const triangleFieldH = getInputFieldById('pentagon-field-b');
    // validationCheck(triangleFieldB ,triangleFieldH);
    if(validationCheck(triangleFieldB,triangleFieldH)===true){
        return;
    }
    
    // if(isNaN(triangleFieldB) || isNaN(triangleFieldH) || triangleFieldB <= 0 || triangleFieldH <= 0 ){
    
    //     alert('please enter a valid number');
    //     return;
    // }

    else{
    const triangleArea = (0.5 * triangleFieldB * triangleFieldH).toFixed(1);




    const previousAreaTotal = getTextElementValueById('pentagon-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
    setTextElementValueById('pentagon-area', currentTriangleArea);
    }
    

})
getElementHoverById('pentagon-hover');