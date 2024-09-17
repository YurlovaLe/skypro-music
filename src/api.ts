/* eslint-disable no-shadow */
export async function handleLoginApi({ email, password }) {
  const response = await fetch('https://webdev-music-003b5b991590.herokuapp.com/user/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      const { message } = await response.json();
      throw new Error(message);
    }

    throw new Error('Не удалось войти');
  }

  const { _id: id, ...data } = await response.json();

  const tokenResponse = await fetch('https://webdev-music-003b5b991590.herokuapp.com/user/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const { access, refresh } = await tokenResponse.json();

  return {
    ...data,
    id,
    access,
    refresh,
  };
}

export async function handleRegisterApi({ email, password }) {
  const response = await fetch('https://webdev-music-003b5b991590.herokuapp.com/user/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: email,
      email,
      password,
    }),
  });

  if (!response.ok) {
    if (response.status === 400) {
      const { username, email, password } = await response.json();
      throw new Error(username || email || password);
    }

    throw new Error('Не удалось зарегистрировать пользователя');
  }

  const { result } = await response.json();

  return result;
}

export async function handleRefreshApi(refreshToken) {
  const response = await fetch('https://webdev-music-003b5b991590.herokuapp.com/user/token/refresh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error('Не удалось обновить авторизацию');
  }

  const data = await response.json();

  return data;
}
