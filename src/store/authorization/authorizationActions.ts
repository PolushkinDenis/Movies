import $api from "./index";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiAuthData, AuthVKData} from "../../types/IAuthorization";
import {IUser} from "../../types/IUser";
import {toast} from 'react-toastify';

interface UserData {
  email: string,
  password: string,
}

export const userLogin = createAsyncThunk<IUser, UserData>(
  'authorization/login',
  async (data) => {
    console.log('data in actions ', data)
    const response = await $api.post<ApiAuthData>('/auth/login', data);

    if(response.status === 201) {
      localStorage.setItem('userData', JSON.stringify({
        accessToken: response.data.token,
        email: data.email
      }));
      window.dispatchEvent(new Event('storage'));

      toast.success('Вход выполнен успешно', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    return {email: data.email};
  }
);

export const userRegistration = createAsyncThunk<IUser, UserData>(
  'authorization/registration',
  async (data) => {
    const response = await $api.post<ApiAuthData>('/auth/registration', data);

    localStorage.setItem('userData', JSON.stringify({
      accessToken: response.data.token,
      email: data.email
    }));
    window.dispatchEvent(new Event('storage'));

    toast.success('Регистрация выполнена успешно', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    return {email: data.email};
  }
);

export const userLogout = createAsyncThunk<void>(
  'authorization/logout',
  async () => {
    await $api.post<boolean>('/auth/logout');

    localStorage.removeItem('userData');
    window.dispatchEvent(new Event('storage'));

    toast.success('Выход выполнен успешно', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
);

export const vkAuth = createAsyncThunk<IUser, string>(
  'authorization/vk',
  async (VKcode) => {
    const response = await $api.post<AuthVKData>('/auth/vk', {code: VKcode});

    localStorage.setItem('userData', JSON.stringify({
      accessToken: response.data.token,
      email: response.data.email ? response.data.email : 'userVk@gmail.com'
    }));
    window.dispatchEvent(new Event('storage'));

    toast.success('Авторизация ВК выполнена успешно', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    return {email: response.data.email ? response.data.email : 'userVk@gmail.com'};
  }
);

export const googleAuth = createAsyncThunk<IUser, void>(
  'authorization/google',
  async () => {
    const response = await $api.post<ApiAuthData>('/auth/google');

    localStorage.setItem('userData', JSON.stringify({
      accessToken: response.data.token,
      email: response.data.email
    }));
    window.dispatchEvent(new Event('storage'));

    toast.success('Авторизация Google выполнена успешно', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    return {email: response.data.email};
  }
);

