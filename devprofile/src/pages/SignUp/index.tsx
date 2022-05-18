import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';

import { Button } from '../../components/Form/Button';
import { InputControl } from '../../components/Form/InputControl';
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

export const SignUp: React.FunctionComponent = () => {
  const { handleSubmit, control } = useForm<FieldValues>();

  const { goBack } = useNavigation<ScreenNavigationProp>();

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>
            <InputControl
              control={control}
              name="name"
              placeholder="Nome completo"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <InputControl
              control={control}
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <InputControl
              control={control}
              name="password"
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
            />
            <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
