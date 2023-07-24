import { useEffect } from 'react';
import axios from 'axios'

function useAuth(code) {

    let ignore = false;
    useEffect(() => {
        if(!ignore){
            axios.post('https://spotify-mern-api-106e03b8fd0b.herokuapp.com/login', {
            code
            }).then (res => {
                console.log(res.data)
            }).catch((err) => {
                window.location ='/'
            })
        }
        return () => {
            ignore = true;
        }
    }, [code])
}

export default useAuth;

