(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.my-form')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut

        if (!form.checkValidity()) {
          event.stopPropagation();
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})();

const successAlert = document.getElementById('success-alert');
const errorAlert = document.getElementById('error-alert');
const form = document.querySelector('.my-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputTel = document.getElementById('inputTel').value;
    const inputMsg = document.getElementById('inputMsg').value;

    fetch("https://discord.com/api/webhooks/1140667544550780958/CJKhnQsASEfvLMPnPN4cp3Gb156HXde2fdZ0G9PVgnxmCYv58UeOy0OFQlVX_eKn0qa4", {
        body: JSON.stringify({
            content: `Nom - Prénom :  ${inputName} \n Email : ${inputEmail} \n Téléphone : ${inputTel} \n Message : \n \n ${inputMsg}`,
        }),
        headers: {
            "Content-Type": "application/json",
        },
            method: "POST",
    })
    .then(function (res) {
        if (res.ok) {
            form.reset();
            form.classList.remove('was-validated');
      
            successAlert.style.display = 'block';
            setTimeout(function() {
                successAlert.style.display = 'none';
            }, 2000);
        } else {
            errorAlert.style.display = 'block';
            setTimeout(function() {
                errorAlert.style.display = 'none';
            }, 2000);
        }
    })
});