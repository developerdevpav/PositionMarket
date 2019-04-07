import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {APIAction} from '../actions/abstarct.actions';
import {filter, map, switchMap} from 'rxjs/operators';
import {ApiImageService} from '../services/api-image.service';
import {ApiImageUpload, LoadSuccessImages} from '../actions/image.action';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {ImageModel} from '../models/image.model';

@Injectable()
export class ImageEffects {

  constructor(private actions$: Actions, private imageService: ApiImageService) {
  }

  @Effect({dispatch: true})
  uploadImage$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.CREATE + '[Image]'),
    map((action: ApiImageUpload) => action.payload),
    switchMap((uploadFileList: FileList) =>
      this.imageService.uploadImages(uploadFileList)
        .pipe(
          filter(event => event.type === HttpEventType.Response),
          map((event: HttpResponse<any>) => JSON.parse(event.body)),
          map((body: ImageModel[]) => new LoadSuccessImages(body))
        )
    )
  );

}
