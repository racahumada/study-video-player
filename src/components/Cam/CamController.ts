import React, { useEffect, useRef, useState } from "react";
import {
  CameraView,
  CameraType,
  useCameraPermissions,
  useMicrophonePermissions,
} from "expo-camera";
import { usePermissions } from "expo-media-library";

const CamController = () => {
  const [statusCam, requestPermissionCam] = useCameraPermissions();
  const [statusMicrophone, requestPermissionMicrophone] =
    useMicrophonePermissions();
  const [statusLibrary, requestPermissionLibrary] = usePermissions();

  const cameraRef = useRef<CameraView>(null);

  const [facing, setFacing] = useState<CameraType>("back");
  const [recording, setRecording] = useState<boolean>(false);
  const [video, setVideo] = useState<string>("");

  const handleToggleFacing = () => {
    const newFacing = facing == "front" ? "back" : "front";
    setFacing(newFacing);
  };

  const handleStartRecording = async () => {
    setRecording(true);
    try {
      if (cameraRef) {
        let { uri }: any = await cameraRef?.current?.recordAsync({
          codec: "jpeg",
        });
        setVideo(uri);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleStopRecording = () => {
    setRecording(false);
    if (cameraRef && cameraRef?.current) cameraRef.current?.stopRecording();
  };

  useEffect(() => {
    requestPermissionCam();
    requestPermissionMicrophone();
    requestPermissionLibrary();
  }, []);

  return {
    cameraRef,
    video,
    setVideo,
    facing,
    recording,
    handleToggleFacing,
    handleStartRecording,
    handleStopRecording,
  };
};

export default CamController;
