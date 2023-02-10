import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View syle={styles.takePhotoContainer}>
            <Image source={{ uri: photo }} style={{ height: 50, width: 50 }} />
          </View>
        )}
        <TouchableOpacity style={styles.iconContainer} onPress={takePhoto}>
          <Ionicons name="ios-camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text style={styles.btnTitle}>Publish</Text>
        </TouchableOpacity>
      </View>
<View>
   <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="trash-outline" size={24} color="black" />
        </TouchableOpacity>
  
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    height: 240,
    marginTop: 32,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    borderColor: "#fff",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#fff",
    borderWidth: 1,
  },
  btn: {
    backgroundColor: "#f6f6f6",
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 100,
    marginTop: 32,
  },
  btnTitle: {
    color: "#BDBDBD",
    fontSize: 16,
  },
});

export default CreatePostsScreen;
