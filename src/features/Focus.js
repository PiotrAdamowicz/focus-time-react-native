import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import {spacing} from "../utils/sizes";

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focuse on?"
          onChangeText={(val) => {
            setSubject(val);
          }}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={()=> addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 0.9,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
});
