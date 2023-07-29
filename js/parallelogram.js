document.getElementById('btn-parallelogram-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('parallelogram-field-b');
    const triangleFieldH = getInputFieldById('parallelogram-field-h');

    // validationCheck(triangleFieldB ,triangleFieldH);

    if(validationCheck(triangleFieldB,triangleFieldH)===true){
        return;
    }
    
    // if(isNaN(triangleFieldB) || isNaN(triangleFieldH) || triangleFieldB <= 0 || triangleFieldH <= 0 ){
    
    //     alert('please enter a valid number');
    //     return;
    // }
    else{
    const triangleArea = ( triangleFieldB * triangleFieldH).toFixed(1);




    const previousAreaTotal = getTextElementValueById('parallelogram-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
    setTextElementValueById('parallelogram-area', currentTriangleArea);
    }


})
getElementHoverById('parallelogram-hover');