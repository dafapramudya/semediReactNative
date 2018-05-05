import axios from 'axios';

export function fetchHeroes(){
    return {
        type: "FETCH_HEROES",
        payload: axios.get(`${uri}/heroes`)
    }
}