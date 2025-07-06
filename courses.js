const courses = [
  {
    id: 'python',
    name: 'Python',
    quizzes: [
      {
        title: 'Quiz 1',
        questions: [
          {
            question: "What is the correct file extension for Python files?",
            options: [".py", ".txt", ".java", ".html"],
            correctAnswer: ".py"
          },
          {
            question: "What keyword is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            correctAnswer: "def"
          },
          {
            question: "How do you write a comment in Python?",
            options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
            correctAnswer: "# comment"
          },
          {
            question: "What is the output of print(2 + 3 * 2)?",
            options: ["10", "12", "8", "6"],
            correctAnswer: "8"
          },
          {
            question: "What data type is [1, 2, 3]?",
            options: ["Tuple", "List", "Set", "Dictionary"],
            correctAnswer: "List"
          }
        ]
      }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    quizzes: [
      {
        title: 'Quiz 1',
        questions: [
          {
            question: "What is the extension of Java bytecode files?",
            options: [".java", ".class", ".txt", ".jar"],
            correctAnswer: ".class"
          },
          {
            question: "What keyword is used to define a class?",
            options: ["define", "class", "struct", "object"],
            correctAnswer: "class"
          },
          {
            question: "What is the entry point method in Java?",
            options: ["start()", "init()", "main()", "run()"],
            correctAnswer: "main()"
          },
          {
            question: "How do you write a single-line comment in Java?",
            options: ["#", "//", "<!--", "/*"],
            correctAnswer: "//"
          },
          {
            question: "What does JVM stand for?",
            options: ["Java Virtual Machine", "Java Visual Model", "Joint VM", "Java Value Module"],
            correctAnswer: "Java Virtual Machine"
          }
        ]
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    quizzes: [
      {
        title: 'Quiz 1',
        questions: [
          {
            question: "What does HTTPS stand for?",
            options: ["HyperText Transfer Protocol Secure", "High Transfer Protocol Secure", "Hyper Terminal Text Secure", "HTTP Secure"],
            correctAnswer: "HyperText Transfer Protocol Secure"
          },
          {
            question: "What is phishing?",
            options: ["Fishing online", "Stealing passwords via fake emails", "Virus attack", "Hacking server logs"],
            correctAnswer: "Stealing passwords via fake emails"
          },
          {
            question: "What makes a strong password?",
            options: ["Only letters", "Your birthday", "Short and easy", "Mix of letters, numbers, and symbols"],
            correctAnswer: "Mix of letters, numbers, and symbols"
          },
          {
            question: "What does a firewall do?",
            options: ["Starts the computer", "Stores data", "Blocks unauthorized access", "Provides internet"],
            correctAnswer: "Blocks unauthorized access"
          },
          {
            question: "What is malware?",
            options: ["Security software", "Malicious software", "A programming language", "A strong password"],
            correctAnswer: "Malicious software"
          }
        ]
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI',
    quizzes: [
      {
        title: 'Quiz 1',
        questions: [
          {
            question: "What is AI?",
            options: ["Artificial Integration", "Artificial Intelligence", "Automated Input", "Advanced Innovation"],
            correctAnswer: "Artificial Intelligence"
          },
          {
            question: "What is the goal of AI?",
            options: ["Build robots", "Mimic human intelligence", "Create games", "Replace internet"],
            correctAnswer: "Mimic human intelligence"
          },
          {
            question: "What is an intelligent agent?",
            options: ["A software bug", "A computer virus", "An entity that perceives and acts", "A smartphone"],
            correctAnswer: "An entity that perceives and acts"
          },
          {
            question: "Machine learning is a subset of?",
            options: ["Cybersecurity", "AI", "Web Development", "Databases"],
            correctAnswer: "AI"
          },
          {
            question: "Which language is most used in AI?",
            options: ["C#", "Python", "Ruby", "PHP"],
            correctAnswer: "Python"
          }
        ]
      }
    ]
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    quizzes: [
      {
        title: 'Quiz 1',
        questions: [
          {
            question: "What is Machine Learning?",
            options: ["Manual coding", "Learning from data", "Learning to code", "Computer memory usage"],
            correctAnswer: "Learning from data"
          },
          {
            question: "What is the key element of ML?",
            options: ["Logic", "Data", "Algorithms", "Design"],
            correctAnswer: "Data"
          },
          {
            question: "What is a dataset?",
            options: ["Group of code", "A database", "Collection of data", "A loop"],
            correctAnswer: "Collection of data"
          },
          {
            question: "What is a training set?",
            options: ["Set of exam questions", "Testing environment", "Data used to train the model", "A program"],
            correctAnswer: "Data used to train the model"
          },
          {
            question: "What is the output of classification?",
            options: ["Graph", "Text file", "Category", "Score"],
            correctAnswer: "Category"
          }
        ]
      }
    ]
  }
];

export default courses;
