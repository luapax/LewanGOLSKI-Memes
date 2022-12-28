import { useEffect, useState } from "react";
import MemComponent from "../components/MemComponent";
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
        <><h2 className="page-title">The Lewandowski memes</h2>
            {mems.map(mem => <MemComponent key={mem.id} mem={mem} onMemStatChange={onMemStatChange} />)}
        </>);
}

