document.getElementById('submit-button').addEventListener('click', function(){
    const userEmail = document.getElementById('input-email');
    const email = userEmail.value ;
    const userPassword = document.getElementById('input-password');
    const password = userPassword.value ;
   if(email === 'arafat@gmail.com' && password === 'arafat10'){
    window.location.href = 'bank-inside.html'
   }
   else{
    
    alert('invaid password')
   }
})
