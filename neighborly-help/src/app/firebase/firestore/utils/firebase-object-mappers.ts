import { HelpRequest } from 'src/app/model/help-request';
import { FirebaseHelpRequest } from '../firebase-model/firebase-help-request';
import { FirebaseAddress } from '../firebase-model/firebase-address';
import { Rate } from 'src/app/model/rate';
import { FirebaseRate } from '../firebase-model/firebase-rate';
import { AppUser } from '../firebase-model/firebase-app-user';
import { type } from 'os';
import { ActivityType } from 'src/app/model/activity-type';
import { FirebaseActivityType } from '../firebase-model/firebase-activity-type';
import { FirebaseHelpRequestState } from '../firebase-model/firebase-help-request-state';
import { HelpRequestState } from 'src/app/model/help-request-state';
import { Coords } from 'src/app/model/coords';
import { firestore } from 'firebase';
import { Address } from 'src/app/model/address';

function mapHelpRequestFromFirebase(
  firebaseHelpRequest: FirebaseHelpRequest
): HelpRequest {
  return <HelpRequest>{
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

function mapAdressFromFirebase(firebaseAddress: FirebaseAddress): Address {
  return <Address>{
    region: firebaseAddress.region,
    city: firebaseAddress.city,
    street: firebaseAddress.street,
    postalCode: firebaseAddress.postalCode,
    local: firebaseAddress.local,
  };
}

function mapRateFromFirebase(firebaseRate: FirebaseRate): Rate {
  return <Rate>{
    rate: firebaseRate.rate,
    comment: firebaseRate.comment,
  };
}

function mapActivityTypeFromFirebase(
  firebaseActivityType: FirebaseActivityType
): ActivityType {
  return <ActivityType>(<unknown>firebaseActivityType);
}

function mapHelpRequestStateFromFirebase(
  firebaseHelpRequestState: FirebaseHelpRequestState
): HelpRequestState {
  return <HelpRequestState>(<unknown>firebaseHelpRequestState);
}

function mapGeoPointToCoords(localization: firestore.GeoPoint): Coords {
  return <Coords>{
    latitude: localization.latitude,
    longitude: localization.longitude,
  };
}
