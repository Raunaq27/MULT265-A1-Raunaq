<script src="http://localhost:8097" />;
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>To do list:</Text>
      </View>
    );
  }
}

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
    backgroundColor: 'grey',
  },
});

export default App;
