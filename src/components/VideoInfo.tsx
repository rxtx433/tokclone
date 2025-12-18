import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video as VideoType } from '../types';
import { COLORS } from '../constants/colors';

interface VideoInfoProps {
  video: VideoType;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ video }) => {
  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.username}>@{video.username}</Text>
        <Text style={styles.description}>{video.description}</Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={{ uri: video.userAvatar }} style={styles.avatar} />
          <View style={styles.followButton}>
            <Ionicons name="add" size={16} color={COLORS.white} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" size={35} color={COLORS.white} />
          <Text style={styles.actionText}>{formatCount(video.likes)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble" size={32} color={COLORS.white} />
          <Text style={styles.actionText}>{formatCount(video.comments)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-redo" size={32} color={COLORS.white} />
          <Text style={styles.actionText}>{formatCount(video.shares)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 80,
    paddingHorizontal: 16,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: 60,
  },
  username: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 20,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: COLORS.pink,
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default VideoInfo;
