var ename, eemail;

function validate() {
   ename = document.getElementById('name').value;
   eemail = document.getElementById('email').value;
   localStorage.setItem('name', ename);
   localStorage.setItem('email', eemail);
}