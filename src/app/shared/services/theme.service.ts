import {Injectable} from '@angular/core';
import {light, Theme} from '../../config/theme.config';

export const darkTheme = {
  'primary-color': '#455363',

  'background-color': '#1f2935',

  'text-color': '#fff',
  'text-input-color': '#e9e9e9',

  'form-input-border-color': 'rgba(143,143,143,0.3)',
  'form-input-background-color': '#252e3a',
  'form-input-border': 'none',

  'devpav-chip-background-color': '#252e3a',
  'devpav-chip-font-color': '#f9f9f9',
  'devpav-chip-border': 'none',

  'element-background-color': '#283240',
  'element-text-color': '#f9f9f9',

  'shadow-color': '#818181'
};

export const lightTheme = {
  'primary-color': '#fff',

  'background-color': '#fff',

  'text-color': '#2d2d2d',
  'text-input-color': '#2d2d2d',

  'form-input-border-color': '#e8e8e8',
  'form-input-background-color': '#ffffff',
  'form-input-border': '1px solid ' + '#e8e8e8',

  'devpav-chip-background-color': '#ffffff',
  'devpav-chip-font-color': '#000000',
  'devpav-chip-border': '1px solid ' + '#e8e8e8',

  'element-background-color': '#ffffff',
  'element-text-color': '#000000',

  'shadow-color': '#26303e'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private defaultTheme: Theme = light;

  public toggleDark() {
    this.setTheme(darkTheme);
  }

  public toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k => document.documentElement.style.setProperty(`--${k}`, theme[k]));
  }

}
