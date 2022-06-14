import { Injectable } from '@angular/core';
import { map, finalize } from 'rxjs/operators';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: any[] = [];
  public downloadURL: Observable<string>;
  fb;

  constructor(private fireStorage: AngularFireStorage,
              private firebase: FirebaseService) { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100
    });


    const n = Date.now();
    const buffer = capturedPhoto.base64String;
    const filepath = `images/${n}`;
    const fileRef = this.fireStorage.ref(filepath);
    const task = fileRef.putString(buffer, 'base64', { contentType: 'image/png' });
    task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fb = url;
              }
              const newID = this.firebase.createID();
              this.firebase.createDocument({source: this.fb, name: n}, 'testing', newID);
              console.log(`Imagen subida con el id ${this.fb}`);
            });
          })
        )
        .subscribe(url => {
          if(url){
            console.log(url);
          }
        });

  }

  public populateImages() {
    this.firebase.getDocuments('testing').subscribe(res => {
        res.map( e  => {
          this.photos.unshift(e);
        });
    });
  }
}

