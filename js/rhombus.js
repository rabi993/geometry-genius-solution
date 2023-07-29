
document.getElementById('btn-rhombus-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('rhombus-field-d1');
    const triangleFieldH = getInputFieldById('rhombus-field-d2');
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




    const previousAreaTotal = getTextElementValueById('rhombus-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
    setTextElementValueById('rhombus-area', currentTriangleArea);
    }
    
})
getElementHoverById('rhombus-hover');