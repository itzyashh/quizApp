import questions, { Question } from "@/data/questions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type QuizContextType = {
    question?: Question,
    currentQuestion: number,
    onNextQuestion: () => void,
    selectedOption?: string | null
    setSelectedOption: (option: string) => void
    score?: number
    highScore?: number
}

const QuizContext = createContext<QuizContextType>({
    currentQuestion: 0,
    onNextQuestion: () => {},
    setSelectedOption: () => {}
})

export default function QuizProvider({ children }:PropsWithChildren){

  const [score, setScore] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [highScore, setHighScore] = useState<number>(0)

  const question = questions[currentQuestion];


    const isFinished = currentQuestion >= questions.length

    useEffect(() => {
        loadHighScore()
    }, [])


    useEffect(() => {
        if (score > highScore) {
            setHighScore(score)
            saveHighScore(score)
        }
    }, [isFinished])

    const saveHighScore = async (score: number) => {
      await AsyncStorage.setItem('highScore', score.toString())
    }

    const loadHighScore = async () => {
      const highScore = await AsyncStorage.getItem('highScore')
      setHighScore(parseInt(highScore ?? '0'))
    }

    const restart = () => {
        setCurrentQuestion(0)
        setSelectedOption(null)
        setScore(0)
    }

  const onNextQuestion = () => {
    if (isFinished) {
        restart()
        return
    }

    if (selectedOption === question?.correctAnswer) {
      setScore(prev => prev + 1)
    }

    setCurrentQuestion(prev => prev + 1)
  }

    return (<QuizContext.Provider value={{ question, currentQuestion, onNextQuestion, selectedOption, setSelectedOption, score, highScore}}>{children}</QuizContext.Provider>)
}

export const useQuiz = () => useContext(QuizContext)
