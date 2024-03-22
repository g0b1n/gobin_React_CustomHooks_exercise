import axios from "axios";
import React, { useState, useEffect } from "react";
import {v1 as uuid} from "uuid";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const addData = async(endpoint = "") => {
        setIsLoading(true);
        try {
            const fullUrl = `${baseUrl}${endpoint}`;
            const response = await axios.get(fullUrl);
            
            setData(prevData => [...prevData, {...response.data, id: uuid()}]);

        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }
    return [data, addData, isLoading, error]
}

export default useAxios;