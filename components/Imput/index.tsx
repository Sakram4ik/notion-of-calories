import React from 'react';
import {Controller} from 'react-hook-form';
import {Text, TextInput} from 'react-native';

export default function InputApp({control, rules, name}: any) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="user name"
            />

            {error && <Text>{error.message || 'error'}</Text>}
          </>
        )}
      />
    </>
  );
}
