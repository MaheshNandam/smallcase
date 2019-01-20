import { takeLatest, all, fork } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
// import { networkSaga } from 'react-native-offline';


/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GalleryTypes } from '../Redux/GalleryRedux';
import { HistoricalTypes } from '../Redux/HistoricalRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getSmallCases } from './GallerySaga';
import { getHistorical } from './HistoricalSaga'; 

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    // some sagas receive extra parameters in addition to an action
    takeLatest(GalleryTypes.GET_SMALL_CASES, getSmallCases, api),
    takeLatest(HistoricalTypes.GET_HISTORICAL_DATA, getHistorical, api)
    // fork(networkSaga, { checkConnectionInterval: 20000 })
  ])
}
