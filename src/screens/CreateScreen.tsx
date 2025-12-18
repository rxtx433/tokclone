import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const CreateScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="add-circle-outline" size={80} color={COLORS.white} />
      <Text style={styles.title}>Create Video</Text>
      <Text style={styles.subtitle}>Upload or record a new video</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="videocam" size={32} color={COLORS.white} />
          <Text style={styles.buttonText}>Record</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Ionicons name="cloud-upload" size={32} color={COLORS.white} />
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 16,
    marginBottom: 32,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    marginTop: 8,
  },
});

export default CreateScreen;
