import React, { useEffect, useRef, useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

const CamController = () => {
  const cameraRef = useRef<CameraView>(null);
  const [status, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const [recording, setRecording] = useState<boolean>(false);

  const handleToggleFacing = () => {
    const newFacing = facing == "front" ? "back" : "front";
    setFacing(newFacing);
  };

  const handleStartRecording = () => {
    setRecording(true);
  };

  const handleStopRecording = () => {
    setRecording(false);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return {
    cameraRef,
    facing,
    recording,
    handleToggleFacing,
    handleStartRecording,
    handleStopRecording,
  };
};

export default CamController;
