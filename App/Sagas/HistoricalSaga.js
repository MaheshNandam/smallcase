import { call, put, all } from 'redux-saga/effects'
import { path } from 'ramda'
import HistoricalTypes from '../Redux/HistoricalRedux';
import { NavigationActions } from 'react-navigation';

export function* getHistorical(api, action) {
    const { scid } =  action;
    // make the call to the api
    const response = yield call(api.getHistoricalData, scid);
    // console.tron.log(response)
    if(response.ok){
        const data = response.data.data
        yield put(HistoricalTypes.getHistoricalDataSuccess(data))
        yield put(NavigationActions.navigate({ routeName: 'imageDetails' }))
    }else{
        yield put(HistoricalTypes.getHistoricalDataFailure())
    }
}
