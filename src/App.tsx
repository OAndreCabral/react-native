import { useState } from 'react';
import { ActivityIndicator, Alert, Button, Modal, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import CustomComponents from './CustomComponents';
import TestStyle from './TestStyle';
import Box from '../components/Box';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content"/>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue"/>
      <ActivityIndicator size="large" color="midnightblue" animating={false}/>
      <Button title='Alert' onPress={() => Alert.alert("Invalid data!")} />
      <Button 
        title='Alert 2'
        onPress={() => Alert.alert("Invalid data!", "DOB incorrect")}
      />
      <Button 
        title='Alert 3'
        onPress={() => Alert.alert("Invalid data!", "DOB incorrect", [
          {
            text:'Cancel',
            onPress: () => console.log("Cancel pressed")
          },
          {
            text:'Ok',
            onPress: () => console.log("Ok pressed")
          }
        ])}
      />
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue" 
      />
      <Modal 
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button 
            title="Close" 
            color="midnightblue" 
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
      <CustomComponents name='Bruce Wayne'/>
      <CustomComponents name='Thomas Wayne'/>
      <TestStyle />
      <Box style={{ backgroundColor: "#8e9b00"}}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f"}}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56"}}>Box 3</Box>
      <Box style={{ backgroundColor: "#6b0803"}}>Box 4</Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "gold",
  }
})

export default App;
