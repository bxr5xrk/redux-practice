import {put, takeEvery} from 'redux-saga'
import { addCash } from '../store/cashReducer'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* workerInc() {
    yield delay(2000)
    yield put(addCash(1))
}

function* workerDec() {

} 

function* countWatcher() {
    yield takeEvery
} 