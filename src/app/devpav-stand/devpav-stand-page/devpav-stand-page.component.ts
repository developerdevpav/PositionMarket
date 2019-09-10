import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogAlertWarningComponent} from '../../shared/dialog-alert-warning/dialog-alert-warning.component';
import {configDeleteAlert} from '../../config/dialog.config';

@Component({
  selector: 'devpav-stand-page',
  templateUrl: './devpav-stand-page.component.html',
  styleUrls: ['./devpav-stand-page.component.scss']
})
export class DevpavStandPageComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        console.log(fragment);
        this.router.navigate(['components'], {fragment});
      }
    });
  }

  scrollToFragment = (fragment: string) => this.router.navigate(['components'], {fragment});

  openWarningAlert($event: MouseEvent) {
    $event.stopPropagation();

    const config = configDeleteAlert('Are you sure to delete the entry?', 'Delete', 'Yes');

    const dialogRef = this.dialog.open(DialogAlertWarningComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result: ', !!result);
    });
  }
}
