import React from 'react';
import {Formik} from 'formik';
import {Button, Input, Item, Label, Text, Form} from 'native-base';

const SigninForm = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values) => onSubmit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>

            <Input
              autoCapitalize="none"
              onChangeText={handleChange('username')}
              value={values.username}
              onBlur={handleBlur('password')}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              onChangeText={handleChange('password')}
              autoCapitalize="none"
              value={values.password}
            />
          </Item>
          <Button
            full
            primary
            style={{marginVertical: 32}}
            onPress={handleSubmit}>
            <Text>Login</Text>
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default SigninForm;
