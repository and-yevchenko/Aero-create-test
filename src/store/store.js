import { create } from "zustand";
import { nanoid } from 'nanoid';

export const useAddForms = create((set) => ({
    forms: [
        { id: nanoid(), title: "", variants: [{ id: nanoid(), answer: "" }] }
    ],

    addForm: () => set((state) => {
        const newForm = { id: nanoid(), title: "", variants: [{ id: nanoid(), answer: "" }] }
        return { forms: [...state.forms, newForm] }
    }),
    updateFormTitle: (id, title) => set((state) => {
        state.forms.find(form => form.id === id).title = title
        return { forms: state.forms }
    }),
    deleteForm: (id) => set((state) => {
        return { forms: state.forms.filter((form) => form.id !== id)}
    }),

    addVariant: (id) => set((state) => {
        state.forms.find(form => form.id === id).variants = [...state.forms.find(form => form.id === id).variants, {id: nanoid(), answer: ""}]
        return { forms: state.forms }
    }),
    updateFormVariants: (id, variantID, answer) => set((state) => {
        const findVariants = state.forms.find(form => form.id === id).variants
        findVariants.find(variant => variant.id === variantID).answer = answer
        return { forms: state.forms }
    }),
    addTrueVariant: (id, variantID) => set((state) => {
        const findVariants = state.forms.find(form => form.id === id).variants
        findVariants.find(variant => variant.id === variantID)['isTrue'] = true
        return { forms: state.forms }
    }),
    deleteTrueVariant: (id, variantID) => set((state) => {
        const findVariants = state.forms.find(form => form.id === id).variants
        delete findVariants.find(variant => variant.id === variantID).isTrue
        return { forms: state.forms }
    }),
    deleteVariant: (id, variantID) => set((state) => {
        const filterVariant = state.forms.find(form => form.id === id).variants.filter((variant) => variant.id !== variantID)
        state.forms.find(form => form.id === id).variants = filterVariant
        return { forms: state.forms }
    }),
}))

export const useReUpdate = create((set) => ({
    arrUpdate: [{}],
    updates: () => set((state) => {
        console.log(state.arrUpdate);
        return { arrUpdate: [...state.arrUpdate] }
    })
}))