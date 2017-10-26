
function strong(){
    
    var test = document.getElementById("demo").value;
      var splitstring = test.split("");
    
 var occur = [];
        for(var i=0;i<splitstring.length;i++){
          if(occur[splitstring[i]])
          {
           occur[splitstring[i]]++;              
          }
         else 
         {
          occur[splitstring[i]] = 1;
         }
     }
    for(var i in occur)
    {
    alert('The character '+i+' is found '+occur[i]+ 'times'); 
    } 
}