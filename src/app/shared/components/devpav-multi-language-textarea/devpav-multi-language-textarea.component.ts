import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Language} from '../../../store/language/language.model';

@Component({
  selector: 'devpav-multi-language-textarea',
  templateUrl: './devpav-multi-language-textarea.component.html',
  styleUrls: ['./devpav-multi-language-textarea.component.scss']
})
export class DevpavMultiLanguageTextareaComponent implements OnInit {

  formGroup: FormGroup;

  @Input()
  prefix = false;

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

  isCurrentMultiLanguageInput = (language: string): boolean => this.currentInputLanguage === this.mapLanguage.get(language);

  getFormControl = () => this.currentInputLanguage.toString();

  switchLanguage = (language: string) => {
    this.currentInputLanguage = this.mapLanguage.get(language);
  }

}
