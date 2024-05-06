import { getCars } from "@/api"

const cars = {

    state() {
        return { 
            carsList: [],
            carsLoading: false,
            carsError: null
         }
    },
    
    mutations: { 
        SET_CARS_LIST(state, newCars) {
            state.carsList = newCars
         },
         SET_CARS_LOADING(state, status){
            state.carsLoading = status
            console.log(state.carsLoading);
         }

     },
    
    getters: { 
        GET_CARS_LIST(state) {
            return state.carsList
        },
        GET_CARS_LOADING(state){
            return state.carsLoading 
        }
     },
    
    actions: { 
        async FETCH_CARS({ state, commit }) {

            // najpierw ustawiamy stan ładowania na true
        
            commit("SET_CARS_LOADING", true)
        
            // potem wywołujemy funkcję z api, która
            // odbiera dane z serwera (poprzez axios) i ustawia listę cars w store
            // w razie błędu ustawia error w store (catch)
            // niezależnie od błędu lub jego braku (finally), kończy loading
        
            try {
                const data = await getCars()
                console.log(data.cars);
                commit("SET_CARS_LIST", data.cars)
            }
            catch (err) {
                console.log("err", err);
                // commit("SET_CARS_ERROR", "server error!!!")
            }
            finally {
                console.log("finally");
                commit("SET_CARS_LOADING", false)

            }
        }
     }

}

export default cars