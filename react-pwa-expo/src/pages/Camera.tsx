import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';

const Camera: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <ExpoCamera style={{ flex: 1 }} />
    </View>
  );
};

export default Camera;
