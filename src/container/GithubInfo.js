import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Data } from '../data/GithubArray';
import * as api from '../api/GithubApi';

function GithubInfo() {
  const [count, setCount] = useState(0);

  const { data, isLoading, error, isFetching, refetch } = useQuery(
    ['githubLits', Data[count]],
    () => api.getRepository(Data[count])
  );

  const blp = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    console.log(Data[count]);
    refetch();
  };

  const plusplus = () => {
    if (count < Data.length - 1) {
      setCount(count + 1);
    }
    console.log(Data[count]);
    refetch();
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>'An error has occurred: ' + {error.message}</p>}
      <h1>{data?.name}</h1>
      <h2>You clicked {count} times!</h2>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{' '}
      <strong>✨ {data?.stargazers_count}</strong>{' '}
      <strong>🍴 {data?.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      {/* <button onClick={() => refetch()}>ooooo</button> */}
      <button onClick={blp}>Decrement</button>
      <button onClick={plusplus}>Increment</button>
    </div>
  );
}

export default GithubInfo;
