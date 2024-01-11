import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "reflect-metadata"
import { User } from './User';
import { AppDataSource } from './data-source';

export default function App() {
    
  const photo = new User()
  photo.name = "Me and Bears"

 AppDataSource.manager.save(photo)

  console.log("Photo has been saved. Photo id is", photo.id)
  
  return (
    <View >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
