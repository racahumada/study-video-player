import { View, TouchableOpacity } from "react-native";
import React from "react";

import { CameraView } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import CamController from "./CamController";
import Player from "../Player/Player";

const Cam = () => {
  const controller = CamController();

  if (controller.video) {
    return <Player video={controller.video} setVideo={controller.setVideo} />;
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={controller.cameraRef}
        style={styles.camera}
        facing={controller.facing}
        mode="video"
        mute={true}
      >
        <View style={styles.bottomBar}>
          <View style={styles.buttonHide} />
          <TouchableOpacity
            style={styles.button}
            onPress={
              controller.recording
                ? controller.handleStopRecording
                : controller.handleStartRecording
            }
          >
            <MaterialIcons
              name={controller.recording ? "stop" : "videocam"}
              size={40}
              color="#f00"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={controller.handleToggleFacing}
          >
            <MaterialIcons name="flip-camera-ios" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default Cam;
