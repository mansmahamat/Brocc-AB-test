import {
  Container,
  List,
  ListItem,
  Title,
  TextFetchingStatus,
  Spinner,
} from './styles';

export default function ResultsInformations({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ResultsInformations.Title = function ResultsInformationsTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

ResultsInformations.TextFetchingStatus =
  function ResultsInformationsTextFetchingStatus({ children, ...restProps }) {
    return <TextFetchingStatus {...restProps}>{children}</TextFetchingStatus>;
  };

ResultsInformations.List = function ResultsInformationsList({
  children,
  ...restProps
}) {
  return <List {...restProps}>{children}</List>;
};

ResultsInformations.ListItem = function ResultsInformationsListItem({
  children,
  ...restProps
}) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

ResultsInformations.Spinner = function ResultsInformationsSpinner({
  children,
  ...restProps
}) {
  return <Spinner {...restProps}>{children}</Spinner>;
};
