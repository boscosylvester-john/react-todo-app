import axios from 'axios';

export const getTasks = async () => {
  const result = await axios.get(
    'http://localhost:4000/tasks'
  );
  return result.data;
};
