
window.addEventListener("load", function () {
    document.forms[0].addEventListener("submit", function (f) {
        var isValid = true;

        var requiredElements = [];
        var numberElements = [];
        var emailElements = [];

        var elements = document.getElementsByTagName("*");

        for (var i = 0; i < elements.length; i++) {
            var elem = elements[i];
            if (elem.getAttribute("required") == "required") {
                requiredElements[requiredElements.length] = elem;
            }
            if (elem.getAttribute("validator") == "number") {
                numberElements[numberElements.length] = elem;
            }
            if (elem.getAttribute("validator") == "email") {
                emailElements[emailElements.length] = elem;
            }
        }

        for (var i = 0; i < requiredElements.length; i++) {
            validateText(requiredElements[i]);
        }

        for (var i = 0; i < numberElements.length; i++) {
            validateNumber(numberElements[i]);
        }

        for (var i = 0; i < emailElements.length; i++) {
            validateEmail(emailElements[i]);
        }

        function validateText(e) {
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


        function validateNumber(e) {
            if (e.value.length == 0 || isNaN(e.value)) {
                e.parentElement.classList.remove("has-success");
                e.parentElement.classList.add("has-error");
                isValid = false;
            }
            else {
                e.parentElement.classList.remove("has-error");
                e.parentElement.classList.add("has-success");
            }
        }

        function validateEmail(e) {
            var emailPattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
            var checkEmail = e.value.search(emailPattern);
            if (checkEmail == -1) {
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