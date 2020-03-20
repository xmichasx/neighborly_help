import { FirebaseActivityType } from './firebase-activity-type';
import { firestore } from 'firebase';
import { FirebaseHelpRequestState } from './firebase-help-request-state';
import { FirebaseAddress } from './firebase-address';
import { FirebaseRate } from './firebase-rate';

export interface FirebaseHelpRequest {
  id: string;
  creatorID: string;
  type: FirebaseActivityType;
  date: firestore.Timestamp;
  state: FirebaseHelpRequestState;
  details: string;
  creatorPhoneNumber: string;
  localization: firestore.GeoPoint;
  epidemicDanger: boolean;
  address: FirebaseAddress;
  executorPhoneNumber?: string;
  executorID?: string;
  executionRate?: FirebaseRate;
}
