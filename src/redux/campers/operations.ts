import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Camper } from '../../../types/camper';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

interface FetchParams {
  page?: number;
  limit?: number;
  params: string;
}

interface FetchResponse {
  items: Camper[];
  total: number;
}

export const fetchAllCampers = createAsyncThunk<
  FetchResponse,
  FetchParams,
  {
    rejectValue: string;
  }
>('campers/fetchAll', async ({ page = 1, limit = 4, params }, thunkApi) => {
  try {
    const { data } = await axios.get<FetchResponse>(
      `/campers?${params}&limit=${limit}&page=${page}`
    );

    return data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 404) {
      return thunkApi.fulfillWithValue({ items: [], total: 0 });
    }
    return thunkApi.rejectWithValue(err.message || 'Something went wrong');
  }
});

export const fetchCamper = createAsyncThunk<
  Camper,
  string,
  { rejectValue: string }
>('campers/fetchOne', async (id, thunkApi) => {
  try {
    const { data } = await axios.get<Camper>(`/campers/${id}`);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkApi.rejectWithValue(err.message);
  }
});
