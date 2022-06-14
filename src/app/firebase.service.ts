import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private firebase: AngularFirestore,
              ) { }

  public createID(): string {
    return this.firebase.createId();
  }

  public createDocument<Type>(data: Type, url: string, id: string) {
    const itemsCollection: AngularFirestoreCollection<Type> = this.firebase.collection<Type>(url);
    return itemsCollection.doc(id).set(data);
   }

  public getDocuments<Type>(path: string){
    const itemsCollection: AngularFirestoreCollection<Type> = this.firebase.collection<Type>(path);
    return itemsCollection.valueChanges();
  }

}
