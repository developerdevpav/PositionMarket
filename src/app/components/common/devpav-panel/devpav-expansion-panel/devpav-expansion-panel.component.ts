import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'devpav-expansion-panel',
  templateUrl: './devpav-expansion-panel.component.html',
  styleUrls: ['./devpav-expansion-panel.component.scss'],
  animations: [
    trigger('expansionPanel', [
      state('unexpansion', style({height: 0})),
      state('expansion', style({height: '*'})),
      transition('unexpansion <=> expansion', animate('0.4s'))
    ])
  ]
})
export class DevpavExpansionPanelComponent implements OnInit {

  isExpansionPanel = false;
  state = 'unexpansion';

  constructor() { }

  ngOnInit() {
  }

  expansionPanel() {
    this.isExpansionPanel = !this.isExpansionPanel;
    this.state = this.isExpansionPanel ? 'expansion' : 'unexpansion';
    console.log(this.state);
  }
}
