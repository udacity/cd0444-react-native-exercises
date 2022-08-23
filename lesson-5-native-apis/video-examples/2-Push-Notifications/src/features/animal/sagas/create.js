import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as actions from '../reducers'
import { set } from '../../../utilities/async_storage'
import { newAnimalNotification } from '../../../utilities/notifications'

export function* watchCreateAnimal() {
    yield takeLatest(actions.createAnimal.toString(), takeCreateAnimal)
}

export function* takeCreateAnimal() {
    console.log('Starting fetch request to API')
    try {
        const fields = yield select(state => state.animal.form.fields)
        const animals = yield select(state => state.animal.list.animals)

        const animal = {
            id: animals.length + 1,
            ...fields,
        }

        // pretend call to API
        yield delay(500)

        const result = [animal, ...animals]

        yield set('ANIMALS_KEY', result)
        yield newAnimalNotification()

        yield put(actions.createAnimalResult(result))
    } catch (error) {
        yield put(actions.createAnimalError(error.toString()))
    }
}



