import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Lecture01';
import Task from './task/Task01';
import TodoApp from './todo/todo'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoApp />
);