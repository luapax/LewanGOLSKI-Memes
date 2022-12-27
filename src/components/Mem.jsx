import { apiService } from "../services/api/api.service";

const Mem = ({ mem, onMemStatChange }) => {

    const onUp = async () => {
        const memChanged = { ...mem }
        memChanged.upvotes += 1;
        await apiService.changeMem(mem.id, memChanged)
        await onMemStatChange()
    }

    const onDown = async () => {
        const memChanged = { ...mem }
        memChanged.downvotes += 1;
        await apiService.changeMem(mem.id, memChanged)
        await onMemStatChange()
    }
    return <div>
        <h3>{mem.title}</h3>
        <img src={mem.img} alt={mem.title} />
        <button onClick={onUp}>Up</button><button onClick={onDown}>Down</button>
    </div>
}

export default Mem