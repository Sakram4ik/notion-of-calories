/* import  {ReanimatedModule}  from 'react-native-reanimated';

ReanimatedModule.installCoreFunctions(); */
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
      <CircularProgress
       value={fillPercentage}
       maxValue={maxSteps}
       radius={120}
       progressValueColor={'#ecf0f1'} 
       activeStrokeColor={'#f39c12'}
       />
      <Text>{currentSteps} Кроків</Text>
    </View>
  );
};

export default StepsProgress;
