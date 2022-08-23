import { createSlice } from '@reduxjs/toolkit'

const name = 'book'

const initialState = {
    library: [],
    form: {
        fields: {
            title: null,
            author: null,
            publication_date: null,
        },
    },
}

const reducers = {
    createBookResult: (state, payload) => {
      state.library = payload
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
    createBookResult,
    setFormField
} = slice.actions

export default slice.reducer
