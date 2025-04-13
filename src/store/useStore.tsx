import { create } from 'zustand'
import axios from '../https/axios.ts'
import { useStoreType } from './types.ts';

export const useStore = create<useStoreType>((set, get) => ({
    token: localStorage.getItem('authToken') || null,
    isAuth: !!localStorage.getItem('authToken'),

    register: async ({ login, password }) => {
        try {
            const res = await axios.get('/register', {
                params: {
                    login,
                    password,
                }
            });
            if (res.data.ok) {
                return res.data.ok;
            }
        } catch (e) {
            console.error(e);
        }
    },
    auth: async ({ login, password }) => {
        try {
            const res = await axios.get('/login', {
                params: {
                    login,
                    password,
                }
            });
            if (res.data.ok) {
                localStorage.setItem('authToken', res.data.ok.token);
                set({ token: res.data.ok.token, isAuth: true });
            }
        } catch (e) {
            console.error(e);
        }
    },
    logout: () => {
        localStorage.removeItem('authToken')
        set({ token: null, isAuth: false });
    },
    getProfile: async () => {
        try {
            const res = await axios.get('/profile', {
                headers: {
                    "Authorization": `Bearer ${get().token}`,
                }
            });
            if (res.data.ok) {
                return res.data.ok; 

            }
        } catch (e) {
            console.error(e);
        }
    },
    getRubrics: async () => {
        try {
            const res = await axios.get('/get_rubrics');
            if (res.data.ok) {
                return res.data.ok;
            }
        } catch (e) {
            console.error(e);
        }
    },
    getPlaces: async ({ city, query }) => {
        try {
            const res = await axios.get('/find_place', {
                params: {
                    city,
                    q: query,
                }
            });
            if (res.data.ok) {
                return res.data.ok;
            }
        } catch (e) {
            console.error(e);
        }
    },
    getHalalPlaces: async ({ city, query }) => {
        try {
            const res = await axios.get('/find_branch', {
                params: {
                    city,
                    q: query,
                }
            });
            if (res.data.ok) {
                return res.data.ok;
            }
        } catch (e) {
            console.error(e);
        }
    },
    getAchievements: async () => {
        try {
            const res = await axios.get('/achievements');
            if (res.data.ok) {
                return res.data.ok;
            }
        } catch (e) {
            console.error(e);
        }
    },
    setAchievement: async (id) => {
        try {
            const res = await axios.get('/eran_achievement', {
                params: { id },
                headers: {
                    "Authorization": `Bearer ${get().token}`,
                }
            });
            if (res.data.ok) {
                return res.data.ok;
            }
        } catch (e) {
            console.error(e);
        }
    },
}))