import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';
import {navLogin} from '../../hook/navigation';
import {RootStackParamList} from '../../type/fetch';

export default function NavigationFooter() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Button
        title="="
        onPress={() => {
          navLogin(navigation);
        }}
      />
    </View>
  );
}
