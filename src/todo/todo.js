import React, { useState } from 'react';
import { 
  Container, Form, TextInput, 
  SubmitInput, UnorderdList, ListItem,
  TodoText, TodoDelete } from './styledComponents'
import './todo.css'

export default function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const handleSubmit = (todoText) => {
    setTodo([
      ...todo,
      {
        todoId: todoId,
        todoText: todoText,
        todoDone: false
      }
    ])
    setTodoId(todoId + 1)
  }

  const handleDelete = (todoId) => {
    setTodo(todo.filter(item => item.todoId !== todoId))
  }

  const handleToggle = (todoId) => {
    setTodo(todo.map(item => item.todoId === todoId ? { ...item, todoDone: !item.todoDone } : item))
  }

  return (
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(e.target.todo.value)
        e.target.todo.value = ''
      }}>
        <TextInput type='text' placeholder='할일 쓰기' name='todo' />
        <SubmitInput type='submit' value='추가' />
      </Form>
      <UnorderdList>
        {todo.map((item, index) => 
        <ListItem key={index}>
          <TodoText onClick={() => handleToggle(item.todoId)} style={item.todoDone ? { textDecoration: 'line-through'} : {} }>
            {item.todoText}
          </TodoText>
          <TodoDelete onClick={() => handleDelete(item.todoId)}>X</TodoDelete>
        </ListItem>)} 
      </UnorderdList>
    </Container>
  );
}
