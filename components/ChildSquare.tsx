import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
	func: ()=>void;
	text: string;
}

const ChildSquare: React.FC<Props> = ({func, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => func()}>
			<Text>{text}</Text>
		</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80, 
		height: 80, 
		backgroundColor: "#AFA",
		alignItems: 'center',
		justifyContent: 'center',
  },
});

export default ChildSquare;