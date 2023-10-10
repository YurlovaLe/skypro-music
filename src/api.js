export async function handleLoginApi({ email, password }) {
  const response = await fetch('https://skypro-music-api.skyeng.tech/user/login/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: email,
      email,
      password,
    }),
  });

  if(!response.ok) {
    if (response.status === 401) {
      const { detail } = await response.json();
      throw new Error(detail);
    }
    
    console.log(response.json());
    throw new Error("Не удалось войти");
  }

  const data = await response.json();

  const tokenResponse = await fetch('https://skypro-music-api.skyeng.tech/user/token/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const { access, refresh } = await tokenResponse.json();

  return { ...data, access, refresh }; 
}

export async function handleRegisterApi({ email, password }) {
  const response = await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: email,
      email,
      password,
    }),
  });

  if(!response.ok) {
    if (response.status === 400) {
      const { username, email, password } = await response.json();
      throw new Error(username || email || password);
    }

    throw new Error('Не удалось зарегистрировать пользователя');
  }
  
  const data = await response.json();

  return data; 
}

export async function handleRefreshApi(refreshToken) {
  const response = await fetch('https://skypro-music-api.skyeng.tech/user/token/refresh/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: refreshToken
    }),
  });

  if(!response.ok) {
    throw new Error('Не удалось обновить авторизацию');
  }

  const data = await response.json();

  return data; 
}
