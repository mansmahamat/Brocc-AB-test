import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryInformationContainer from '../container/QueryInformationContainer';
import ResultsInformationsContainer from '../container/ResultsInformationsContainer';
import { Data } from '../data/GithubArray';

const queryClient = new QueryClient();

export default function App() {
  const [count, setCount] = useState(0);

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    if (count < Data.length - 1) {
      setCount(count + 1);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <QueryInformationContainer plus={plus} minus={minus} />
      <ResultsInformationsContainer count={count} />
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
