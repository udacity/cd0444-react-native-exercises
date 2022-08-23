import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'

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

        yield put(actions.createAnimalResult(result))
    } catch (error) {
        yield put(actions.createAnimalError(error.toString()))
    }
}

