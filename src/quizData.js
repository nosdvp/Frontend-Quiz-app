export const quizData = {

  

  HTML: [
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which tag creates a paragraph?",
      answers: ["<div>", "<span>", "<p>", "<section>"],
      correctAnswer: 2,
    },
    {
      question: "Which tag creates the largest heading?",
      answers: ["<heading>", "<h6>", "<h1>", "<head>"],
      correctAnswer: 2,
    },
    {
      question: "Which tag inserts an image?",
      answers: ["<image>", "<img>", "<picture>", "<src>"],
      correctAnswer: 1,
    },
    {
      question: "Which attribute specifies a link destination?",
      answers: ["src", "href", "alt", "link"],
      correctAnswer: 1,
    },
    {
      question: "Which element creates an unordered list?",
      answers: ["<ol>", "<ul>", "<li>", "<list>"],
      correctAnswer: 1,
    },
    {
      question: "What tag creates a line break?",
      answers: ["<lb>", "<break>", "<br>", "<hr>"],
      correctAnswer: 2,
    },
    {
      question: "Which tag is used for table rows?",
      answers: ["<td>", "<tr>", "<table>", "<th>"],
      correctAnswer: 1,
    },
    {
      question: "Which tag contains metadata?",
      answers: ["<body>", "<footer>", "<head>", "<meta>"],
      correctAnswer: 2,
    },
    {
      question: "Which HTML element is used for the main page content?",
      answers: ["<main>", "<section>", "<article>", "<body>"],
      correctAnswer: 0,
    },
  ],

  CSS: [
    {
      question: "What does CSS stand for?",
      answers: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which property changes text color?",
      answers: ["font-color", "text-color", "color", "background-color"],
      correctAnswer: 2,
    },
    {
      question: "Which property changes the background color?",
      answers: ["background", "background-color", "color", "bg-color"],
      correctAnswer: 1,
    },
    {
      question: "How do you select an element with id='box'?",
      answers: [".box", "#box", "*box", "box"],
      correctAnswer: 1,
    },
    {
      question: "How do you select elements with class='card'?",
      answers: ["#card", ".card", "card", "*card"],
      correctAnswer: 1,
    },
    {
      question: "Which property makes text bold?",
      answers: ["font-style", "font-weight", "text-weight", "bold"],
      correctAnswer: 1,
    },
    {
      question: "Which display value creates Flexbox?",
      answers: ["display:flex", "display:grid", "display:block", "display:inline"],
      correctAnswer: 0,
    },
    {
      question: "Which display value creates CSS Grid?",
      answers: ["display:flex", "display:grid", "display:block", "display:table"],
      correctAnswer: 1,
    },
    {
      question: "Which property rounds element corners?",
      answers: ["corner-radius", "border-round", "border-radius", "radius"],
      correctAnswer: 2,
    },
    {
      question: "Which property adds space inside an element?",
      answers: ["margin", "padding", "gap", "spacing"],
      correctAnswer: 1,
    },
  ],

  JavaScript: [
    {
      question: "Which keyword declares a constant?",
      answers: ["let", "const", "var", "static"],
      correctAnswer: 1,
    },
    {
      question: "Which method adds an item to the end of an array?",
      answers: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: 0,
    },
    {
      question: "Which method removes the last array element?",
      answers: ["push()", "shift()", "splice()", "pop()"],
      correctAnswer: 3,
    },
    {
      question: "Which operator checks strict equality?",
      answers: ["=", "==", "===", "!="],
      correctAnswer: 2,
    },
    {
      question: "What does typeof return?",
      answers: [
        "Object value",
        "Variable type",
        "Memory address",
        "Function result",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which loop runs while a condition is true?",
      answers: ["for", "foreach", "while", "repeat"],
      correctAnswer: 2,
    },
    {
      question: "Which method converts JSON into an object?",
      answers: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.convert()",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which method converts an object into JSON?",
      answers: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.convert()",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which method is used to iterate over arrays?",
      answers: ["map()", "find()", "every()", "includes()"],
      correctAnswer: 0,
    },
    {
      question: "How do you write a single-line comment?",
      answers: ["<!-- -->", "#", "//", "/* */"],
      correctAnswer: 2,
    },
  ],

  Accessibility: [
    {
      question: "Why is alt text important?",
      answers: [
        "Improves loading speed",
        "Helps screen readers",
        "Changes image size",
        "Adds animation",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which HTML element is best for navigation?",
      answers: ["<div>", "<menu>", "<nav>", "<section>"],
      correctAnswer: 2,
    },
    {
      question: "What does ARIA stand for?",
      answers: [
        "Accessible Rich Internet Applications",
        "Advanced Responsive Internet Access",
        "Application Resource Interface API",
        "Accessible Resource Integration Area",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which heading should appear only once per page?",
      answers: ["h2", "h4", "h1", "h6"],
      correctAnswer: 2,
    },
    {
      question: "Keyboard users usually navigate using which key?",
      answers: ["Shift", "Tab", "Alt", "Ctrl"],
      correctAnswer: 1,
    },
    {
      question: "Which attribute connects a label to an input?",
      answers: ["name", "for", "label", "id"],
      correctAnswer: 1,
    },
    {
      question: "Why should buttons have descriptive text?",
      answers: [
        "For styling",
        "For accessibility",
        "For performance",
        "For animations",
      ],
      correctAnswer: 1,
    },
    {
      question: "What color contrast helps readability?",
      answers: [
        "High contrast",
        "Low contrast",
        "No contrast",
        "Random colors",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which element is better than a clickable div?",
      answers: ["button", "span", "article", "section"],
      correctAnswer: 0,
    },
    {
      question: "Why should forms have labels?",
      answers: [
        "To increase file size",
        "To help screen readers",
        "To make CSS easier",
        "To improve animations",
      ],
      correctAnswer: 1,
    },
  ],
};