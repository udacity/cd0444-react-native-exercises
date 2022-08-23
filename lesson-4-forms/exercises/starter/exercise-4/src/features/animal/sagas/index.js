import { all } from 'redux-saga/effects'
import { watchCreateAnimal } from './create'
import { watchEditAnimal } from './edit'

export default function* animal() {
    yield all([
        watchCreateAnimal(),
        watchEditAnimal(),
    ])
}
