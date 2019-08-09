import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar-carousel',
  templateUrl: './avatar-carousel.component.html',
  styleUrls: ['./avatar-carousel.component.scss']
})
export class AvatarCarouselComponent implements OnInit {

  @Input()
  images: {
    index: number,
    url: string
  }[] = [
    {
      index: 0,
      url: ''
    }
  ];

  image: {
    index: number,
    url: string
  } = {
    index: 0,
    url: ''
  };

  constructor() { }

  ngOnInit() {
    this.image = this.images[0];
  }

  next() {
    let indexImage = this.images.indexOf(this.image);

    if ( indexImage < 0 || ( (indexImage + 1) === this.images.length) ) {
      return;
    }

    this.image = this.images[++indexImage];
  }

  prev() {
    let indexImage = this.images.indexOf(this.image);

    if ( indexImage < 0 || ( indexImage === 0 ) ) {
      return;
    }

    this.image = this.images[--indexImage];
  }

}
