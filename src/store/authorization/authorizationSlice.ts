import {createSlice} from "@reduxjs/toolkit";
import {IUser, IUserFullData} from "../../types/IUser";
import {googleAuth, userLogin, userLogout, userRegistration, vkAuth} from "./authorizationActions";

interface AuthorizationState {
  userFullData: IUserFullData | null,
  user: IUser | null,
  isAuth: boolean,
  loginLoading: boolean,
  loginError?: string,
  registrationLoading: boolean,
  registrationError?: string,
  vkAuthLoading: boolean,
  vkAuthError?: string,
  googleAuthLoading: boolean,
  googleAuthError?: string,
  logoutLoading: boolean,
  logoutError?: string,
}

const initialState: AuthorizationState = {
  userFullData: null,
  user: null,
  isAuth: false,
  loginLoading: false,
  loginError: '',
  registrationLoading: false,
  registrationError: '',
  vkAuthLoading: false,
  vkAuthError: '',
  googleAuthLoading: false,
  googleAuthError: '',
  logoutLoading: false,
  logoutError: ''
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loginLoading = true;
      state.loginError = '';
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loginLoading = false;
      state.user = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loginLoading = false;
      state.loginError = action.error.message;
    });

    builder.addCase(userRegistration.pending, (state) => {
      state.registrationLoading = true;
      state.registrationError = '';
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.registrationLoading = false;
      state.user = action.payload;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.registrationLoading = false;
      state.registrationError = action.error.message;
    });

    builder.addCase(userLogout.pending, (state) => {
      state.logoutLoading = true;
      state.logoutError = '';
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      state.logoutLoading = false;
      state.user = null;
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.logoutLoading = false;
      state.logoutError = action.error.message;
    });

    builder.addCase(vkAuth.pending, (state, action) => {
      state.vkAuthLoading = true;
      state.vkAuthError = '';
    });
    builder.addCase(vkAuth.fulfilled, (state, action) => {
      state.vkAuthLoading = false;
      state.user = action.payload;
    });
    builder.addCase(vkAuth.rejected, (state, action) => {
      state.vkAuthLoading = false;
      state.vkAuthError = action.error.message;
    });

    builder.addCase(googleAuth.pending, (state, action) => {
      state.googleAuthLoading = true;
      state.googleAuthError = '';
    });
    builder.addCase(googleAuth.fulfilled, (state, action) => {
      state.googleAuthLoading = false;
      state.user = action.payload;
    });
    builder.addCase(googleAuth.rejected, (state, action) => {
      state.googleAuthLoading = false;
      state.googleAuthError = action.error.message;
    });
  },
});

export const authorizationReducer = authorizationSlice.reducer;


