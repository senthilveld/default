var ename, eemail,submitt,eform;

 submitt =document.getElementById("submitbutton");
  submitt.disabled =true;

function validate() {
    eform =document.forms["formss"];
    if(eform.checkValidity())
        {
            submitt.disabled =false;
        }
       else   
        {
            submitt.disabled =true;
        }
    details();
    
}
  function details(){
   ename = document.getElementById('name').value;
   eemail = document.getElementById('email').value;
   localStorage.setItem('name', ename);
   localStorage.setItem('email', eemail);
    localStorage.getItem("name");
    localStorage.getItem("email");   
  }
   





