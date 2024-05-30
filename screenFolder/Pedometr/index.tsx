import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {map} from 'rxjs/operators';

const Pedometer = () => {
  const [steps, setSteps] = useState(0);
  const [lastAcceleration, setLastAcceleration] = useState(0);

  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 400); // Update interval to 400ms

    const subscription = accelerometer
      .pipe(map(({x, y, z}) => Math.sqrt(x * x + y * y + z * z)))
      .subscribe(
        acceleration => {
          // Simple threshold-based step detection algorithm
          if (lastAcceleration !== 0 && acceleration - lastAcceleration > 2) {
            setSteps(prevSteps => prevSteps + 1);
          }
          setLastAcceleration(acceleration);
        },
        error => {
          console.log('The sensor is not available');
        },
      );

    return () => {
      subscription.unsubscribe(); // Clean up the subscription on component unmount
    };
  }, [lastAcceleration]);

  return (
    <View style={styles.container}>
      <Text>Steps: {steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pedometer;
