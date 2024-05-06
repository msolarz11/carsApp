import { createStore } from 'vuex'

import cars from './cars.js'

const modules = {
    cars,
}

export const store = createStore({    
    modules,
})