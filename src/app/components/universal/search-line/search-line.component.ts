import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-search-line',
  templateUrl: './search-line.component.html',
  styleUrls: ['./search-line.component.scss']
})
export class SearchLineComponent implements OnInit {

  @Output() textSearch = new EventEmitter<string>();
  @Output() focus = new EventEmitter<boolean>();
  @Output() inputText = new EventEmitter<boolean>();
  @Output() keydownChange = new EventEmitter<KeyboardEvent>();

  text = '';

  constructor() {
  }

  ngOnInit() {
  }

  focusInput($event) {
    this.focus.emit($event.type === 'focus');
  }

  keydown($event: KeyboardEvent) {
    this.keydownChange.emit($event);
  }

  input($event: any) {
    this.inputText.emit(this.text && this.text.length > 0);
    this.textSearch.emit(this.text);
  }
}
