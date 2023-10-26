import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useSelector } from 'react-redux';

const Scanner = () => {
  const paid = useSelector((state) => state.data.subscription.paid);

  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(false);

  const checkPermission = async () => {
    let cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission !== 'granted') cameraPermission = await Camera.requestCameraPermission();
    setHasPermission(cameraPermission === 'granted');
  };

  const devices = useCameraDevices();

  const device = devices.back;

  useEffect(() => {
    if (paid === false) {
      global.alert.warn('Please upgrade to premium to use this feature');
      setTimeout(() => navigation.goBack(), 150);
    }
  }, [paid]);

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
