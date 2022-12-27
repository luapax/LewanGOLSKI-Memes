import { apiService } from "../services/api/api.service";

export default function NewMeme() {

    const handleNewMem = async (e) => {

        // dodac dane z inputow do tablicy i const mem z lekcji o inputach
        console.log(e.target.value);

        e.preventDefault();
        await apiService.addMem()
    }

    return (
        <>
            <form>
                <label>Title</label>
                <input></input>
                <label>User name</label>
                <input></input>
                <label>Link</label>
                <input></input>
                <button type="submit" onClick={handleNewMem}>Add meme</button>
            </form>
            <h1>This is NewMeme</h1>
        </>);
}