document.addEventListener('DOMContentLoaded', function () {
    const emailAddressInputTop = document.getElementById('emailAddress');
    const submitButtonTop = document.getElementById('submitButtonTop');
    const emailAddressInputBottom = document.getElementById('emailAddressBelow');
    const submitButtonBottom = document.getElementById('submitButtonBottom');

    emailAddressInputTop.addEventListener('input', function () {
        handleEmailInput(emailAddressInputTop, submitButtonTop);
    });

    emailAddressInputBottom.addEventListener('input', function () {
        handleEmailInput(emailAddressInputBottom, submitButtonBottom);
    });

    function handleEmailInput(emailInput, submitButton) {
        // Validate email format
        const isValidEmail = emailInput.checkValidity();

        // Enable or disable button based on email validity
        submitButton.disabled = !isValidEmail;

        // Remove hover effect class if the email is not valid
        if (!isValidEmail) {
            submitButton.classList.remove('hover-effect');
        }
    }

    // Function to handle form submission
    function handleFormSubmit(form) {
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.classList.remove('hover-effect');
    }

    const forms = document.querySelectorAll('.form-subscribe');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            handleFormSubmit(form);
        });
    });
});