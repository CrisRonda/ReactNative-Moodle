import React from 'react';
import {Image} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Thumbnail,
} from 'native-base';
import useCourses from '../../../../../hooks/useCourses';
import {WebView} from 'react-native-webview';

const Courses = () => {
  const {courses} = useCourses();
  if (courses.length <= 0) {
    return <Text>Aún no tienes cursos disponibles</Text>;
  }
  return courses.map(
    ({id, overviewfiles, displayname, summary, enrolledusercount}) => (
      <Card key={id}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: overviewfiles[0].fileurl.replace('webservice/', ''),
              }}
            />
            <Body>
              <Text>{displayname}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: overviewfiles[0].fileurl.replace('webservice/', ''),
            }}
            style={{height: 200, width: null, flex: 1, resizeMode: 'center'}}
          />
        </CardItem>
        <CardItem>
          <WebView
            style={{height: 30}}
            source={{
              html: `<meta name="viewport" content="width=device-width, initial-scale=1"> ${summary}`,
            }}
            scrollEnabled
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Text>Ver curso</Text>
            </Button>
          </Left>
          <Right>
            <Text>Estudiantes: {enrolledusercount}</Text>
          </Right>
        </CardItem>
      </Card>
    ),
  );
};
export default Courses;
