# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Project overview](#rocket-project-overview)
- [Development workflow](#boat-development-workflow)
- [Working in this repository](#astronaut-working-in-this-repository)
- [License](#page_with_curl-license)

## :rocket: Project overview

### Challenge equirements

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Implemented features

Functional

- [x] Built textbox component that
  - [x] Validate basic specifications (required, length) and can be provided with custom validators
  - [x] Show every error when users blur input (from basic specifications to custom validators)
  - [x] Aggregate all invalid fields and notify screen readers

Accessibility

- [x] Responsive accross different screen sizes
- [x] Added custom indicator when interactive elements focused

### Preview

![](./.docs/preview.png)

## :boat: Development workflow

### Approach

Developed with mobile-first workflow, followed with [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

### Built with

| Tool          | Note                               |
| ------------- | ---------------------------------- |
| `HTML`        | Standard markup language           |
| `CSS`         | Vanilla CSS                        |
| `JavsScript`  | Without any library                |
| `BrowserSync` | Development server, live reloading |

## :astronaut: Working in this repository

### Presequisites

Having these tools installed:

- Git (prefer lastest LTS version)
- NodeJS (prefer latest LTS version)

### Clone this project to your machine

Open new terminal, run the following command:

```
git clone https://github.com/haquanq/fm-intro-component-with-signup.git
```

Then, run `npm install` to install all dependencies.

```
npm install
```

## Development workflow

In terminal, run `npm run dev` to start development server:

```
npm run dev
```

## :page_with_curl: License

This project follows [MIT License](./LICENSE). **DO NOT** use this project as your solution on [Frontend mentor](https://www.frontendmentor.io/solutions).
