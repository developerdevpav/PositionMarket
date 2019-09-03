import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'devpav-input-textarea',
  templateUrl: './devpav-input-textarea.component.html',
  styleUrls: ['./devpav-input-textarea.component.scss']
})
export class DevpavInputTextareaComponent implements OnInit {

  @Input() ph: string;

  @Input() value: string;

  @Output() blurEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() focusEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() inputValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  blurInput($event: boolean) {
    this.blurEmit.emit($event);
  }

  focusInput($event: boolean) {
    this.focusEmit.emit($event);
  }

  setValue() {
    this.inputValue.emit(this.value);
  }

}
