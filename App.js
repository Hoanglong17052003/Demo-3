import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/image/fb.jpg")}
        style={{
          width: "100%",
          height: "35%",
          resizeMode: "stretch",
        }}
      />
      <StatusBar style="light" />
      {/* Background Facebook */}
      {/* TextInput */}
      <View
        style={{
          padding: 15,
          position: "relative",
          height: "58%",
          paddingTop: 30,
        }}
      >
        <View style={{ gap: 20 }}>
          <View>
            <TextInput
              placeholder="Enter your Email & Phone Number"
              style={styles.TextInputBackground}
            />
            <TextInput
              placeholder="Password"
              style={styles.TextInputBackground}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#3b5998",
              padding: 10,
              borderRadius: 5,
              opacity: 0.8,
            }}
          >
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "800" }}
            >
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: "#3b5998",
                textAlign: "center",
                paddingTop: 10,
                fontWeight: "600",
              }}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ position: "absolute", bottom: 0, width: "100%", left: 17 }}
        >
          {/* Chưa biết làm */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 15,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 100,
                height: 0.6,
                borderWidth: 0.2,
                borderColor: "gray",
                opacity: 0.5,
              }}
            ></View>
            <Text style={{ fontSize: 14, fontWeight: "500" }}> HOẶC </Text>
            <View
              style={{
                width: 100,
                height: 0.6,
                borderWidth: 0.2,
                borderColor: "gray",
                opacity: 0.5,
              }}
            ></View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 5,
              opacity: 0.8,
              borderColor: "#3b5998",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                color: "#3b5998",
                textAlign: "center",
                fontWeight: "800",
              }}
            >
              Tạo tài khoản mới
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  TextInputBackground: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: "gray",
  },
});
