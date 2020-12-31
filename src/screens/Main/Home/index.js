import React from 'react';
import {Container, Text, Content, Button} from 'native-base';
import useAuth from '../../../hooks/useAuth';
import CardUser from './components/CardUser';

const Home = () => {
  const {logout} = useAuth();
  return (
    <Container>
      <Content padder>
        <CardUser />
        <Button full onPress={logout}>
          <Text>Cerrar sesión</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
