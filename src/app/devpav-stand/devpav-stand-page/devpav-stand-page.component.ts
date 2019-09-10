import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogAlertWarningComponent} from '../../shared/dialog-alert-warning/dialog-alert-warning.component';

@Component({
  selector: 'devpav-stand-page',
  templateUrl: './devpav-stand-page.component.html',
  styleUrls: ['./devpav-stand-page.component.scss']
})
export class DevpavStandPageComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        console.log(fragment);
        this.router.navigate(['components'], { fragment });
      }
    });
  }

  scrollToFragment = (fragment: string) => this.router.navigate(['components'], { fragment });

  openWarningAlert() {
    const dialogRef = this.dialog.open(DialogAlertWarningComponent, {
      width: '700px',
      height: '200px',
      data: {
        message: 'Are you sure you want to delete the entry?',
        title: 'Deleting',
        titleBtn: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result: ', result);
    });
  }
}
