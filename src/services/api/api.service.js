import { memesList } from "../../data/memesList"

let memsData = memesList;


// Zakładamay ze memy znajduja sie w zasobie zewnetrznym, np baza, wtedy do podmiany podczas przesniesienia danych jest wyłacznie logika w samym serwisie
const apiServiceDef = () => {
    const getRegularMems = async () => {
        return new Promise((resolve) => {
            const mems = memsData.filter(({ upvotes, downvotes }) => upvotes - downvotes <= 5)
            //const mems = memsData.filter((mem) => mem.upvotes - mem.downvotes <= 5)
            resolve(mems)
        })
    }

    const getHotMems = async () => {
        return new Promise((resolve) => {
            const mems = memsData.filter(({ upvotes, downvotes }) => upvotes - downvotes > 5)
            resolve(mems)
        })
    }

    const addMem = async (mem) => {
        return new Promise((resolve) => {
            memsData = [...memsData, { ...mem, id: memsData.length + 1 }]
            resolve()
        })
    }


    const changeMem = async (id, mem) => {
        return new Promise((resolve) => {
            const memToChangeIndex = memsData.findIndex(({ id: elId }) => elId === id)
            memsData[memToChangeIndex] = { ...mem, id }
            resolve()
        })
    }

    return {
        getRegularMems,
        getHotMems,
        addMem,
        changeMem
    }


}

export const apiService = apiServiceDef()