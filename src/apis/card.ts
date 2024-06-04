import axios from 'axios';

export const getAllCards = async () => {
  const response = await axios.get('/card/front/all');
  return response.data;
};
