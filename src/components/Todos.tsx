'use client';
import React, { useEffect, useState } from 'react';
import { Todo } from '../../types/types';

const baseTodos: Todo[] = [];

function useTodos() {
    const [todos, setTodos] = useState<Todo[]>(baseTodos);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const addTodo = (text: string) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id
                    ? {
                          ...todo,
                          completed: !todo.completed,
                      }
                    : todo
            )
        );
    };
    return { todos, addTodo, removeTodo, toggleTodo };
}

export default useTodos;
