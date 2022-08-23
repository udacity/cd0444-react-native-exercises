import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { get } from '../../../utilities/async_storage'

export function* watchLoadAnimals() {
    yield takeLatest(actions.loadAnimals.toString(), takeLoadAnimals)
}

export function* takeLoadAnimals() {
    try {
        const animals = yield get('ANIMALS_KEY')

        yield delay(1500)

        yield put(actions.loadResult(animals))
    } catch (error) {
        yield put(actions.loadResult([]))
    }
}

