const firstNameTextbox = {
    inputElement: document.querySelector("#first-name-input"),
    inputHintElement: document.querySelector("#first-name-input-hint"),
    isError: false,
    getHint() {
        if (this.isError) {
            return "first name " + this.inputHintElement.textContent;
        }
        return "";
    },
    checkValid() {
        const isEmpty = this.inputElement.value === "";
        if (isEmpty) {
            this.inputElement.setAttribute("aria-invalid", "true");
            this.inputHintElement.textContent = "Can't be empty";
            this.isError = true;
        }
        return !isEmpty;
    },
    init() {
        this.inputElement.addEventListener("input", (e) => {
            if (this.isError) {
                this.inputElement.setAttribute("aria-invalid", "false");
                this.inputHintElement.textContent = "";
                this.isError = false;
            }
        });
    },
};

const lastNameTextbox = {
    inputElement: document.querySelector("#last-name-input"),
    inputHintElement: document.querySelector("#last-name-input-hint"),
    isError: false,
    getHint() {
        if (this.isError) {
            return "last name " + this.inputHintElement.textContent;
        }
        return "";
    },
    checkValid() {
        const isEmpty = this.inputElement.value === "";
        if (isEmpty) {
            this.inputElement.setAttribute("aria-invalid", "true");
            this.inputHintElement.textContent = "Can't be empty";
            this.isError = true;
        }
        return !isEmpty;
    },
    init() {
        this.inputElement.addEventListener("input", (e) => {
            if (this.isError) {
                this.inputElement.setAttribute("aria-invalid", "false");
                this.inputHintElement.textContent = "";
                this.isError = false;
            }
        });
    },
};

const emailTextbox = {
    inputElement: document.querySelector("#email-input"),
    inputHintElement: document.querySelector("#email-input-hint"),
    isError: false,
    getHint() {
        if (this.isError) {
            return "email " + this.inputHintElement.textContent;
        }
        return "";
    },
    checkValid() {
        const isEmpty = this.inputElement.value === "";

        if (isEmpty) {
            this.inputElement.setAttribute("aria-invalid", "true");
            this.inputHintElement.textContent = "Can't be empty";
            this.isError = true;

            return !isEmpty;
        }

        const isCorrectEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.inputElement.value);

        if (!isCorrectEmail) {
            this.inputElement.setAttribute("aria-invalid", "true");
            this.inputHintElement.textContent = "Please provide a valid email";
            this.isError = true;
            return isCorrectEmail;
        }

        return true;
    },
    init() {
        this.inputElement.addEventListener("input", (e) => {
            if (this.isError) {
                this.inputElement.setAttribute("aria-invalid", "false");
                this.inputHintElement.textContent = "";
                this.isError = false;
            }
        });
    },
};

const passwordTextbox = {
    inputElement: document.querySelector("#password-input"),
    inputHintElement: document.querySelector("#password-input-hint"),
    isError: false,
    getHint() {
        if (this.isError) {
            return "password " + this.inputHintElement.textContent;
        }
        return "";
    },
    checkValid() {
        const isEmpty = this.inputElement.value === "";
        if (isEmpty) {
            this.inputElement.setAttribute("aria-invalid", "true");
            this.inputHintElement.textContent = "Can't be empty";
            this.isError = true;
        }
        return !isEmpty;
    },
    init() {
        this.inputElement.addEventListener("input", (e) => {
            if (this.isError) {
                this.inputElement.setAttribute("aria-invalid", "false");
                this.inputHintElement.textContent = "";
                this.isError = false;
            }
        });
    },
};

const signUpForm = {
    formElement: document.querySelector(".signup__form"),
    formMessageElement: document.querySelector("#form-messages"),
    init() {
        firstNameTextbox.init();
        lastNameTextbox.init();
        emailTextbox.init();
        passwordTextbox.init();

        this.formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("submit");

            const valid = [
                firstNameTextbox.checkValid(),
                lastNameTextbox.checkValid(),
                emailTextbox.checkValid(),
                passwordTextbox.checkValid(),
            ].every((v) => v);

            const messages = [
                firstNameTextbox.getHint(),
                lastNameTextbox.getHint(),
                emailTextbox.getHint(),
                passwordTextbox.getHint(),
            ].join(", ");

            this.formMessageElement.textContent = messages;

            if (!valid) return;

            alert("OK");
        });
    },
};

signUpForm.init();
