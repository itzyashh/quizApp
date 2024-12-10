import { StyleSheet, Text, View } from "react-native";
import QuestionCard from "./components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import questions from "@/data/questions";
import CustomButton from "./components/CustomButton";
import { useEffect } from "react";
import Card from "./components/Card";
import { useQuiz } from "@/providers/QuizProvider";
import FinishQuiz from "./components/FinishQuiz";
import useTimer from "./hooks/useTimer";


export default function Index() {

  const {currentQuestion,question, onNextQuestion} = useQuiz()
  const {timer, startTimer} = useTimer(question?.duration ?? 0)

  useEffect(() => {
    if(!question) return
    const clear = startTimer()
    return () => clear()
  }, [question])

  useEffect(() => {
    if(timer === 0){
      onNextQuestion()
    }
  }, [timer])

  return (
    <SafeAreaView style={styles.page}>
    <View style={styles.container}>

      {/* Header */}
      <View>
  {question && <Text style={styles.title}>{`Question ${currentQuestion+1}/${questions.length}`}</Text>}
      </View>

      {/* Body */}
      <View>
    { question ?
      <>
      <QuestionCard question={question} />
      <Text style={styles.timer}>{timer} secs</Text>
      </>
      :
      <Card
        headerShown={false}
       >
        <FinishQuiz />
      </Card>
    }
      </View>
      {/* Footer */}
      <CustomButton
      onPress={() => onNextQuestion()}
      onLongPress={() => console.log("Long press")}
       rightIcon={<FontAwesome6 name="arrow-right-long" size={24} color="#fff" /> }
       title={question ? "Next" : "Restart"}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#212121",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#212121",
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
  timer: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
})
