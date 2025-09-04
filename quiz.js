 const quizData = [
      {
        question: "1. What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyper Tool Multi Language",
        d: "None of the above",
        correct: "a"
      },
      {
        question: "2. Which CSS property controls text size?",
        a: "font-style",
        b: "text-size",
        c: "font-size",
        d: "text-style",
        correct: "c"
      },
      {
        question: "3. Inside which HTML element do we put JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>",
        correct: "c"
      },
      {
        question: "4. Which of the following is NOT a JavaScript data type?",
        a: "Number",
        b: "Boolean",
        c: "Float",
        d: "String",
        correct: "c"
      },
      {
        question: "5. Which tag is used to create a hyperlink in HTML?",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<url>",
        correct: "a"
      },
      {
        question: "6. Which symbol is used for single-line comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "<!-- -->",
        d: "#",
        correct: "a"
      },
      {
        question: "7. Which method is used to fetch data from an API in modern JavaScript?",
        a: "getData()",
        b: "fetch()",
        c: "request()",
        d: "httpGet()",
        correct: "b"
      }
    ];

    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');
    const resultEl = document.getElementById('result');
    const homeBtn = document.getElementById('home');
    const answersEls = document.querySelectorAll('.answer');

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
      deselectAnswers();
      const currentQuizData = quizData[currentQuiz];
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
      homeBtn.style.display = 'none';
    }

    function getSelected() {
      let answer = undefined;
      answersEls.forEach((el) => {
        if (el.checked) {
          answer = el.id;
        }
      });
      return answer;
    }

    function deselectAnswers() {
      answersEls.forEach((el) => el.checked = false);
    }

    submitBtn.addEventListener('click', () => {
      const answer = getSelected();
      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          resultEl.innerHTML = `🎉 You answered ${score}/${quizData.length} correctly!`;
          submitBtn.style.display = "none";
          homeBtn.style.display = 'block';

        }
      }
    });