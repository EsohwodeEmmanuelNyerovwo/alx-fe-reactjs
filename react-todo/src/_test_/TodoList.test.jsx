import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });
    test('adds a new todo', async () => {
        render(<TodoList />);
        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByText('Add');

        await userEvent.type(input, 'New Todo');
        await userEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });
    test('toggles a todo completion', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');
        fireEvent.click(todo);
        expect(todo).toHaveStyle('text-decoration: line-through');
    });
    test('deletes a todo', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');
        const deleteButton = screen.getByTestId('delete-1');
        fireEvent.click(deleteButton);
        expect(todo).not.toBeInTheDocument();
    });
});