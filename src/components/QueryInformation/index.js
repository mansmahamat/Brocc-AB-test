import { Container, Button } from './styles';

export default function QueryInformation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

QueryInformation.Button = function QueryInformationButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};
