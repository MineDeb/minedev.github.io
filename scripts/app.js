"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const success = document.getElementById('success');
    
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();
        form.classList.add("hidden");
        // success.classList.add("visible");
        success.classList.add("visible");
        
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