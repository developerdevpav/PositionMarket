import {Injectable} from '@angular/core';
import {ApiImageService} from '../services/api-image.service';

@Injectable()
export class ImageEffects {

  constructor(private imageService: ApiImageService) {
  }


}
