import { all } from 'redux-saga/effects'
import animal from '../features/animal/sagas'

export default function* rootSaga() {
    yield all([
        animal(),
    ])
}