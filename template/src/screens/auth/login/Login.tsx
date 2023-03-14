import React from 'react';
import { Text } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';

import {
  DEFAULT_FORM_VALUES,
  Fields,
  FormType,
} from '@src/screens/auth/login/login.types';
import { FormInput, Button, Screen } from '@src/components';
import { useNavigation } from '@src/hooks';
import { Routes, RouteTypes } from '@src/navigators/routes';
import { SignIn, useAuth } from '@src/model';
import { useDropNavigationToScreen } from '@src/hooks/useDropNavigationToScreen.hook';

import { styles } from './login.styles';

export const Login: React.FC = () => {
  const { signIn, isLoadingSignIn } = useAuth();
  const navigation = useNavigation<RouteTypes>();
  const dropNavigationToScreen = useDropNavigationToScreen();
  const form = useForm<FormType>({
    mode: 'onChange',
    defaultValues: { ...DEFAULT_FORM_VALUES },
  });

  const onSubmitPress = (formData: SignIn) => {
    signIn(formData).then(() => {
      dropNavigationToScreen(Routes.BOTTOM_TAB_NAVIGATOR);
    });
  };

  const createNewAccount = () => {
    navigation.navigate(Routes.CREATE_ACCOUNT);
  };

  const navigateToBottomTab = () => {
    navigation.navigate(Routes.BOTTOM_TAB_NAVIGATOR);
  };

  return (
    <Screen preset={'fixed'} style={styles.container}>
      <Text style={styles.title}>You may enter any credentials</Text>
      <FormProvider {...form}>
        <FormInput
          type={'text'}
          name={Fields.USERNAME}
          placeholder={'username'}
        />

        <FormInput
          type={'secure'}
          name={Fields.PASSWORD}
          placeholder={'password'}
        />

        <Button
          isLoading={isLoadingSignIn}
          disabled={isLoadingSignIn}
          preset={'outline'}
          onPress={form.handleSubmit(onSubmitPress)}
        >
          Login
        </Button>
        <Button preset={'text'} onPress={createNewAccount}>
          Create new account
        </Button>

        <Button preset={'default'} onPress={navigateToBottomTab}>
          Navigate to bottom tab
        </Button>
      </FormProvider>
    </Screen>
  );
};
