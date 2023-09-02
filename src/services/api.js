export const loginUser = async (email, password) => {
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error(`An error has occurred: ${response.status}`);
  }

  return await response.json();
};



export const registerUser = async (email, password) => {
  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error(`An error has occurred: ${response.status}`);
  }

  return await response.json();
};



export const initiatePasswordReset = async (email) => {
  const response = await fetch('http://localhost:5000/api/auth/forgotpassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  if (!response.ok) {
    throw new Error(`An error has occurred: ${response.status}`);
  }
};
