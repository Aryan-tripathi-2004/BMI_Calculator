let button = document.getElementById('btn');
button.addEventListener('click',()=>{
   const height= parseInt(document.getElementById('height').value);
   const weight= parseInt(document.getElementById('weight').value);
   const result= document.getElementById('output');
   const bgcolour=document.getElementById('circle');
   
   let height_status=false, weight_status=false;

   if(height === '' || isNaN(height) || height <= 0){
    document.getElementById('height_error').innerHTML='please provide a valid height';
   }
   else{
    document.getElementById('height_error').innerHTML='';
    height_status=true;
   }
   if(weight=== '' || isNaN(weight) || weight <=0 ){
    document.getElementById('weight_error').innerHTML='please provide a valid weight';
   }
   else{
    document.getElementById('weight_error').innerHTML='';
    weight_status=true;
   }

   if(height_status && weight_status){
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    if(bmi<18.6){
        result.innerHTML='you are under weight person: '+bmi;
        bgcolour.style.backgroundColor='red';
    }
    else if(bmi>=18.6 && bmi<24.9){
        result.innerHTML='you are normal weight person: '+bmi;
        bgcolour.style.backgroundColor='green';
    }
    else if(bmi>24.9){
        result.innerHTML='you are over weight person: '+bmi;
        bgcolour.style.backgroundColor='red';
    }
   }
   else{
    alert('this form has errors');
    result.innerHTML='';
   }
});
