import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ButtonAddOnePanel from './panels/ButtonAddOnePanel';
import ParentToChildPanel from './panels/ParentToChildPanel';
import ChildToParentPanel from './panels/ChildToParentPanel';

export default function App() {
  const [currentPanel, setCurrentPanel] = useState("Menu");
  
  const MenuPanel = 
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => setCurrentPanel("ButtonAddOnePanel")}>
        <Text>ButtonAddOnePanel</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => setCurrentPanel("ParentToChildPanel")}>
        <Text>ParentToChildPanel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setCurrentPanel("ChildToParentPanel")}>
        <Text>ChildToParentPanel</Text>
      </TouchableOpacity>

    </View>
  
  const getPanel = () => {
    if(currentPanel === "ButtonAddOnePanel") return <ButtonAddOnePanel />;
    else if(currentPanel === "ParentToChildPanel") return <ParentToChildPanel />;
    else if(currentPanel === "ChildToParentPanel") return <ChildToParentPanel />;
    else return MenuPanel;
  }

  return getPanel();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 200,
		height: 80,
    backgroundColor: '#ff8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
