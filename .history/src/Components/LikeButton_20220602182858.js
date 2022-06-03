import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
const LikeButton = () => {
  const [pressed, setPressed] = useState(true)

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        (pressed) ? setPressed(false) : setPressed(true)
      }}
    >
      {(pressed) ?
        <AntDesign name="hearto" style={styles.heart} />
        :
        <AntDesign name="heart" style={styles.heart} />
      }
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 70,
    height: 70,
    backgroundColor: '#ff8c00'
  }

})
export default LikeButton;