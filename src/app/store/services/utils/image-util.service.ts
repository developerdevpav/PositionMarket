import {Injectable} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
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
  public setMainImage(positionImages: Array<any>, imageId: string): Array<any> {
    if (positionImages && positionImages.length > 0) {
      const isExistsMainImage = positionImages.find(it => it.mainImage);

      if (isExistsMainImage) {
        if (imageId) {
          positionImages
            .forEach(positionImage => {
                positionImage.mainImage = (imageId === positionImage.image);
                return positionImage;
              }
            );
        }
      } else {
        positionImages.forEach(it => it.mainImage = false);
        positionImages[0].mainImage = true;
      }
    }

    return positionImages;
  }

  /*
  * method getFormData build FormData from list file
  * */
  private getFormData(fileList: FileList): FormData {
    const formData: FormData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('image', fileList.item(i));
    }
    return formData;
  }

  public uploadImages(fileList: FileList, uploadProgress: (percent: number) => void, response: (images: any[]) => void) {
    return this.imageService.upload(this.getFormData(fileList)).subscribe(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress: {
          uploadProgress((100 / event.total) * event.loaded);
          break;
        }
        case HttpEventType.Response: {
          const selectedImage: any[] = JSON.parse(event.body);
          if (selectedImage && selectedImage.length > 0) {
            response(selectedImage.map(this.convertImageToPositionImage));
          }
          break;
        }
      }
    });
  }


  public convertImageToPositionImage(image: any): any {
    return {
      id: null,
      image: image.id,
      mainImage: false,
      url: image.url
    };
  }

}
