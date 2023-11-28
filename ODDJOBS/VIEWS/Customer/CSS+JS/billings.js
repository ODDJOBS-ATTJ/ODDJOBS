function openCreditCardForm() {
    document.getElementById("credit-card").style.display = "block";
}

function closeCreditCardForm() {
    document.getElementById("credit-card").style.display = "none";
}

function openPayPalForm() {
    // Close the credit card form before opening the PayPal form
    closeCreditCardForm();
    // Add PayPal-specific logic here if needed
    // For now, let's just show an alert
    alert("PayPal form opened");
}

function closePayPalForm() {
    // Add PayPal-specific logic here if needed
    // For now, let's just show an alert
    alert("PayPal form closed");
}

function openMethodForm() {
    document.getElementById("methods").style.display = "block";
}

function closeMethodForm() {
    document.getElementById("methods").style.display = "none";
}

function addCreditCardToRightBox(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the credit card form
    const cardNumber = document.getElementById("cardNumber").value;
    const expirationDate = document.getElementById("expirationDate").value;

    // Create a new element to represent the credit card in the right box
    const newCreditCardElement = document.createElement("div");
    newCreditCardElement.classList.add("existing-payment-methods");

    newCreditCardElement.innerHTML = `
        <div class="payment-methods-card-child-col">
            <div class="card-with-icon">
                <img src="icons/credit-card.png">
            </div>
        </div>
        <div class="payment-methods-card-child-col">
            <div class="card-description">
                <h1>Card ending in ${cardNumber.slice(-4)}</h1>
                <h2>Exp. date ${expirationDate}</h2>
            </div>
        </div>
        <div class="payment-methods-card-child-col">
            <div class="card-options">
                <div class="payment-methods-card-child-col">
                    <button class="default-button">Make Default</button>
                </div>
                <div class="payment-methods-card-child-col">
                    <button><img src="icons/trash-bin.png" height="25px"></button>
                </div>
            </div>
        </div>
    `;

    // Append the new credit card element to the right box
    document.querySelector(".rightbox").appendChild(newCreditCardElement);

    // Close the credit card form
    closeCreditCardForm();
}

// Update your existing "Save" button click event to call this function
document
    .getElementById("save")
    .addEventListener("click", addCreditCardToRightBox);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cardNumber").addEventListener("input", function () {
        formatCreditCardNumber(this);
    });

    document
        .getElementById("expirationDate")
        .addEventListener("input", function () {
            formatExpirationDate(this);
        });

    document.getElementById("save").addEventListener("click", function (event) {
        event.preventDefault();

        addCreditCardToRightBox();
    });
});

// Function to format credit card number
function formatCreditCardNumber(input) {
    const numericValue = input.value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 16);
    const formattedValue = limitedValue.replace(/(\d{4})/g, "$1 ").trim();

    input.value = formattedValue;
}

// Function to format expiration date
function formatExpirationDate(input) {
    const numericValue = input.value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 4);
    const formattedValue = limitedValue
        .replace(/(\d{2})(\d{0,2})/, "$1 / $2")
        .trim();

    input.value = formattedValue;
}

// Function to format security code
function formatSecurityCode(input) {
    const numericValue = input.value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 3);

    input.value = limitedValue;
}

document.getElementById("securityCode").addEventListener("input", function () {
    formatSecurityCode(this);
});

// Function to format names
function formatNames(firstNameInput, lastNameInput) {
    const fullName = firstNameInput.value + lastNameInput.value;
    const alphaOnly = fullName.replace(/[0-9]/g, "");
    const limitedFullName = alphaOnly.slice(0, 21);

    const splitIndex = Math.min(
        limitedFullName.length,
        firstNameInput.value.length
    );
    firstNameInput.value = limitedFullName.slice(0, splitIndex);
    lastNameInput.value = limitedFullName.slice(splitIndex);
}

document.getElementById("firstName").addEventListener("input", function () {
    formatNames(this, document.getElementById("lastName"));
});

document.getElementById("lastName").addEventListener("input", function () {
    formatNames(document.getElementById("firstName"), this);
});

//MAKE DEFAULT AND TRASH BUTTON
document.addEventListener("DOMContentLoaded", function () {
    function handleNewCard(paymentMethodElement) {
        const makeDefaultButton =
            paymentMethodElement.querySelector(".default-button");
        makeDefaultButton.addEventListener("click", function () {
            makeDefault(this);
        });

        const trashIcon = paymentMethodElement.querySelector(
            ".payment-methods-card-child-col button img"
        );
        trashIcon.addEventListener("click", function () {
            paymentMethodElement.remove();
        });
    }

    function makeDefault(button) {
        const paymentMethodElement = button.closest(".existing-payment-methods");

        const defaultButton = paymentMethodElement.querySelector(".default-button");
        defaultButton.innerText = "Default";

        defaultButton.disabled = true;
    }

    document.getElementById("save").addEventListener("click", function () {
        const newlyAddedCard = document.querySelector(
            ".rightbox .existing-payment-methods:last-child"
        );

        handleNewCard(newlyAddedCard);

        const defaultButton = newlyAddedCard.querySelector(".default-button");
        defaultButton.innerText = "Make Default";
        defaultButton.disabled = false;
    });

    document.querySelectorAll(".default-button").forEach(function (button) {
        button.addEventListener("click", function () {
            makeDefault(this);
        });
    });

    document
        .querySelectorAll(".payment-methods-card-child-col button img")
        .forEach(function (trashIcon) {
            trashIcon.addEventListener("click", function () {
                const paymentMethodElement = this.closest(".existing-payment-methods");
                paymentMethodElement.remove();
            });
        });
});

//CLOSE FORMS BY DEFAULT
closeMethodForm();
closeCreditCardForm();
