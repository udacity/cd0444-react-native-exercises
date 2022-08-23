import { createSlice } from '@reduxjs/toolkit'
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers'

const name = 'animal'

const initialState = {
    list: {
        status: PENDING,
        animals: []
    },
    form: {
        fields: {
            common_name: null,
            scientific_name: null,
        },
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    error: {
        message: ''
    }
}

const reducers = {
    createAnimal: (state) => {
        state.create.status = REQUESTING
    },
    createAnimalResult: (state, { payload }) => {
        state.create.status = SUCCESS
        state.list.animals = payload
    },
    createAnimalError: (state, { payload }) => {
        state.create.status = ERROR
        state.error.message = payload
    },
    createAnimalReset: (state) => {
        state.create = initialState.create
    },
    editAnimal: (state, { payload }) => {
        state.edit.status = REQUESTING
    },
    editAnimalResult: (state, { payload }) => {
        state.edit.status = SUCCESS
        state.list.animals = payload
    },
    editAnimalError: (state) => {
        state.edit.status = ERROR
        state.error.message = payload
    },
    editAnimalReset: (state) => {
        state.edit = initialState.edit
    },
    setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    createAnimal,
    createAnimalResult,
    createAnimalError,
    createAnimalReset,
    editAnimal,
    editAnimalResult,
    editAnimalError,
    editAnimalReset,
    setFormField
} = slice.actions

export default slice.reducer
