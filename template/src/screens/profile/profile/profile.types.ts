export enum Fields {
  USERNAME = 'USERNAME',
  PASSWORD = 'PASSWORD',
}

export type FormType = {
  [Fields.USERNAME]: string;
  [Fields.PASSWORD]: string;
};

export const DEFAULT_FORM_VALUES = {
  USERNAME: '',
  PASSWORD: '',
};
