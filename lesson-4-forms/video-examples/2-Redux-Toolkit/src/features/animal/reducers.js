import { createSlice } from '@reduxjs/toolkit'

const name = 'animal'

const initialState = {
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
        // nothing happens here yet
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
    setFormField
} = slice.actions

export default slice.reducer
