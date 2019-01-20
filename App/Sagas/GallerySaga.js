import { call, put, all } from 'redux-saga/effects'
import { path } from 'ramda'
import GalleryActions from '../Redux/GalleryRedux';

const smallCase = [
    'SCMO_0002',
    'SCMO_0003',
    'SCMO_0006',
    'SCNM_0003',
    'SCNM_0007',
    'SCNM_0008',
    'SCNM_0009'
];

export function* getSmallCases(api, action) {
    // make the call to the api
    try{
        const response = yield all(smallCase.map(SCID => call(api.getSmallCaseData, SCID)));
        // do data conversion here if needed
        yield put(GalleryActions.getSmallCasesSuccess(response))

    }catch(err){
        yield put(GalleryActions.getSmallCasesFailure())
    }    
}
