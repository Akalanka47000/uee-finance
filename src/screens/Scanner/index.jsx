import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const Scanner = () => {
  const checkPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission !== 'granted') await Camera.requestCameraPermission();
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

  if (!device) return <></>;

  return <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />;
};

export default Scanner;
