import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

const ProfileScreen: React.FC = () => {
  const user = {
    username: 'yourprofile',
    name: 'Your Name',
    avatar: 'https://via.placeholder.com/150/4A90E2/FFFFFF?text=YOU',
    followers: 1234,
    following: 567,
    likes: 45678,
    bio: '🎬 Content Creator | 📍 Location | ✨ Living my best life',
  };

  const userVideos = Array(12).fill(null).map((_, i) => ({
    id: i.toString(),
    thumbnail: `https://via.placeholder.com/150/${['FF6347', '32CD32', '9B59B6', 'F39C12', 'E91E63', '4A90E2'][i % 6]}/FFFFFF?text=Video+${i + 1}`,
    likes: Math.floor(Math.random() * 10000),
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.name}>{user.name}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.likes}</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>

        <Text style={styles.bio}>{user.bio}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="person-add-outline" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.videosContainer}>
        <View style={styles.videosGrid}>
          {userVideos.map((video) => (
            <TouchableOpacity key={video.id} style={styles.videoItem}>
              <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
              <View style={styles.videoOverlay}>
                <Ionicons name="play" size={16} color={COLORS.white} />
                <Text style={styles.videoLikes}>{video.likes}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  username: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  name: {
    color: COLORS.gray,
    fontSize: 16,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 32,
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: COLORS.gray,
    fontSize: 14,
  },
  bio: {
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  editButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  shareButton: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videosContainer: {
    paddingTop: 8,
  },
  videosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 2,
  },
  videoItem: {
    width: width / 3 - 4,
    height: width / 3 * 1.5,
    margin: 2,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  videoLikes: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ProfileScreen;
