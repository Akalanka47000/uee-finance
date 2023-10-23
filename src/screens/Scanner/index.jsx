import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(false);

  const checkPermission = async () => {
    let cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission !== 'granted') cameraPermission = await Camera.requestCameraPermission();
    setHasPermission(cameraPermission === 'granted');
  };

  const devices = useCameraDevices();

  const device = devices.back;

  useEffect(() => {
    if (device) {
      global.loader.hide();
      checkPermission();
    } else {
      global.loader.show();
    }
  }, [device]);

  if (!device || !hasPermission) return <></>;

  return <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />;
};

export default Scanner;
