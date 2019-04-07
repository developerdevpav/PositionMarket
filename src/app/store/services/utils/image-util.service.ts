import {Injectable} from '@angular/core';
import {PositionImageModel} from '../../models/position.image.model';
import {ImageModel} from '../../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageUtilService {

  constructor() {
  }

  /*
  * Даннай методе устанавливает главное изображение в списке.
  * Если список не имеет главного изображения устанавливается первое найденное.
  * */
  setMainImage(positionImages: Array<PositionImageModel>, imageId: string): Array<PositionImageModel> {
    let tmpImage: Array<PositionImageModel> = [];
    console.log('Init values: ');
    console.log(positionImages);
    if (positionImages && positionImages.length > 0) {
      const isExistsMainImage = positionImages.find(it => it.mainImage);

      if ( isExistsMainImage ) {
        tmpImage = positionImages
          .map(positionImage => {
              positionImage.mainImage = (imageId && imageId === positionImage.image);
              return positionImage;
            }
          );
      } else {
        tmpImage = positionImages.map(it => it);
        tmpImage.forEach(it => it.mainImage = false);
        tmpImage[0].mainImage = true;
      }
    }

    return tmpImage;
  }

}
