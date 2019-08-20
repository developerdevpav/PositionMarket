import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Value} from '../../store/entities/abstract.entity';
import {Language} from '../../store/language/language.model';

@Component({
  selector: 'translate-container',
  templateUrl: './translate-container.component.html',
  styleUrls: ['./translate-container.component.scss']
})
export class TranslateContainerComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) {

  }

  formGroup: FormGroup;

  @Input()
  values: Value[] = [];

  @Output()
  inputValues: EventEmitter<Value[]> = new EventEmitter();

  static buildValue(language: Language, value: string) {
    return { language, value } as Value;
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      ru: this.formBuilder.control(this.findValueStringByLanguage(Language.RU, this.values)),
      en: this.formBuilder.control(this.findValueStringByLanguage(Language.EN, this.values))
    });

    this.formGroup.valueChanges.subscribe(() => {
      this.inputValues.emit([
        TranslateContainerComponent.buildValue(Language.EN, this.formGroup.get('en').value),
        TranslateContainerComponent.buildValue(Language.RU, this.formGroup.get('ru').value)
      ]);
    });
  }

  private findValueStringByLanguage(language: Language, values: Value[]) {
    if (!values) {
      return '';
    }

    const valueString = values.filter(value => value)
      .find(value => value.language === language);

    if (!valueString || !valueString.value) {
      return '';
    }

    return valueString.value;
  }
}
