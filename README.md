# 🧪 Tech Quiz Test Suite

This project is a **MERN stack Tech Quiz application** enhanced with **Cypress testing** for both component and end-to-end functionality. Users can take a quiz of ten random questions and view their final score. This repository focuses on implementing automated testing to ensure the app works as intended.

---

## 📹 Walkthrough Video

🎥 [Click here to watch the walkthrough video](<https://app.screencastify.com/v3/watch/fmd92uLLzZ9oe8rnmiz4>)

The video demonstrates:

- Cypress component testing of the `Quiz` component
- Cypress end-to-end (E2E) testing of the quiz flow
- Use of the `npm run test` command to run both test suites from the command line

---

## 📋 User Story

```md
AS AN aspiring developer  
I WANT to take a tech quiz  
SO THAT I can test my knowledge and improve my skills  
```

---

## ✅ Acceptance Criteria

```md
GIVEN I am taking a tech quiz  
WHEN I click the start button  
THEN the quiz starts and I am presented with a question  
WHEN I answer a question  
THEN I am presented with another question  
WHEN all questions are answered  
THEN the quiz is over  
WHEN the quiz is over  
THEN I can view my score  
WHEN the quiz is over  
THEN I can start a new quiz  
```

---

## Technologies Used

- React
- TypeScript
- Express.js
- MongoDB
- Cypress (`@cypress/react18`, `@cypress/vite-dev-server`)
- Vite
- Bootstrap

---

## 🧱 Folder Structure

```
.
├── client/                 # React frontend
├── server/                 # Express backend
├── cypress/                # Cypress testing folder
│   ├── component/          # Component test
│   │   └── Quiz.cy.jsx
│   ├── e2e/                # End-to-end test
│   │   └── quiz.cy.js
│   └── fixtures/
│       └── questions.json
├── .env.example            # Rename to .env and configure variables
├── cypress.config.ts       # Cypress config file
├── package.json
└── README.md
```

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/iaplesnyc/Tech-quiz-test-suite
cd tech-quiz-test-suite
```

### 2. Install dependencies

```bash
npm run install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Then fill in the required values such as your MongoDB URI.

### 4. Start the app locally

```bash
npm run start:dev
```

The client should run at: `http://localhost:3001`

---

## 🔪 Running Tests

To run both component and end-to-end Cypress tests from the command line:

```bash
npm run test
```

---

## ✨ Features Tested

- ✅ Quiz component mounts and renders
- ✅ Start button triggers API call and displays a question
- ✅ User can answer questions one-by-one
- ✅ Score is shown after 10 questions
- ✅ Restart button reloads a fresh quiz

---

## 👩‍💻 Author

Created for Challenge 19 – **Testing: Tech Quiz Test Suite**  
By Iliana Pena

---