import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const InboxScreen: React.FC = () => {
  const notifications = [
    { id: '1', type: 'like', user: 'johndoe', message: 'liked your video', time: '2h' },
    { id: '2', type: 'comment', user: 'janedoe', message: 'commented: "Amazing!"', time: '4h' },
    { id: '3', type: 'follow', user: 'traveler', message: 'started following you', time: '1d' },
    { id: '4', type: 'like', user: 'foodie', message: 'liked your video', time: '2d' },
    { id: '5', type: 'comment', user: 'dancer', message: 'commented: "Love it! 💕"', time: '3d' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Ionicons name="heart" size={24} color={COLORS.pink} />;
      case 'comment':
        return <Ionicons name="chatbubble" size={24} color={COLORS.white} />;
      case 'follow':
        return <Ionicons name="person-add" size={24} color={COLORS.white} />;
      default:
        return <Ionicons name="notifications" size={24} color={COLORS.white} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inbox</Text>
      <ScrollView style={styles.content}>
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              {getIcon(notification.type)}
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>
                <Text style={styles.username}>{notification.user}</Text>
                {' '}
                {notification.message}
              </Text>
              <Text style={styles.time}>{notification.time}</Text>
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
  header: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    paddingTop: 60,
  },
  content: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
    justifyContent: 'center',
  },
  notificationText: {
    color: COLORS.white,
    fontSize: 14,
    marginBottom: 4,
  },
  username: {
    fontWeight: 'bold',
  },
  time: {
    color: COLORS.gray,
    fontSize: 12,
  },
});

export default InboxScreen;
