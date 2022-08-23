import { all } from 'redux-saga/effects'
import { watchCreateAnimal } from './create'

export default function* animal() {
    yield all([
        watchCreateAnimal(),
    ])
}
