
window.addEventListener("load", function () {
    document.forms[0].addEventListener("submit", function (f) {
        var isValid = true;

        var firstName = document.getElementsByName("firstName")[0];
        var lastName = document.getElementsByName("lastName")[0];
        var address = document.getElementsByName("address")[0];
        var city = document.getElementsByName("city")[0];
        var state = document.getElementsByName("state")[0];
        var zipCode = document.getElementsByName("zipCode")[0];
        var email = document.getElementsByName("email")[0];
        var tel = document.getElementsByName("tel")[0];

        validate(firstName);
        validate(lastName);
        validate(address);
        validate(city);
        validate(state);
        validate(zipCode);
        validate(tel);

        if (isNaN(tel.value)) {
            tel.parentElement.className += " has-error";
            isValid = false;
        }
        else {
            tel.parentElement.className += " has-success";
        }

        if (isNaN(zipCode.value)) {
            zipCode.parentElement.className += " has-error";
            isValid = false;
        }
        else {
            zipCode.parentElement.className += " has-success";
        }

        var emailPattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        var checkEmail = email.value.search(emailPattern);
        if (checkEmail == -1) {
            email.parentElement.classList.remove("has-success");
            email.parentElement.classList.add("has-error");
            isValid = false;
        }
        else {
            email.parentElement.classList.remove("has-error");
            email.parentElement.classList.add("has-success");
        }

        function validate(e) {
            if (e.value.length == 0) {
                e.parentElement.classList.remove("has-success");
                e.parentElement.classList.add("has-error"); 
                isValid = false;
            }
            else {
                e.parentElement.classList.remove("has-error");
                e.parentElement.classList.add("has-success");
            }
        }

        if (!isValid) {
            f.preventDefault();
        }
    });
});