import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Language} from '../../../store/language/language.model';

@Component({
  selector: 'devpav-multi-language-input',
  templateUrl: './devpav-multi-language-input.component.html',
  styleUrls: ['./devpav-multi-language-input.component.scss']
})
export class DevpavMultiLanguageInputComponent implements OnInit {

  formGroup: FormGroup;

  @Input()
  postfix = false;

  @Input()
  currentInputLanguage: Language = Language.RU;

  mapLanguage = new Map();

  constructor() {
    this.mapLanguage.set('ru', Language.RU);
    this.mapLanguage.set('en', Language.EN);
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      [Language.EN]: new FormControl(''),
      [Language.RU]: new FormControl('')
    });
  }

  getStyleInput = () => ({'flex-basis': this.postfix ? '90%' : '100%'});

  isCurrentMultiLanguageInput = (language: string): boolean => this.currentInputLanguage === this.mapLanguage.get(language);

  getFormControlName = (language: string): string => this.mapLanguage.get(language);

  switchLanguage = (language: string) => this.currentInputLanguage = this.mapLanguage.get(language);
}
