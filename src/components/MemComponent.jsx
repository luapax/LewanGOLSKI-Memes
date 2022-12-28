import { apiService } from "../services/api/api.service";

const MemComponent = ({ mem, onMemStatChange }) => {

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
    return <div className="memComponent">
        {/* <h4>{mem.title}</h4>
        <h5>Author: {mem.user}</h5> */}
        <img src={mem.img} alt={mem.title} />
        <div className="btn-vote">
            <button onClick={onUp}>So funny!👍🏼</button>
            <button onClick={onDown}>Meeeh..👎🏼</button></div>
    </div>
}

export default MemComponent