import 'react-native-reanimated';
import CircularProgress from 'react-native-circular-progress-indicator';
import React from 'react';
import { View, Text } from 'react-native';

interface StepsProgressProps {
  currentSteps: number;
  maxSteps: number;
}

const StepsProgress: React.FC<StepsProgressProps> = ({ currentSteps, maxSteps }) => {
  const fillPercentage = (currentSteps / maxSteps) * 100;

  return (
    <View>
      <CircularProgress value={fillPercentage} />
      <Text>{currentSteps} Кроків</Text>
    </View>
  );
};

export default StepsProgress;
