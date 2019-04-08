import {Injectable} from '@angular/core';
import {PositionImageModel} from '../../models/position.image.model';
import {HttpEventType} from '@angular/common/http';
import {ImageModel} from '../../models/image.model';
import {ApiImageService} from '../api-image.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUtilService {

  constructor(private imageService: ApiImageService) {
  }

  /*
  * This method set main image from list images
  * If the list doesn't have the main image, first found image is set
  * */
  public setMainImage(positionImages: Array<PositionImageModel>, imageId: string): Array<PositionImageModel> {
    let tmpImage: Array<PositionImageModel> = [];
    console.log('Init values: ');
    console.log(positionImages);
    if (positionImages && positionImages.length > 0) {
      const isExistsMainImage = positionImages.find(it => it.mainImage);

      if (isExistsMainImage) {
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

  /*
  * method getFormData build FormData from list file
  * */
  public getFormData(fileList: FileList): FormData {
    const formData: FormData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('image', fileList.item(i));
    }
    return formData;
  }

  public uploadImages(fileList: FileList, uploadProgress: (percent: number) => void, response: (images: PositionImageModel[]) => void) {
    return this.imageService.uploadImages(fileList).subscribe(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress: {
          uploadProgress((100 / event.total) * event.loaded );
          break;
        }
        case HttpEventType.Response: {
          const selectedImage: ImageModel[] = JSON.parse(event.body);
          if (selectedImage && selectedImage.length > 0) {
            response(selectedImage.map(this.convertImageToPositionImage));
          }
          break;
        }
      }
    });
  }


  public convertImageToPositionImage(image: ImageModel): PositionImageModel {
    return {
      id: null,
      image: image.id,
      mainImage: false,
      url: image.url
    };
  }

}
