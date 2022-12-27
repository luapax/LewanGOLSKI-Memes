import { useEffect, useState } from "react";
import { apiService } from "../services/api/api.service";
import MemComponent from "../components/Mem";

export default function Home() {
    const [mems, setMems] = useState([])

    const getMems = async () => {
        const memsData = await apiService.getHotMems();
        setMems(memsData)
    }

    useEffect(() => {
        getMems()
    }, [])

    const onMemStatChange = async () => {
        await getMems()
    }

    return (
        <>
            {mems.map(mem => <MemComponent key={mem.id} mem={mem} onMemStatChange={onMemStatChange} />)}
        </>);
}