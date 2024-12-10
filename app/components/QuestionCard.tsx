import { View } from 'react-native'
import React, { FC, useState } from 'react'
import Option from './Option'
import { Question } from '@/data/questions'
import Card from './Card'

type QuestionCardProps = {
  question: Question
}


const QuestionCard:FC<QuestionCardProps> = ({question}) => {




  return (
    <Card title={question.title}>
      <View>
        {
          question.options.map((option) => (
            <Option key={option} option={option} />
          ))
        }
        </View>
    </Card>
  )
}

export default QuestionCard