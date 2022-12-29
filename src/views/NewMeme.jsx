import { useState } from "react";
import { apiService } from "../services/api/api.service";
import Footer from "../components/Footer"


export default function NewMeme() {

    const [newMeme, setNewMeme] = useState()
    const [title, setTitle] = useState()
    const [user, setUser] = useState()
    const [link, setLink] = useState()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert('Please add the title')
        }
        else if (!user) {
            alert('Please add the user name')
        }
        else if (!link) {
            alert('Please add the meme link')
        }
        else {
            setNewMeme({
                title: title,
                user: user,
                img: link,
                upvotes: 0,
                downvotes: 0,
            })


            console.log(newMeme)
            apiService.addMem(newMeme)
            setTitle('');
            setUser('');
            setLink('');
            alert('Your meme was added :)')
        }
    }

    return (
        <>
            <h2 className="page-title">The Lewandowski memes</h2>
            <form onSubmit={handleFormSubmit} >
                <label htmlFor="title">Title</label>
                <input id="title" type="text" value={title} placeholder="Enter the title" onChange={(e) => setTitle(e.target.value)}></input>
                <label htmlFor="user">User name</label>
                <input id="user" type="text" value={user} placeholder="Enter your name" onChange={(e) => setUser(e.target.value)}></input>
                <label htmlFor="link">Link</label>
                <input id="link" type="text" value={link} placeholder="Enter your meme link" onChange={(e) => setLink(e.target.value)}></input>
                <input type="submit" value="Add your meme" className="btn-submit"></input>
            </form>
            <Footer />
        </>);
}