<script src="http://localhost:8097" />;
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('');

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  // const handleSubmit = event => {
  //   console.log('hello');
  //   setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
  //   setNewTodo('');
  // };
  const submit = () => {
    console.log('Submit was pressed');
    setTodos([...todos, {id: Date.now(), text: newTodo, checked: false}]);
    setNewTodo([newTodo]); // spread syntax
  };
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View style={styles.container}>
          <Text style={styles.heading}>To do list:</Text>
          <TextInput
            style={styles.input}
            type="text"
            value={newTodo}
            onChangeText={setNewTodo}
          />
          <Button title="Add To Do" color={'white'} onPress={submit} />
        </View>

        <View>
          {todos.map(todo => (
            <TouchableOpacity onPress={() => toggleFunction()} key={todo.id}>
              <View style={toggle ? styles.random : styles.selected}>
                <Text style={styles.mainText}>{todo.text}</Text>

                <Button
                  color={'white'}
                  title="Delete"
                  onPress={() => {
                    handleDeleteTodo(todo.id);
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
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
  mainText: {
    fontSize: 20,
    marginVertical: 50,
    color: 'white',
    margin: 10,
    marginTop: 50,
    textAlign: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: 'green',
  },
  random: {
    backgroundColor: 'red',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: 2,
  },
  selected: {
    backgroundColor: 'green',
    marginVertical: 2,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: 'white',
  },
  scrollView: {
    backgroundColor: 'black',
    color: 'white',
  },
});

export default App;
