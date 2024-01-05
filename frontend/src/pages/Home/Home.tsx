import React from 'react';
import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { setAccessToken } from 'redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);
  // const auth = useCustomSelector((state) => state.auth);
  // const accessToken = useCustomSelector((state) => state.auth.accessToken);
  const dispatch = useCustomDispatch();

  // console.log(auth);
  console.log(auth.accessToken);
  // console.log(accessToken);

  function handleLogin(): void {
    dispatch(setAccessToken('tokenquevoyamandar'));
  }

  return (
    <div>
      Home
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
