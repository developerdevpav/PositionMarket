import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Language} from '../../store/language/language.model';
import {Value} from '../../store/entities/abstract.entity';

@Component({
  selector: 'translate-text-area-component',
  templateUrl: './translate-text-area-component.component.html',
  styleUrls: ['./translate-text-area-component.component.scss']
})
export class TranslateTextAreaComponentComponent implements OnInit {

  formGroup: FormGroup;

  @Input()
  values: Value[] = [];

  @Output()
  inputValues: EventEmitter<Value[]> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      ru: this.formBuilder.control(this.findValueStringByLanguage(Language.RU, this.values)),
      en: this.formBuilder.control(this.findValueStringByLanguage(Language.EN, this.values))
    });

    this.formGroup.valueChanges.subscribe(() => {
      this.inputValues.emit([
        this.buildValue(Language.EN, this.formGroup.get('en').value),
        this.buildValue(Language.RU, this.formGroup.get('ru').value)
      ]);
    });
  }

  private buildValue = (language: Language, value: string) => ({ language, value } as Value);

  private findValueStringByLanguage = (language: Language, values: Value[]) => {
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
