import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

type CardProps = {
    title?: string
    children: React.ReactNode
    headerShown?: boolean
    }

const Card:FC<CardProps> = ({title, children, headerShown=true}) => {
  return (
    <View style={styles.card}>
      {headerShown && <Text style={styles.title}>{title}</Text>}
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 20,
        paddingVertical: 40,
        gap: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    title:{
        fontSize: 24,
        color: '#fff',
        fontWeight: '500'
    }
})