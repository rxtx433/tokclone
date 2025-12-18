import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface VideoPlayerProps {
  videoUrl: string;
  isActive: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, isActive }) => {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isActive) {
      videoRef.current?.playAsync();
      setIsPlaying(true);
    } else {
      videoRef.current?.pauseAsync();
      setIsPlaying(false);
    }
  }, [isActive]);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current?.pauseAsync();
    } else {
      await videoRef.current?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleToggleMute = () => {
    videoRef.current?.setIsMutedAsync(!isMuted);
    setIsMuted(!isMuted);
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      videoRef.current?.replayAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.videoContainer} onPress={handlePlayPause}>
        <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          isLooping
          isMuted={isMuted}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />
        {!isPlaying && (
          <View style={styles.playIcon}>
            <Ionicons name="play" size={70} color="white" />
          </View>
        )}
      </Pressable>
      <TouchableOpacity style={styles.muteButton} onPress={handleToggleMute}>
        <Ionicons 
          name={isMuted ? "volume-mute" : "volume-high"} 
          size={24} 
          color="white" 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -35,
    marginTop: -35,
  },
  muteButton: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
});

export default VideoPlayer;
