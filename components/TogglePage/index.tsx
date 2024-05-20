import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
interface TogglePageProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const TogglePage: React.FC<TogglePageProps> = ({page, setPage}) => {
  const handlerPlus = () => {
    setPage(page + 1);
  };
  const handlerMinus = () => {
    setPage(page - 1);
  };
  return (
    <View>
      {page > 1 ? (
        <TouchableOpacity style={styles.button} onPress={handlerMinus} />
      ) : (
        <></>
      )}
      {page < 20 ? (
        <TouchableOpacity style={styles.button} onPress={handlerPlus}>
          <Text>gthtl</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};
export default TogglePage;
const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
  },
});
