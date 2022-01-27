import { StyleSheet, View } from 'react-native';
import ParentSquare from '../components/ParentSquare';

interface Props {
}

const ChildToParentPanel: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
			<ParentSquare />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChildToParentPanel;