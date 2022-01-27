import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

interface Props {
}

const ButtonAddOne: React.FC<Props> = ({}) => {
  // 定義出number這個state，使用setNumber來更改number
	const [number, setNumber] = useState(0);

  // 每當addOne這個function被呼叫時，會將number這個state加1
	const addOne = () => {
		setNumber(number + 1);
	}
  return (
    <TouchableOpacity style={styles.container} onPress={() => addOne()}>
			<Text>
				{number}
			</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
		height: 80,
    backgroundColor: '#cfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonAddOne;