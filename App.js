import { StyleSheet, StatusBar } from 'react-native';
import StackNavigator from './src/stackNagiator';
import { colors } from './src/constants/colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.black} />
      <StackNavigator />
    </>
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
