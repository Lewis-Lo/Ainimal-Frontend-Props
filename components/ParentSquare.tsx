import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import ChildSquare from './ChildSquare'

interface Props {
}

const ParentSquare: React.FC<Props> = ({}) => {
	const [number, setNumber] = useState(0);
	
	// 定義出要當作Props傳給Child的callback function
	const addOne = () => setNumber(number + 1);
	const SubOne = () => setNumber(number - 1);

  return (
    <View style={styles.container}>
			{/* 使用一個Text，方便觀察number的變化 */}
			<Text>{number}</Text>
			{/* 直接將function當作Props傳給ChildSquare */}
			<ChildSquare func={addOne} text='addOne'/>
			<ChildSquare func={SubOne} text='subOne'/>
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150, 
		height: 250, 
		backgroundColor: "#FAA",
		alignItems: 'center',
		justifyContent: 'space-evenly',
  },
});

export default ParentSquare;