import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Layout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
    </Stack>
  );
}
