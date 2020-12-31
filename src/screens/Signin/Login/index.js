import React from 'react';
import {Container, Content} from 'native-base';
import Form from './components/Form';
import {loginMoodle} from '../../../services/moodle/auth';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const {navigate} = useNavigation();
  const onSubmit = async ({username, password}) => {
    const {user} = await loginMoodle({username, password});
    if (user) {
      navigate('screen-home');
    }
  };

  return (
    <Container>
      <Content padder>
        <Form onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default Login;
