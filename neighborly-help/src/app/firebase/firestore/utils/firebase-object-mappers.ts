import { HelpRequest } from 'src/app/model/help-request';
import { FirebaseHelpRequest } from '../firebase-model/firebase-help-request';
import { FirebaseAddress } from '../firebase-model/firebase-address';
import { Rate } from 'src/app/model/rate';
import { FirebaseRate } from '../firebase-model/firebase-rate';
import { ActivityType } from 'src/app/model/activity-type';
import { FirebaseActivityType } from '../firebase-model/firebase-activity-type';
import { FirebaseHelpRequestState } from '../firebase-model/firebase-help-request-state';
import { HelpRequestState } from 'src/app/model/help-request-state';
import { Coords } from 'src/app/model/coords';
import { firestore } from 'firebase';
import { Address } from 'src/app/model/address';

export function mapHelpRequestFromFirebase(
  firebaseHelpRequest: FirebaseHelpRequest
): HelpRequest {
  return <HelpRequest>{
    id: firebaseHelpRequest.id,
    creatorID: firebaseHelpRequest.creatorID,
    type: mapActivityTypeFromFirebase(firebaseHelpRequest.type),
    date: firebaseHelpRequest.date.toDate(),
    state: mapHelpRequestStateFromFirebase(firebaseHelpRequest.state),
    details: firebaseHelpRequest.details,
    creatorPhoneNumber: firebaseHelpRequest.creatorPhoneNumber,
    localization: mapGeoPointToCoords(firebaseHelpRequest.localization),
    epidemicDanger: firebaseHelpRequest.epidemicDanger,
    address: mapAdressFromFirebase(firebaseHelpRequest.address),
    executorPhoneNumber: firebaseHelpRequest.executorPhoneNumber,
    executorID: firebaseHelpRequest.executorID,
    executionRate: mapRateFromFirebase(firebaseHelpRequest.executionRate),
  };
}

export function mapAdressFromFirebase(
  firebaseAddress: FirebaseAddress
): Address {
  return <Address>{
    region: firebaseAddress.region,
    city: firebaseAddress.city,
    street: firebaseAddress.street,
    postalCode: firebaseAddress.postalCode,
    local: firebaseAddress.local,
  };
}

export function mapRateFromFirebase(firebaseRate: FirebaseRate): Rate {
  return firebaseRate
    ? <Rate>{
        rate: firebaseRate.rate,
        comment: firebaseRate.comment,
      }
    : undefined;
}

export function mapActivityTypeFromFirebase(
  firebaseActivityType: FirebaseActivityType
): ActivityType {
  return <ActivityType>(<unknown>firebaseActivityType);
}

export function mapHelpRequestStateFromFirebase(
  firebaseHelpRequestState: FirebaseHelpRequestState
): HelpRequestState {
  return <HelpRequestState>(<unknown>firebaseHelpRequestState);
}

export function mapGeoPointToCoords(localization: firestore.GeoPoint): Coords {
  return <Coords>{
    latitude: localization.latitude,
    longitude: localization.longitude,
  };
}
