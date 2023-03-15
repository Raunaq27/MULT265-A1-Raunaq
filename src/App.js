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
  // const [text, onChangeText] = React.useState('Useless Text');

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = event => {
    console.log('hello');
    setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
    setNewTodo('');
  };
  const handleToggleCompleted = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      }),
    );
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
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
            onChange={event => setNewTodo(event.target.value)}
          />
          <Button title="Add To Do" color={'white'} onPress={handleSubmit} />
        </View>
        <View>
          {todos.map(todo => (
            <TouchableOpacity
              key={todo.id}
              onChange={() => handleToggleCompleted(todo.id)}>
              <View style={[styles.random, todo.isSelected && styles.selected]}>
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
    backgroundColor: 'green',
    fontSize: 20,
    color: 'white',
    margin: 5,
    textAlign: 'center',
  },
  selected: {
    opacity: 0.3,
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
