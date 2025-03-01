import { Video, VideoState } from "expo-av";
import { Dispatch, SetStateAction } from "react";

export interface IPlayer {
  video: string;
  setVideo: Dispatch<SetStateAction<string>>;
}
