<script src="http://localhost:8097" />;
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To do list:</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          editable
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginVertical: 40,
    color: 'white',
    margin: 10,
    marginTop: 50,
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'green',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
