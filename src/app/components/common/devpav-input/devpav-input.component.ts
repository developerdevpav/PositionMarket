import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'devpav-input',
  templateUrl: './devpav-input.component.html',
  styleUrls: ['./devpav-input.component.scss']
})
export class DevpavInputComponent implements OnInit {

  @Input() ph: string;
  @Input() type = 'text';

  @Output() blurEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() focusEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() inputValue: EventEmitter<string> = new EventEmitter();

  value: string;

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
