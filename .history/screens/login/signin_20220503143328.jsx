import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";

function signin(props) {
  return (
    <ImageBackground
      source={require("./Bg.jpg")}
      style={styles.backgroundimage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{
            height: 150,
            width: 150,
            alignSelf: "center",
            borderRadius: 10,
          }}
          source={require("./logo.jpg")}
        />

        <Text style={styles.title}>Bắt đầu chuyến phiêu lưu</Text>
        <TextInput
          placeholder="Tài khoản"
          placeholderTextColor="lightblue"
          style={styles.input}
          onChangeText={() => {}}
        />
        <TextInput
          placeholder="Mật khẩu"
          placeholderTextColor="lightblue"
          style={styles.input}
          onChangeText={() => {}}
        />
        <TouchableOpacity>
          <View>
            <Text style={styles.button}>Đăng      nhập</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button2}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    padding: 30,
    fontWeight: "bold",
    fontSize: 20,
    color: "lightblue",
  },
  input: {
    marginTop: 2,
    fontSize: 18,
    borderWidth: 2,
    padding: 12,
    width: "70%",
    borderRadius: 50,
  },

  button: {
    fontSize: 25,
    color: "lightblue",
    marginTop: 8,
    borderRadius: 100,
    padding: 14,
    textAlign: "center",
  },
  button2: {
    marginTop: 20,
    fontSize: 15,
    color: "lightblue",
  },
});

export default signin;
