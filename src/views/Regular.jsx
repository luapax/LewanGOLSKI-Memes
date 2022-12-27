import { useEffect, useState } from "react";
import MemComponent from "../components/Mem";
import { apiService } from "../services/api/api.service";


export default function Regular() {
    const [mems, setMems] = useState([])

    const getMems = async () => {
        const memsData = await apiService.getRegularMems();
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

