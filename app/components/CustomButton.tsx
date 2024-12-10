// Desc: Custom button component

import React, { FC } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'


type CustomButtonProps = {
    title: string
    rightIcon?: React.ReactNode
} & PressableProps

const CustomButton:FC<CustomButtonProps> = ({title, rightIcon, ...PressableProps}) => {

  return (
    <Pressable
    {...PressableProps}
     style={styles.btn}>
    <Text style={styles.btnText}>{title}</Text>
    <View style={styles.iconStyle}>{rightIcon}</View>
  </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        flexDirection: "row",
        backgroundColor: "#4CAF50",
        padding: 20,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
      },
      btnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: .6,
      },
      iconStyle: {
        position: "absolute",
        right: 20,
      },
})