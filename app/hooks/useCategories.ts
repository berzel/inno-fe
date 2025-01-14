import {useEffect, useState} from "react";
import type {Category} from "~/types";
import axios from "~/lib/axios";

export default function useCategories() {
    const [categories, setCategories] = useState<Array<Category>>([]);

    useEffect(() => {
        (async () => {
            const categories = await axios.get('/categories/top').then(r => r.data.data);
            setCategories(categories);
        })()
    }, [])

    return {
        categories
    }
}
