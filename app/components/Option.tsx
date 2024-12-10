import { Pressable, StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
import { useQuiz } from '@/providers/QuizProvider'

type OptionProps = {
  option: string
}

const Option:FC<OptionProps> = ({option}) => {
  const {setSelectedOption, selectedOption} = useQuiz()
  const isSelected = selectedOption === option
  return (
    <Pressable 
    onPress={() => setSelectedOption(option)}
    style={[styles.container, isSelected && {backgroundColor: '#94cd94', borderColor: '#94cd94'}]}>
      <Text style={[styles.option, isSelected && {color: '#333'}]}
      >{option}</Text>
    </Pressable>
  )
}

export default Option

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 20,
        borderRadius: 200,
        marginBottom: 10
    },
    option:{
        fontSize: 17,
        color: '#fff',
        fontWeight: '500'
    }
})