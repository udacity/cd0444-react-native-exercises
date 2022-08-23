import { all } from 'redux-saga/effects'
import { watchLoadAnimals } from './load'
import { watchCreateAnimal } from './create'

export default function* animal() {
    yield all([
        watchLoadAnimals(),
        watchCreateAnimal(),
    ])
}
