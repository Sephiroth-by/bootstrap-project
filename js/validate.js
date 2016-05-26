
window.addEventListener("load", function () {
    document.forms[0].addEventListener("submit", function (f) {
        
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

        var isValid = true;

        var elements = this.querySelectorAll("input,select");

        for (var i = 0; i < elements.length; i++) {
            var elem = elements[i];
            if (elem.getAttribute("required") == "required") {
                validateText(elem);
            }
            if (elem.getAttribute("validator") == "number") {
                validateNumber(elem);
            }
            if (elem.getAttribute("validator") == "email") {
                validateEmail(elem);
            }
        }

        f.preventDefault();

        if(isValid) {
            var client = {
                FirstName: $("[name='firstName']").val(),
                LastName: $("[name='lastName']").val(),
                Address: $("[name='address']").val(),
                City: $("[name='city']").val(),
                State: $("[name='state']").val(),
                ZipCode: $("[name='zipCode']").val(),
                Email: $("[name='email']").val(),
                PhoneNumber: $("[name='phone']").val(),
            };

            $.ajax({
                url: 'http://localhost:10001/api/values',
                type: 'POST',
                data: JSON.stringify(client),
                contentType: "application/json;charset=utf-8",
                success: function () {
                    $(".request").html("").text("Success").css({ "background-color": "green", "height": "400px" });
                },
                error: function () {
                    $(".request").html("").text("Error").css({ "background-color": "red", "height": "400px" });
                }
            });
        }
    });
});