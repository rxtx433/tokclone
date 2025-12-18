import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import { SAMPLE_VIDEOS } from '../data/videos';
import { Video } from '../types';
import VideoPlayer from '../components/VideoPlayer';
import VideoInfo from '../components/VideoInfo';

const { height } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const viewabilityConfig = useRef<ViewabilityConfig>({
    itemVisiblePercentThreshold: 50,
  }).current;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setActiveVideoIndex(viewableItems[0].index);
      }
    }
  ).current;

  const renderItem = useCallback(
    ({ item, index }: { item: Video; index: number }) => (
      <View style={styles.videoContainer}>
        <VideoPlayer
          videoUrl={item.videoUrl}
          isActive={index === activeVideoIndex}
        />
        <VideoInfo video={item} />
      </View>
    ),
    [activeVideoIndex]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={SAMPLE_VIDEOS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        removeClippedSubviews
        maxToRenderPerBatch={2}
        windowSize={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    height,
    width: '100%',
  },
});

export default HomeScreen;
