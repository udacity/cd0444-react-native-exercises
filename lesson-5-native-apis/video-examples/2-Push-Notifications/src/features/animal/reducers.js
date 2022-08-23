import { createSlice } from '@reduxjs/toolkit'

const name = 'animal'

const initialState = {
    list: {
        animals: []
    },
    form: {
        fields: {
            common_name: null,
            scientific_name: null,
        },
    },
}

const reducers = {
    
    createAnimal: (state) => {
        // nothing happens here yet
    },
    createAnimalResult: (state, { payload }) => {
        state.list.animals = payload
    },
    createAnimalError: (state, { payload }) => {
        // nothing happens here yet
    },
    createAnimalReset: (state) => {
        // nothing happens here yet
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
    loadAnimals: (state) => {
        // state.status = 
    },
    loadResult: (state, { payload }) => {
        state.list.animals = payload
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
    setFormField,
    loadAnimals,
    loadResult
} = slice.actions

export default slice.reducer
