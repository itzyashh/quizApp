export type Question = {
    title: string;
    options: string[];
    correctAnswer: string;
    duration: number;
};

export default [
    {
        title: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
        duration: 10 // Easy question
    },
    {
        title: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        duration: 15 // Medium question
    },
    {
        title: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
        duration: 20 // Medium question
    },
    {
        title: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee",
        duration: 25 // Hard question
    },
    {
        title: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        duration: 10 // Easy question
    },
    {
        title: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au",
        duration: 15 // Medium question
    },
    {
        title: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
        duration: 20 // Medium question
    },
    {
        title: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
        correctAnswer: "Tokyo",
        duration: 10 // Easy question
    }
];