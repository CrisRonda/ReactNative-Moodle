import React from 'react';
import {Container, Content} from 'native-base';
import Form from './components/Form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {login} = useAuth();
  const onSubmit = ({username, password}) => login({username, password});

  return (
    <Container>
      <Content padder>
        <Form onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default Login;
