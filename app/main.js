const createTextbox = (id, props) => {
    const wrapper = document.querySelector(".textbox--" + id);
    const input = wrapper.querySelector("[data-textbox-input]");
    const hint = wrapper.querySelector("[data-textbox-hint]");
    const label = wrapper.querySelector("[data-textbox-label]");

    if (props.maxLength) input.maxLength = props.maxLength;
    if (props.minLength) input.minLength = props.minLength;
    if (props.required) {
        input.required = props.required;
        label.textContent += " *";
    }

    const validate = () => {
        let errorMessage = "";
        if (input.validity.valueMissing) {
            errorMessage = "PLease fill out this field.";
        } else if (input.validity.tooShort || input.validity.tooLong) {
            errorMessage = `Must be beetween ${props.minLength} and ${props.maxLength} characters.`;
        } else if (props.customValidator) {
            errorMessage = props.customValidator(input.value);
        }

        if (errorMessage !== "") {
            input.setAttribute("aria-invalid", "true");
            hint.textContent = errorMessage;
            return false;
        }

        input.setAttribute("aria-invalid", "false");
        hint.textContent = "";
        return true;
    };

    const getName = () => {
        return label.textContent;
    };

    const focus = () => {
        input.focus();
    };

    input.addEventListener("blur", () => validate());

    return { validate, getName, focus };
};

const firstNameTextbox = createTextbox("first-name", {
    minLength: 2,
    maxLength: 50,
    required: true,
    customValidator: (value) => {
        const textAndSpacesOnlyPattern = /^[a-zA-Z\s]*$/;
        if (!textAndSpacesOnlyPattern.test(value)) return "Please use letters only (a-z, A-Z).";
        return "";
    },
});

const lasttNameTextbox = createTextbox("last-name", {
    minLength: 2,
    maxLength: 50,
    required: true,
    customValidator: (value) => {
        const textAndSpacesOnlyPattern = /^[a-zA-Z\s]*$/;
        if (!textAndSpacesOnlyPattern.test(value)) return "Please use letters only (a-z, A-Z).";
        return "";
    },
});

const emailTextbox = createTextbox("email", {
    required: true,
    customValidator: (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) return "Please use a valid email address.";
        return "";
    },
});

const passwordTextbox = createTextbox("password", {
    minLength: 8,
    maxLength: 30,
    required: true,
});

const form = document.querySelector(".signup__form");
const globalErrorHint = document.querySelector("#form-messages");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errorFields = [];

    if (firstNameTextbox.validate() === false) {
        errorFields.push(firstNameTextbox);
    }
    if (lasttNameTextbox.validate() === false) {
        errorFields.push(lasttNameTextbox);
    }
    if (emailTextbox.validate() === false) {
        errorFields.push(emailTextbox);
    }
    if (passwordTextbox.validate() === false) {
        errorFields.push(passwordTextbox);
    }

    if (errorFields.length > 0) {
        let message = "Form submission failed. 3 errors found. Please check your ";
        errorFields.forEach((field) => (message += field.getName() + ", "));
        globalErrorHint.textContent = message;
        errorFields[0].focus();
        errorFields = [];
    }
});
