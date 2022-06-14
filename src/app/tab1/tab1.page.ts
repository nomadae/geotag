import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

interface Item {
  name: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router,
              private firebaseService: FirebaseService,
    ) { }

  save(name: HTMLInputElement): void {
    console.log(name.value);
    this.firebaseService.createDocument({name: name.value}, 'nombres', this.firebaseService.createID());
    // this.router.navigate(['tabs/tab2']);
  }

}
