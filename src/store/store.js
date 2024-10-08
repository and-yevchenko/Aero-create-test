import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAddForms = create(
  persist(
    (set) => ({
      forms: [],
      addForm: (object) =>
        set((state) => {
          return { forms: [...state.forms, object] };
        }),
      deleteForm: (id) =>
        set((state) => {
          return { forms: state.forms.filter((form) => form.id !== id) };
        }),
      updateForm: (el, object) =>
        set((state) => {
          return {
            ...state,
            forms: state.forms.map((i) => (i.id === el.id ? object : i)),
          };
        }),
      clearAll: () =>
        set(() => {
          return { forms: [] };
        }),
    }),
    {
      name: 'forms-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useShuffleIsActive = create(
  persist(
    (set) => ({
      shuffle: false,
      setShuffle: () =>
        set((state) => {
          return { shuffle: !state.shuffle };
        }),
    }),
    {
      name: 'shuffle-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
