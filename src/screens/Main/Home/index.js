import React, {useEffect} from 'react';
import {Container, Text, Content, Button} from 'native-base';
import useAuth from '../../../hooks/useAuth';
import CardUser from './components/CardUser';
import useCourses from '../../../hooks/useCourses';
import Courses from './components/Courses';

const Home = () => {
  const {logout} = useAuth();
  const {getCourses} = useCourses();
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <Container>
      <Content padder>
        <CardUser />
        <Courses />
        <Button full onPress={logout}>
          <Text>Cerrar sesión</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
