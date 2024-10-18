import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';
import Font from '@/constants/Font';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const themeColors = isDarkMode ? Colors.dark : Colors.light;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/Welcome.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
          style={styles.overlay}
        />

        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: themeColors.text }]}>Welcome to AgriScan!</Text>
          <Text style={[styles.subtitle, { color: themeColors.text }]}>Your journey to a better experience starts here.</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.primaryButton, { backgroundColor: themeColors.tint }]}>
            <Link href="/signUp">
              <Text style={styles.primaryButtonText}>Sign Up</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Link href="/signIn">
              <Text style={styles.secondaryButtonText}>Sign In</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: Spacing * 2,
  },
  title: {
    fontSize: FontSize.xxLarge,
    fontFamily: Font['poppins-bold'],
    textAlign: 'center',
    marginBottom: Spacing,
  },
  subtitle: {
    fontSize: FontSize.medium,
    fontFamily: Font['poppins-regular'],
    textAlign: 'center',
    paddingHorizontal: Spacing * 4,
  },
  buttonsContainer: {
    marginTop: Spacing * 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: Spacing * 2,
  },
  primaryButton: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 4,
    borderRadius: Spacing,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  primaryButtonText: {
    fontFamily: Font['poppins-bold'],
    color: "#000",
    fontSize: FontSize.large,
    textAlign: 'center',
  },
  secondaryButton: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 4,
    borderRadius: Spacing,
    borderColor: "#fff",
    borderWidth: 1,
  },
  secondaryButtonText: {
    fontFamily: Font['poppins-regular'],
    color: "#fff",
    fontSize: FontSize.large,
    textAlign: 'center',
  },
});
