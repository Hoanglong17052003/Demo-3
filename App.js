import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Fomat 1 */}
      <View style={styles.ContainerView1}>
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
          Xin chào!
        </Text>
        <Text style={{ color: "#C0C0C0", fontSize: 20, paddingTop: 5 }}>
          Hoàng Long
        </Text>
        <Text style={{ color: "#C0C0C0", fontSize: 14 }}>0942389857</Text>
      </View>
      {/* Format 2 */}
      <View style={{ gap: 18 }}>
        <Entypo
          name="lock"
          size={18}
          color="gray"
          style={{ position: "absolute", top: 18, left: 18, zIndex: 10 }}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập mật khẩu"
          keyboardType="numeric"
          secureTextEntry={true}
          autoFocus={true}
        />
        <TouchableOpacity style={styles.SignInButton}>
          <Text style={styles.TextTouch}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      {/* Format 3 */}
      <View style={styles.ContainerView3}>
        <TouchableOpacity>
          <Text style={{ ...TEXT }}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ ...TEXT }}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const TEXT = {
  fontSize: 15,
  color: "#fff",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#e13e77",
    gap: 30,
    padding: 30,
  },
  ContainerView1: {
    width: "100%",
    alignItems: "center",
    paddingTop: 70,
    gap: 15,
  },
  TextInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 30,
    textAlign: "center",
  },
  SignInButton: {
    backgroundColor: "#5b5c5e",
    borderRadius: 30,
    opacity: 0.7,
  },
  TextTouch: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 14,
  },
  ContainerView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
