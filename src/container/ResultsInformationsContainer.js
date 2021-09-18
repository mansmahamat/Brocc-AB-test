import React from 'react';
import { ResultsInformations } from '../components/';
import { useQuery } from 'react-query';
import { Data } from '../data/GithubArray';
import * as api from '../api/GithubApi';

function ResultsInformationsContainer({ count }) {
  const { data, isFetching, error } = useQuery(
    ['githubLits', Data[count]],
    () => api.getRepository(Data[count]),
    { retryOnMount: false, retry: false }
  );

  return (
    <ResultsInformations>
      <ResultsInformations.Title>{count}</ResultsInformations.Title>
      {error && (
        <ResultsInformations.TextFetchingStatus color="red">
          'An error has occurred: ' + {error.message}
        </ResultsInformations.TextFetchingStatus>
      )}

      {isFetching && <ResultsInformations.Spinner />}

      {!error && (
        <ResultsInformations.List>
          <ResultsInformations.ListItem>
            Full Name : {data?.name?.toUpperCase()}
          </ResultsInformations.ListItem>
          <ResultsInformations.ListItem>
            Description: {data?.description}
          </ResultsInformations.ListItem>
          <ResultsInformations.ListItem>
            Stars : {data?.stargazers_count} ✨
          </ResultsInformations.ListItem>
        </ResultsInformations.List>
      )}
    </ResultsInformations>
  );
}

export default ResultsInformationsContainer;
