const API_KEY = import.meta.env.VITE_FACEIT_API_KEY;
const BASE_PATH = import.meta.env.VITE_FACEIT_API_PATH
const REQUEST_INIT: RequestInit = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
};


enum EPlayerRoutes {
    players = '/players'
}

export const getPlayerDetails = (nickname: string): Promise<any> => {
    console.log(BASE_PATH)
    return new Promise((resolve, reject) => fetch(`${BASE_PATH}${EPlayerRoutes.players}?nickname=${nickname}`, REQUEST_INIT)
        .then((js) => js.json().then((res) => console.log(res)))
        .catch((e) => reject(e))
    )
}