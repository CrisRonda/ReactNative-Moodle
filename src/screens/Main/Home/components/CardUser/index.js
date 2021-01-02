import React from 'react';
import {Card, CardItem, Thumbnail, Text, Left, Body} from 'native-base';
import useUser from '../../../../../hooks/useUser';

const CardUser = () => {
  const {displayName, profileimageurl, email} = useUser();
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: profileimageurl}} />
          <Body>
            <Text>{displayName}</Text>
            <Text note>{email}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};
export default CardUser;
