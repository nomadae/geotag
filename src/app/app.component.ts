import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public photos: PhotoService) {}

  ngOnInit(): void {
      // this.photos.populateImages();
  }
}

