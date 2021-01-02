import React from 'react';
import {Text, Container, Content} from 'native-base';
import Form from './components/Form';
import useAuth from '../../../hooks/useAuth';
import {Image} from 'react-native';
import Logo from '../../../assets/logo.png';
const Login = () => {
  const {login} = useAuth();
  const onSubmit = ({username, password}) => login({username, password});

  return (
    <Container>
      <Content padder>
        <Image
          source={Logo}
          fadeDuration={1000}
          style={{
            width: '90%',
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text style={{color: 'gray', textAlign: 'center'}}>
          Test by Initgrammers
        </Text>
        <Form onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default Login;
