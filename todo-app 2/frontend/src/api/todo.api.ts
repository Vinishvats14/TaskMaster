import api from './axios';
import { TodoInput, Todo } from '../schemas/todo.schema';

export const todoAPI = {
  getTodos: async (): Promise<{ todos: Todo[] }> => {
    const response = await api.get('/todos');
    return response.data;
  },

  createTodo: async (data: TodoInput): Promise<{ todo: Todo }> => {
    const response = await api.post('/todos', data);
    return response.data;
  },

  updateTodo: async (id: string, data: Partial<TodoInput & { completed: boolean }>): Promise<{ todo: Todo }> => {
    const response = await api.put(`/todos/${id}`, data);
    return response.data;
  },

  deleteTodo: async (id: string): Promise<void> => {
    await api.delete(`/todos/${id}`);
  },
};
