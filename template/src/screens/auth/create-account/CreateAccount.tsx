import React from 'react';
import { Text } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';

import { FormInput, Button, Screen } from '@src/components';
import { useNavigation } from '@src/hooks';
import { RouteTypes } from '@src/navigators/routes';
import { SignUp, useAuth } from '@src/model';
import { useHeader } from '@src/hooks/useHeader';

import { DEFAULT_FORM_VALUES, Fields, FormType } from './create-account.types';
import { styles } from './create-account.styles';

export const CreateAccount: React.FC = () => {
  useHeader({
    title: 'Create Account',
  });

  const navigation = useNavigation<RouteTypes>();
  const { signUp, isLoadingSignUp } = useAuth();
  const form = useForm<FormType>({
    mode: 'onChange',
    defaultValues: { ...DEFAULT_FORM_VALUES },
  });

  const onSubmitPress = (formData: SignUp) => {
    signUp(formData);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Screen preset={'fixed'} style={styles.container}>
      <Text style={styles.title}>Create new account</Text>
      <FormProvider {...form}>
        <FormInput
          type={'text'}
          name={Fields.USERNAME}
          placeholder={'username'}
        />

        <FormInput
          type={'text'}
          name={Fields.PASSWORD}
          placeholder={'password'}
        />

        <FormInput
          type={'text'}
          name={Fields.PASSWORD}
          placeholder={'once again password'}
          label={'once again password'}
        />

        <Button
          isLoading={isLoadingSignUp}
          disabled={isLoadingSignUp}
          preset={'outline'}
          onPress={form.handleSubmit(onSubmitPress)}
        >
          Create
        </Button>
        <Button preset={'text'} onPress={goBack}>
          Go back
        </Button>
      </FormProvider>
    </Screen>
  );
};
