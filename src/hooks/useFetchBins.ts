import { db } from "@/config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

type Bin = {
    id: string,
    date: string,
    title: string,
    description: string,
    tag: string
}

const useFetchBins = (collectionName: string) => {
    const [data, setData] = useState<Bin[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, collectionName));
                const fetchedData = querySnapshot.docs.map<Bin>(doc => {
                    return { id: doc.id, title: doc.data().title, description: doc.data().description, date: doc.data().date, tag: doc.data().tag }
                });
                setData(fetchedData);
            } catch (e) {
                console.error("Error fetching data:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collectionName]);

    return { isLoading, data };
};

export default useFetchBins;
