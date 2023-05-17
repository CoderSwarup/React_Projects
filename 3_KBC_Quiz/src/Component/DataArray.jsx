const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "What does the CSS property 'display: none;' do?",
    answers: [
      {
        text: "Hides the element from the page.",
        correct: true,
      },
      {
        text: "Changes the font color to black.",
        correct: false,
      },
      {
        text: "Increases the element's width.",
        correct: false,
      },
      {
        text: "Adds a border around the element.",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "How do you add an event listener to an HTML element using JavaScript?",
    answers: [
      {
        text: "addEventListener()",
        correct: true,
      },
      {
        text: "attachEventListener()",
        correct: false,
      },
      {
        text: "addEvent()",
        correct: false,
      },
      {
        text: "listenForEvent()",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "What is the purpose of the 'map()' function in JavaScript?",
    answers: [
      {
        text: "To iterate over an array and transform its elements.",
        correct: true,
      },
      {
        text: "To create a new array by joining two arrays.",
        correct: false,
      },
      {
        text: "To remove elements from an array.",
        correct: false,
      },
      {
        text: "To sort the elements of an array in descending order.",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
    answers: [
      {
        text: "'null' represents the intentional absence of any object value.",
        correct: true,
      },
      {
        text: "'undefined' represents the absence of a value or an uninitialized variable.",
        correct: true,
      },
      {
        text: "'null' is used to indicate an error in JavaScript.",
        correct: false,
      },
      {
        text: "'undefined' is used to explicitly assign a variable with no value.",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "How do you declare a constant variable in JavaScript?",
    answers: [
      {
        text: "Using the 'const' keyword.",
        correct: true,
      },
      {
        text: "Using the 'let' keyword.",
        correct: false,
      },
      {
        text: "Using the 'var' keyword.",
        correct: false,
      },
      {
        text: "Using the 'constant' keyword.",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "What is the purpose of the 'fetch()' function in JavaScript?",
    answers: [
      {
        text: "To make asynchronous network requests and retrieve resources.",
        correct: true,
      },
      {
        text: "To create a new object instance based on a constructor function.",
        correct: false,
      },
      {
        text: "To remove an element from the DOM.",
        correct: false,
      },
      {
        text: "To add an event listener to a DOM element.",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Explain the concept of lexical scoping in JavaScript.",
    answers: [
      {
        text: "Variables are resolved based on their location in the source code, regardless of the runtime scope.",
        correct: true,
      },
      {
        text: "Variables are resolved based on their runtime scope, regardless of their location in the source code.",
        correct: false,
      },
      {
        text: "Variables are resolved based on their order of declaration in the source code.",
        correct: false,
      },
      {
        text: "Variables are resolved based on their proximity to the global scope.",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question:
      "Explain the concept of event bubbling and event capturing in JavaScript.",
    answers: [
      {
        text: "Event bubbling is the process of propagating an event from the target element to its parent elements, while event capturing is the reverse process.",
        correct: true,
      },
      {
        text: "Event capturing is the process of propagating an event from the target element to its child elements, while event bubbling is the reverse process.",
        correct: false,
      },
      {
        text: "Event bubbling and event capturing are the same processes and can be used interchangeably.",
        correct: false,
      },
      {
        text: "Event bubbling and event capturing are deprecated features in modern JavaScript.",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question:
      "What is the difference between pass-by-value and pass-by-reference in C++?",
    answers: [
      {
        text: "Pass-by-value makes a copy of the argument, while pass-by-reference allows direct manipulation of the argument.",
        correct: true,
      },
      {
        text: "Pass-by-value only works for primitive data types, while pass-by-reference works for all data types.",
        correct: false,
      },
      {
        text: "Pass-by-value requires the use of pointers, while pass-by-reference uses references.",
        correct: false,
      },
      {
        text: "Pass-by-value is faster than pass-by-reference.",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question:
      "What is a constructor in C++ and how is it different from a regular member function?",
    answers: [
      {
        text: "A constructor is a special member function that is automatically called when an object is created, while a regular member function is called explicitly by the programmer.",
        correct: true,
      },
      {
        text: "A constructor is used to destroy objects, while a regular member function is used to create objects.",
        correct: false,
      },
      {
        text: "A constructor can have any return type, while a regular member function must have a void return type.",
        correct: false,
      },
      {
        text: "A constructor can only be defined in the global scope, while a regular member function can be defined in any scope.",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "What is the difference between a list and a tuple in Python?",
    answers: [
      {
        text: "A list is mutable, meaning its elements can be changed, while a tuple is immutable, meaning its elements cannot be changed.",
        correct: true,
      },
      {
        text: "A list can only contain elements of the same data type, while a tuple can contain elements of different data types.",
        correct: false,
      },
      {
        text: "A list has a fixed size, while a tuple can grow or shrink dynamically.",
        correct: false,
      },
      {
        text: "A list is ordered, while a tuple is unordered.",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "What is the purpose of the 'range()' function in Python?",
    answers: [
      {
        text: "To generate a sequence of numbers that can be iterated over.",
        correct: true,
      },
      {
        text: "To calculate the factorial of a number.",
        correct: false,
      },
      {
        text: "To convert a string to uppercase.",
        correct: false,
      },
      {
        text: "To round a floating-point number to the nearest integer.",
        correct: false,
      },
    ],
  },
];
export default data;
