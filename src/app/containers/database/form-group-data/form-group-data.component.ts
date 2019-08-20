import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {GroupDataComponent, ItemSelect, ItemSelectIcon} from '../group-data/group-data.component';
import {
  DevpavIconClickOutput,
  DevpavIconSetProps
} from '../../../components/common/devpav-icon-set/devpav-icon-set.component';

export enum IconType {
  ADD = 'ADD ICON',
  CHANGE = 'CHANGE ICON',
  DELETE = 'DELETE ICON',
  VIEW = 'VIEW ICON',
  SELECT_ALL = 'SELECT ALL ICON'
}

@Component({
  selector: 'form-group-data',
  templateUrl: './form-group-data.component.html',
  styleUrls: ['./form-group-data.component.scss']
})
export class FormGroupDataComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild(GroupDataComponent) groupData: GroupDataComponent;

  settingPanelIcon: ItemSelectIcon = {
    showIcon: true,
    title: 'chevron_right'
  };

  @Output()
  createEntity: EventEmitter<boolean> = new EventEmitter();

  @Output()
  changeEntity: EventEmitter<string> = new EventEmitter();

  @Output()
  deleteEntity: EventEmitter<string[]> = new EventEmitter();

  @Output()
  viewEntity: EventEmitter<string> = new EventEmitter();

  @Input()
  items: ItemSelect[] = [];

  iconsProps: DevpavIconSetProps = {
    icons: [
      {
        id: IconType.ADD,
        iconTitle: 'add_circle_outline',
        color: '#bdbdbd'
      },
      {
        id: IconType.CHANGE,
        iconTitle: 'create',
        color: '#bdbdbd',
        hidden: true
      },
      {
        id: IconType.VIEW,
        iconTitle: 'remove_red_eye',
        color: '#bdbdbd',
        hidden: true
      },
      {
        id: IconType.SELECT_ALL,
        iconTitle: 'playlist_add_check',
        color: '#bdbdbd'
      },
      {
        id: IconType.DELETE,
        iconTitle: 'delete_forever',
        color: 'red',
        hidden: true
      }
    ]
  };

  selectedItems: string[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push({id: i, value: `#N${i}_VALUE`});
    }
  }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
  }

  hiddenIcon(id: IconType, field: string, value: any) {
    const icon = this.iconsProps.icons.find(it => it.id === id);
    if (icon) {
      icon[field] = value;
    }
  }

  eventClickIcon($event: DevpavIconClickOutput) {
    switch ($event.id) {
      case IconType.ADD: {
        this.createEntity.emit(true);
        break;
      }
      case IconType.CHANGE: {
        this.changeEntity.emit(this.selectedItems[0]);
        break;
      }
      case IconType.VIEW: {
        this.viewEntity.emit(this.selectedItems[0]);
        break;
      }
      case IconType.DELETE: {
        this.deleteEntity.emit(this.selectedItems);
        break;
      }
      case IconType.SELECT_ALL: {
        break;
      }
      default: {
        console.log($event);
      }
    }
  }

  eventSelectValue($event: string[]) {
    this.selectedItems = $event;
    this.hiddenIcon(IconType.VIEW, 'hidden', this.selectedItems.length !== 1);
    this.hiddenIcon(IconType.CHANGE, 'hidden', this.selectedItems.length !== 1);
    this.hiddenIcon(IconType.DELETE, 'hidden', !this.selectedItems.length);
  }

  ngAfterViewInit(): void {
  }

}
