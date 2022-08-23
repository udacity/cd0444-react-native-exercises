export const useUpdateFields = () => {

  const fields = {
    common_name: '',
    scientific_name: ''
  }

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)
      fields[field] = value
    },
  }
}
