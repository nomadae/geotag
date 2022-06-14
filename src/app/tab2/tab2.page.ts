import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public photoService: PhotoService,
              private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.photoService.populateImages();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
