import { StyleSheet, View } from 'react-native';
import ButtonAddOne from '../components/ButtonAddOne';

interface Props {
}

const ButtonAddOnePanel: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ButtonAddOne />
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

export default ButtonAddOnePanel;