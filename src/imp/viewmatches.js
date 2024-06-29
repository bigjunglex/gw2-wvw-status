import {getWorld} from './api.js';

const worldNameFormater = (match, servers) => {
    match = match.all_worlds
    const worldNames = {};
    for (let side in match) {
        const modedSide = match[side].filter(n => n <= 3000);
        worldNames[side] = [];

        modedSide.forEach(id => {
            worldNames[side].push(getWorld(id, servers))
        });
    }
    return worldNames
}

export const matchGeneral = (match, servers, container) => {
    container.innerHTML = ''; 
    const worlds = worldNameFormater(match, servers);

    for (let side in worlds){
        console.log(side ,worlds[side])
        const sideEl = document.createElement('div');
        
        sideEl.classList.add(`${side}`)
        sideEl.style.backgroundColor = `${side}`
        container.appendChild(sideEl)


        worlds[side].forEach(world => {
            const worldEl = document.createElement('h5');
            worldEl.textContent = `${world}`
            sideEl.appendChild(worldEl)
        })

    }
}