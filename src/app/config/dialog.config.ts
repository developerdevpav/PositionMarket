import {DialogAlertWarningProps} from '../shared/dialog-alert-warning/dialog-alert-warning.component';

export const configDeleteAlert = (message: string, title: string, titleBtn: string) => ({
  width: '700px',
  height: '200px',
  data: { message, title, titleBtn } as DialogAlertWarningProps
});
