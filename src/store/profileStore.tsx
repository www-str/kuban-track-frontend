import { create } from 'zustand'



export const profileStore = create((set) => ({
    token: '',
    setToken: (token: string) => set({ token: token }),
}))