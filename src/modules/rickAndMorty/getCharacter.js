export const getChar =async (mensaje) => {

    const id = mensaje.split("/personaje/")[1]

    const response =await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const {name, image, status} = await response.json()

    return {name, image, status}
}

export const deadChars = async (mensaje) =>{

    const dt = mensaje.split('/') // [dead, name]

    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${dt[1]}&status=${dt[0]}`)
    const { results } = await res.json()

    const info = {
        pj_uno: results[0],
        pj_dos: results[1],
    }

    const episodesPJUno = await fetch(info.pj_uno.episode[0])
    const resUno = await episodesPJUno.json()
    
    const episodesPJDos = await fetch(info.pj_dos.episode[0])
    const resDos = await episodesPJDos.json()

    return { pj_uno: results[0], epidoseUno: resUno.name , pj_dos: results[1], episodesDos: resDos.name}

} 
console.log(await deadChars("dead/morty"))