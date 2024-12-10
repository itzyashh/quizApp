import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect, useRef } from 'react'
import questions from '@/data/questions'
import { useQuiz } from '@/providers/QuizProvider'
import LottieView from 'lottie-react-native'

const FinishQuiz = memo(() => {

    const { score, highScore } = useQuiz()
    const animation = useRef<LottieView>(null);
    useEffect(() => {
      setTimeout(() => {
        animation.current?.play();
      }, 0);
    }, [])

  return (
    <>
    <Image source={require("../../assets/images/trophy.png")} style={styles.trophy} />
    <View style={styles.textContainer}>

    <Text style={styles.title}>Congratulations!</Text>
    <Text style={styles.subtitle}>{`You scored ${score} out of ${questions.length}`}</Text>
    <Text style={styles.subtitle}>{`HighScore - ${highScore}`}</Text>
    </View>
    <LottieView
    ref={animation}
    source={require('../../assets/lottie/confetti.json')}
    style={styles.confetti}
    loop={false}
    />
    </>
  )
})


export default FinishQuiz

const styles = StyleSheet.create({
    trophy: {
        width: 200,
        height: 200,
        alignSelf: "center",
      },
      textContainer: {
        alignItems: "center",
        marginTop: 20,
        gap: 10,
      },
      title: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "500",
      },
      subtitle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "400",
      },
      confetti: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",

      },
})