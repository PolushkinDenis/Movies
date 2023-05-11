import React, {FC, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {FieldValues, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {googleAuth, userLogin, userRegistration, vkAuth} from "../../store/authorization/authorizationActions";
import {toast} from "react-toastify";
import {GoogleLogin} from '@react-oauth/google';
import MiniSpinner from "../../components/UI/miniSpinner/MiniSpinner";
import './ProfileForm.scss';

const VK_CLIENT_ID = 51619671;
const LOGIN_PATH = 'login';
const REGISTRATION_PATH = 'registration';

const ProfileForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const loginLoading = useAppSelector(state => state.authorizationReducer.loginLoading);
  const loginError = useAppSelector(state => state.authorizationReducer.loginError);
  const registrationLoading = useAppSelector(state => state.authorizationReducer.registrationLoading);
  const registrationError = useAppSelector(state => state.authorizationReducer.registrationError);
  const vkAuthLoading = useAppSelector(state => state.authorizationReducer.vkAuthLoading);
  const vkAuthError = useAppSelector(state => state.authorizationReducer.vkAuthError);
  const googleAuthLoading = useAppSelector(state => state.authorizationReducer.googleAuthLoading);
  const googleAuthError = useAppSelector(state => state.authorizationReducer.googleAuthError);

  const [isLoginForm, setIsLoginForm] = useState(true);

  const [logError, setLogError] = useState('');
  const [regError, setRegError] = useState('');
  const [vkError, setVkError] = useState('');
  const [googleError, setGoogleError] = useState('');

  const {register, formState: {errors}, handleSubmit} = useForm();

  useEffect(() => {
    if (location.pathname === '/registration') {
      setIsLoginForm(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (params.get('code')) {
      const VKCode = params.get('code');
      if (VKCode) {
        try {
          dispatch(vkAuth(VKCode)).unwrap();
          navigate('/');
        } catch (rejectedValueOrSerializedError) {
          toast.error('Ошибка авторизации ВК', {
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
      }
    }
  }, [params.get('code')]);

  useEffect(() => {
    if (loginError) {
      setLogError(loginError);
    }

    if (registrationError) {
      setRegError(registrationError);
    }

    if (vkAuthError) {
      setVkError(vkAuthError);
    }

    if (googleAuthError) {
      setGoogleError(googleAuthError);
    }
  }, [loginError, registrationError, vkAuthError, googleAuthError]);

  useEffect(() => {
    setLogError('');
    setRegError('');
    setVkError('');
    setGoogleError('');
  }, []);

  const onClose = () => {
    navigate('/');
  };

  const onSubmit = async (data: FieldValues) => {
    if (!isLoginForm) {
      try {
        await dispatch(userRegistration({email: data.email, password: data.password})).unwrap();
        navigate('/');
      } catch (rejectedValueOrSerializedError) {
        toast.error('Ошибка регистрации', {
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
    } else {
      try {
        await dispatch(userLogin({email: data.email, password: data.password})).unwrap();
        navigate('/');
      } catch (rejectedValueOrSerializedError) {
        toast.error('Ошибка входа', {
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
    }
  };

  const onVk = () => {
    window.location.href = `https://oauth.vk.com/authorize?client_id=${VK_CLIENT_ID}&display=page&redirect_uri=http://localhost:3000/${LOGIN_PATH}&scope=email&response_type=code&v=5.131`;
  };

  return (
    <div className="profile">
      <div className="profile__overlay">
        <div className="profile__close">
          <h3 className="profile__title">{isLoginForm ? 'Вход' : 'Регистрация'}</h3>
          <div onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x"
                 viewBox="0 0 16 16" id="IconChangeColor">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                id="mainIconPathAttribute" fill="#ffffff"
              />
            </svg>
          </div>
        </div>
        <div className="profile__divider"/>
        <div className="profile__message">
          <p>{isLoginForm ? 'Войдите,' : 'Зарегистрируйтесь,'}</p>
          чтобы пользоваться сервисом на любом устройстве
        </div>
        {(isLoginForm && logError !== '') && <div className="profile__error-msg">{logError}</div>}
        {(!isLoginForm && regError !== '') && <div className="profile__error-msg">{regError}</div>}
        {vkError !== '' && <div className="profile__error-msg">{vkError}</div>}
        {googleError !== '' && <div className="profile__error-msg">{googleError}</div>}
        <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__input-wrapper">
            <input
              type="email"
              placeholder="Через email"
              {...register('email', {required: true, pattern: /^(.+)@(.+)$/})}
              className={`${errors.email && ' profile_error-bd'}`}
            />
            <div className="profile__svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1f1b2e" className="bi bi-person"
                   viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
            </div>
            <div className="profile__error">
              {errors.email?.type === 'required' && 'Поле обязательное*'}
              {errors.email?.type === 'pattern' && 'Неверный формат email'}
            </div>
          </div>
          <div className="profile__input-wrapper">
            <input
              type="password"
              placeholder="Пароль"
              {...register('password', {required: true, minLength: 4, maxLength: 16, pattern: /^\S*$/})}
              className={`${errors.password && ' profile_error-bd'}`}
            />
            <div className="profile__svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1f1b2e" className="bi bi-lock"
                   viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
                />
              </svg>
            </div>
            <div className="profile__error">
              {errors.password?.type === 'required' && 'Поле обязательное*'}
              {errors.password?.type === 'pattern' && 'Пароль не должен содержать пробелы'}
              {errors.password?.type === 'minLength' && 'Длина введенного пароля менее 4 символов'}
              {errors.password?.type === 'maxLength' && 'Длина введенного пароля более 16 символов'}
            </div>
          </div>
          <button
            type="submit"
            className="profile__submit"
          >
            {
              isLoginForm ?
                (!loginLoading ? 'Войти' : <MiniSpinner/>) :
                (!registrationLoading ? 'Зарегистрироваться' : <MiniSpinner/>)
            }
          </button>
        </form>
        <div className="profile__social-networks">
          <button
            type="button"
            className="profile__submit profile__social-networks-btn"
            onClick={onVk}
          >
            {
              !vkAuthLoading ?
                <svg
                  style={{color: 'white'}} width="24" height="24"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M23.4493 5.94799C23.6161 5.40154 23.4493 5 22.6553 5H20.0297C19.3621 5 19.0543 5.34687 18.8874 5.72936C18.8874 5.72936 17.5521 8.92607 15.6606 11.0025C15.0487 11.6036 14.7705 11.7949 14.4367 11.7949C14.2698 11.7949 14.0194 11.6036 14.0194 11.0572V5.94799C14.0194 5.29225 13.8345 5 13.2781 5H9.15213C8.73494 5 8.48403 5.30434 8.48403 5.59278C8.48403 6.21441 9.42974 6.35777 9.52722 8.10641V11.9042C9.52722 12.7368 9.37413 12.8878 9.04032 12.8878C8.15023 12.8878 5.98507 9.67682 4.70093 6.00261C4.44927 5.28847 4.19686 5 3.52583 5H0.900218C0.150044 5 0 5.34687 0 5.72936C0 6.41244 0.890141 9.80039 4.14464 14.2812C6.31429 17.3412 9.37118 19 12.1528 19C13.8218 19 14.0283 18.6316 14.0283 17.997V15.6842C14.0283 14.9474 14.1864 14.8003 14.7149 14.8003C15.1043 14.8003 15.7719 14.9916 17.3296 16.467C19.1099 18.2156 19.4034 19 20.4047 19H23.0304C23.7805 19 24.1556 18.6316 23.9392 17.9045C23.7024 17.1799 22.8525 16.1286 21.7247 14.8823C21.1127 14.1719 20.1947 13.4069 19.9165 13.0243C19.5271 12.5326 19.6384 12.314 19.9165 11.8769C19.9165 11.8769 23.1155 7.45067 23.4493 5.94799Z"
                        fill="white"/>
                </svg> :
                <MiniSpinner/>
            }
          </button>
          <div className="profile__google">
            {
              !googleAuthLoading ?
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    dispatch(googleAuth());
                  }}
                  onError={() => {
                    toast.error('Ошибка авторизации Google', {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }}
                /> :
                <MiniSpinner/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;