import "./style.css";
import { getMatch } from "./imp/api.js"
import { autocomplete } from "./imp/searchbar.js";

console.log('loaded')

const inputWorld = document.getElementById("world");
const resContainer = document.querySelector('.result-box')
const matchesUrl = ' https://api.guildwars2.com/v2/wvw/matches?world=2006'


autocomplete(inputWorld, resContainer);


inputWorld.addEventListener('submit',async (x) => {
    x.preventDefault();
    let u = await getServersName()
    getMatch(matchesUrl)
    console.log(u)
})
