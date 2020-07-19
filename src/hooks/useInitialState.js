import { useState, useEffect } from 'react';
import data from '../data/usuarios.json';

export function useInitialState(term) {
    const [users, setUsers] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term});

    useEffect(() => {
        setUsers([]);
        const fetchData = async () => {
            try {
                const rawData = await data.get('users/search', searchParams);
                const resp = await rawData.json();
                setUsers(resp.users);
                setAmountResults(resp.total);
            } catch(e) {
                console.log(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [users, amountResults, searchParams, setSearchParams];
}



