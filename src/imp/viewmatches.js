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


export const matchGeneral = (match, servers, container, stats) => {
    container.innerHTML = ''; 
    const worlds = worldNameFormater(match, servers);

    const kills = stats.kills;
    const victory_points = stats.victory_points;
    const deaths = stats.deaths;
    const scores = stats.scores


    for (let side in worlds){
        const sideEl = document.createElement('div');
        sideEl.classList.add(`${side}`)
        sideEl.style.backgroundColor = `${side}`
        container.appendChild(sideEl)


        worlds[side].forEach(world => {
            const worldEl = document.createElement('h5');
            worldEl.textContent = `${world}`
            sideEl.appendChild(worldEl)
        })

        const ul = document.createElement('ul');
        
        const scoreEl = document.createElement('li');
        scoreEl.textContent = `scores : ${scores[side]}`
        ul.appendChild(scoreEl);
        
        const vp = document.createElement('li');
        vp.textContent = `⭐ : ${victory_points[side]}`
        ul.appendChild(vp);
        
        const killEl = document.createElement('li');
        killEl.textContent = `kills : ${kills[side]}`
        ul.appendChild(killEl);
        
        const deathEl = document.createElement('li');
        deathEl.textContent = `deaths : ${deaths[side]}`
        ul.appendChild(deathEl);

        sideEl.appendChild(ul)
    }
}

