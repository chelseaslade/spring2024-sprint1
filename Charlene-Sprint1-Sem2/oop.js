window.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form1");

    form.addEventListener("submit", function (e) {
        let customerName = document.querySelector("#customerName").value.trim();
        let streetAddress = document.querySelector("#streetAddress").value.trim();
        let phoneNumber = document.querySelector("#phoneNumber").value.trim();
        let emailAddress = document.querySelector("#emailAddress").value.trim();
        let creditCardNumber = document.querySelector("#creditCardNumber").value.trim();
        let cvc = document.querySelector("#cvc").value.trim();

        let isValid = true;
        let message = "";

        if (!customerName) {
            isValid = false;
            message += "Customer Name cannot be blank.\n";
        } else if (!/^[a-zA-Z\s.'-]+$/.test(customerName)) {
            isValid = false;
            message += "Customer Name contains invalid characters.\n";
        }

        if (!streetAddress) {
            isValid = false;
            message += "Street Address cannot be blank.\n";
        } else if (!/^[a-zA-Z0-9\s.,'-]+$/.test(streetAddress)) {
            isValid = false;
            message += "Street Address contains invalid characters.\n";
        }

        if (!phoneNumber) {
            isValid = false;
            message += "Phone Number cannot be blank.\n";
        } else if (!/^\d+$/.test(phoneNumber)) {
            isValid = false;
            message += "Phone Number contains invalid characters.\n";
        } else if (phoneNumber.length !== 11) {
            isValid = false;
            message += "Phone Number must be exactly 11 numerical digits.\n";
        }

        if (!emailAddress) {
            isValid = false;
            message += "Email Address cannot be blank.\n";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
            isValid = false;
            message += "Email Address is not in the correct format.\n";
        }

        if (!creditCardNumber) {
            isValid = false;
            message += "Credit Card Number cannot be blank.\n";
        } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(creditCardNumber)) {
            isValid = false;
            message += "Credit Card Number must be in the format XXXX XXXX XXXX XXXX.\n";
        }

        if (!cvc) {
            isValid = false;
            message += "CVC cannot be blank.\n";
        } else if (!/^\d{3}$/.test(cvc)) {
            isValid = false;
            message += "CVC must be exactly 3 numerical digits.\n";
        }

        if (isValid) {
            showAlert("Form submitted successfully!", "success");
            setTimeout(function() {
                window.location.href = "confirmation.html";
            }, 3000);
        } else {
            showAlert(message, "error");
        }

        clearFields();

        e.preventDefault();
    });

    function clearFields() {
        document.querySelector("#customerName").value = "";
        document.querySelector("#streetAddress").value = "";
        document.querySelector("#phoneNumber").value = "";
        document.querySelector("#emailAddress").value = "";
        document.querySelector("#creditCardNumber").value = "";
        document.querySelector("#cvc").value = "";
    }

    function showAlert(message, className) {
        let div = document.createElement("div");
        div.innerText = message;
        div.className = "alert " + className;
        document.querySelector(".container").appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 3000);
    }
});