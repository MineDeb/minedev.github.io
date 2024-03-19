"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    
    async function formSend(e) {
        e.preventDefault();
        alert('SEND');
        
        let formData = new FormData(form);
        
        let userResponse = await fetch('email.php', {
            method: 'POST',
            body: formData
        });
        
        let devResponse = await fetch('devemail.php', {
            method: 'POST',
            body: formData
        });
        
        
        // if (userResponse.ok && devResponse.ok) {
        //     alert('OK')
        // } else {
        //     alert('NET')
        // };
        
    }
    
    
})