import { createSlice } from '@reduxjs/toolkit'
import { PENDING, INPROGRESS, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers'

const name = 'animal'

const initialState = {
    list: {
        status: PENDING,
        animals: [],
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    form: {
        fields: {
            common_name: null,
            scientific_name: null,
        },
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
        state.form.fields = initialState.form.fields
        state.create = initialState.create
    },
    createAnimalError: (state, { payload }) => {
        state.create.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    editAnimal: (state, { payload }) => {
        state.edit.status = REQUESTING
    },
    setForm: (state, { payload }) => {
        const animal = state.list.animals.find(a => a.id = payload)

        if (animal) {
            state.form.fields = animal
        } else {
            state.error.message = `could not find animal with id: ${payload}`
        }
    },
    editAnimalResult: (state, { payload }) => {
        state.edit.status = SUCCESS
        state.list.animals = payload
        state.form.fields = initialState.form.fields
        state.edit = initialState.edit
    },
    editAnimalError: (state) => {
        state.edit.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    editAnimalStatus: (state, { payload }) => {
        state.edit = payload
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
    setForm,
    editAnimal,
    editAnimalResult,
    editAnimalError,
    editAnimalStatus,
    setFormField,
} = slice.actions

export default slice.reducer
