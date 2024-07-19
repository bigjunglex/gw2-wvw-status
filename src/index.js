import "./style.css";
import { getMatch, getWorldsList, getId, getFullStats} from "./imp/api.js"
import { autocomplete } from "./imp/searchbar.js";
import { matchGeneral } from "./imp/viewmatches.js";

const inputWorld = document.getElementById('world');
const formWorld = document.getElementById('world_name');
const autoContainer = document.querySelector('.result-box')
const contentContainer = document.getElementById('content')
const matchesUrl = 'https://api.guildwars2.com/v2/wvw/matches/overview?world='


formWorld.addEventListener('submit', async (x) => {
    x.preventDefault();
    
    const list = await getWorldsList();
    const world = inputWorld.value;
    const url = matchesUrl + getId(world, list);
    const match = await getMatch(url);
    const fullstats = await getFullStats(match);

    matchGeneral(match, list, contentContainer, fullstats)
})



autocomplete(inputWorld, autoContainer);