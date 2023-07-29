
document.getElementById('btn-rectangle-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('rectangle-field-w');
    const triangleFieldH = getInputFieldById('rectangle-field-l');

    // validationCheck(triangleFieldB ,triangleFieldH);
    if(validationCheck(triangleFieldB,triangleFieldH)===true){
        return;

        
    }
    
    // if(isNaN(triangleFieldB) || isNaN(triangleFieldH) || triangleFieldB <= 0 || triangleFieldH <= 0 ){
    
    //     alert('please enter a valid number');
    //     return;
    // }
    else{

        const triangleArea = (triangleFieldB * triangleFieldH).toFixed(1);



        
        const previousAreaTotal = getTextElementValueById('rectangle-area');
        const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
        setTextElementValueById('rectangle-area', currentTriangleArea);
    }
    
    
})
getElementHoverById('rectangle-hover');