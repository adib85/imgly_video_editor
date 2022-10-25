import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  VESDK,
  VideoEditorModal,
  Configuration,
} from 'react-native-videoeditorsdk';

export default function App() {
  const showVideo = async () => {
    const video = require('./video2.mp4');

    // Open the video editor and handle the export as well as any occuring errors.
    const result = await VESDK.openEditor(video);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          showVideo();
        }}
      >
        <Text>Load video</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

      {/*
      <VideoEditorModal visible={true} video={require('./video1.mp4')} />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
