import { IPlayer } from "./props";
import { useVideoPlayer, VideoPlayer } from "expo-video";
import { useEvent } from "expo";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { Alert } from "react-native";

const PlayerController = ({ video, setVideo }: IPlayer) => {
  const player = useVideoPlayer(video, (player: VideoPlayer) => {
    player.loop = true;
    player.play();
    player.pause();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  const handleStartVideo = () => {
    player.play();
  };

  const handleStopVideo = () => {
    player.pause();
  };

  const handleShareVideo = async () => {
    await Sharing.shareAsync(video, {});
  };

  const handleSavingVideo = () => {
    if (video) {
      Alert.alert(
        "Salvando video:",
        "Você tem certeza que deseja salvar este video?",
        [
          {
            text: "Excluir",
            onPress: () => {
              setVideo("");
            },
          },
          {
            text: "Salvar",
            onPress: async () => {
              await MediaLibrary.saveToLibraryAsync(video);
              setVideo("");
            },
          },
        ]
      );
    }
  };

  return {
    player,
    isPlaying,
    handleStartVideo,
    handleStopVideo,
    handleSavingVideo,
    handleShareVideo,
  };
};

export default PlayerController;
