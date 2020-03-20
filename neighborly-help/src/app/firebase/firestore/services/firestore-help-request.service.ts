import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { HelpRequest } from 'src/app/model/help-request';
import { FirestoreCollectionsNames } from '../enum/firestore-collections-names';
import { FirebaseHelpRequest } from '../firebase-model/firebase-help-request';
import { first, map } from 'rxjs/operators';
import { mapHelpRequestFromFirebase } from '../utils/firebase-object-mappers';

@Injectable({
  providedIn: 'root',
})
export class FirestoreHelpRequestService {
  constructor(private database: AngularFirestore) {}

  public getAll(): Observable<HelpRequest[]> {
    const firestoreResponse: Observable<FirebaseHelpRequest[]> = <
      Observable<FirebaseHelpRequest[]>
    >this.database
      .collection(FirestoreCollectionsNames.HELP_REQUESTS)
      .valueChanges({ idField: 'id' });
    return <Observable<HelpRequest[]>>firestoreResponse.pipe(
      first(),
      map(firebaseHelpList =>
        firebaseHelpList.map(element => mapHelpRequestFromFirebase(element))
      )
    );
  }
}
