

   


function Cal(){

     var pp = document.getElementById('ps').value;
     var dd = document.getElementById('dia').value; 
     var qq = document.getElementById('Quartos').value ;


     var num =300;
     var num2 = 400;
     var num3 =500;





     if (pp  != "" && dd != "" && qq != "" ){


      var rus =pp* num2 + dd * num + qq * num3 ;  

      alert("Veja quanto fico simulação: "+rus+"$");
      
     }
     else{
     
     alert('NÃO DEIXE AS CAIXAS VAZIAS');

        
     }











}











