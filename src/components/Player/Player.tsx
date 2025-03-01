import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PlayerController from "./PlayerController";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { IPlayer } from "./props";
import { VideoView } from "expo-video";

const Player = ({ video, setVideo }: IPlayer) => {
  const controller = PlayerController({ video, setVideo });

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={controller.player}
        contentFit="cover"
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={controller.handleSavingVideo}
        >
          <MaterialIcons name="save-alt" size={30} color={"#ffffff"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={
            controller.isPlaying
              ? controller.handleStopVideo
              : controller.handleStartVideo
          }
        >
          <MaterialIcons
            name={controller.isPlaying ? "pause" : "play-arrow"}
            size={40}
            color="#f00"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={controller.handleShareVideo}
        >
          <MaterialIcons name="ios-share" size={30} color={"#ffffff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;
