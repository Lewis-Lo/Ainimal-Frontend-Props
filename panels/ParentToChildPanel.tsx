import { StyleSheet, View } from 'react-native';
import Square from '../components/Square';

interface Props {
}

const ParentToChildPanel: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
			<Square size={150} color="#CFC" text='Square1' />
			<Square size={200} color="#ACD" text='Square2' />
			<Square size={100} color="#DAA" text='Square3' />
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

export default ParentToChildPanel;