const form = document.getElementById("form-AB");
const inputA = document.getElementById("A");
const inputB = document.getElementById("B");
const successMessageContainer = document.querySelector(".sucessMessage");
const errorMessageContainer = document.querySelector(".errorMessage");

function validNumber(valueA, valueB) {
    return parseFloat(valueA) < parseFloat(valueB);
}

function validateInputs() {
    const valueA = inputA.value;
    const valueB = inputB.value;
    return validNumber(valueA, valueB);
}

function showSuccessMessage(valueA, valueB) {
    const successMessage = `Sucesso, valor de <b>${valueB}</b> é maior que ${valueA}`;
    successMessageContainer.innerHTML = successMessage;
    successMessageContainer.style.display = 'block';
    errorMessageContainer.style.display = 'none';
}

function showError() {
    inputA.classList.add('error');
    inputB.classList.add('error');
    errorMessageContainer.style.display = 'block';
    successMessageContainer.style.display = 'none';
}

function hideError() {
    inputA.classList.remove('error');
    inputB.classList.remove('error');
    errorMessageContainer.style.display = 'none';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateInputs()) {
        showSuccessMessage(inputA.value, inputB.value);
        inputA.value = '';
        inputB.value = '';
        hideError();
    } else {
        showError();
    }
});

[inputA, inputB].forEach(input => {
    input.addEventListener('input', function() {
        if (validateInputs()) {
            hideError();
        } else {
            showError();
        }
    });
});
