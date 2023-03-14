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
    event.preventDefault();
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
      <View style={styles.container}>
        <Text style={styles.heading}>To do list:</Text>
        <TextInput
          style={styles.input}
          type="text"
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
        />
        <Button title="Add To Do" color={'white'} onClick={handleSubmit} />

        {todos.map(todo => (
          <TouchableOpacity onClick={() => handleToggleCompleted(todo.id)}>
            <Text key={todo.id}>
              <Text>{todo.text}</Text>

              <Button
                title="Delete"
                onClick={() => {
                  handleDeleteTodo(todo.id);
                }}
              />
            </Text>
          </TouchableOpacity>
        ))}
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
