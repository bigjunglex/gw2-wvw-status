import "./style.css";
import { getMatch, getServersName, getId, getNames } from "./imp/api.js"
import { autocomplete } from "./imp/searchbar.js";

const inputWorld = document.getElementById("world");
const formWorld = document.getElementById('world_name');
const resContainer = document.querySelector('.result-box')
const matchesUrl = ' https://api.guildwars2.com/v2/wvw/matches?world='


formWorld.addEventListener('submit', async (x) => {
    x.preventDefault();
    
    const list = await getServersName();
    const world = inputWorld.value;
    const url = matchesUrl + getId(world, list);

    getMatch(url)
})



autocomplete(inputWorld, resContainer);