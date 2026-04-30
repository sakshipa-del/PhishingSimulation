import check_answer from 'view_quiz_score.py';
import display_score from 'view_quiz_score.py';
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is a common sign of a phishing email?",
    options: ["A familiar sender name", "Urgent language pressuring you to act fast", "A professional logo", "Proper spelling and grammar"],
  },
  {
    id: 2,
    question: "You get an email from 'support@paypa1.com' asking for your password. What do you do?",
    options: ["Reply with your password", "Click the link to verify your account", "Delete it and report it as phishing", "Forward it to a friend"],
  },
  {
    id: 3,
    question: "Which of these email subjects is most likely a phishing attempt?",
    options: ["Your weekly newsletter is here", "Meeting notes from today", "URGENT: Your account will be suspended in 24 hours", "Your package has shipped"],
  },
  {
    id: 4,
    question: "What should you do before clicking a link in an email?",
    options: ["Click it immediately if it looks fine", "Hover over it to check the real URL", "Reply to the sender asking if it's real", "Download any attachments first"],
  },
];

export default function Quiz({ onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
    } else {
      if (onSubmit) {
        onSubmit(answers);
      } // else {
      //   console.log(answers);
      // }
    }
  };

  return (
    <div>
      <h1>Phishing Quiz</h1>

      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>

          {q.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                onChange={() => handleSelect(q.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit} disabled={Object.keys(answers).length !== questions.length}>
        Submit
      </button>
      <p>
        Results: display_score(check_answers(name, value, setAnswers),4)
      </p>
      <button onClick={Quiz}>
        Retry Quiz
      </button>
    </div>
  );
}
