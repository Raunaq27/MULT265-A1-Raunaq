import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.centerText}>Text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 15,
    marginVertical: 40,
  },
});

export default App;
