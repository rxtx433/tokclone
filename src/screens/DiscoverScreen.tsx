import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

const DiscoverScreen: React.FC = () => {
  const trendingHashtags = [
    { tag: 'fyp', views: '45.2B' },
    { tag: 'viral', views: '32.8B' },
    { tag: 'trending', views: '28.1B' },
    { tag: 'dance', views: '24.5B' },
    { tag: 'funny', views: '21.3B' },
    { tag: 'music', views: '19.7B' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.gray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={COLORS.gray}
        />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Trending Hashtags</Text>
        {trendingHashtags.map((item, index) => (
          <TouchableOpacity key={index} style={styles.hashtagItem}>
            <View style={styles.hashtagIcon}>
              <Ionicons name="trending-up" size={24} color={COLORS.white} />
            </View>
            <View style={styles.hashtagInfo}>
              <Text style={styles.hashtagText}>#{item.tag}</Text>
              <Text style={styles.viewsText}>{item.views} views</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    margin: 16,
    marginTop: 60,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: COLORS.white,
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  hashtagItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  hashtagIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  hashtagInfo: {
    flex: 1,
  },
  hashtagText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  viewsText: {
    color: COLORS.gray,
    fontSize: 14,
  },
});

export default DiscoverScreen;
