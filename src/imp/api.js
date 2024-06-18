
export const getServersName = async () => {
    const url = 'https://api.guildwars2.com/v2/worlds?ids=all' 
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();

    return data
};

export const getMatch = async (url) => {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    const worlds = data.worlds;
    
    console.log(worlds)
    
    return worlds
};

export const getId = (world, list) => {
    if(!world) {
        console.log('not found')
    }else{
        const index = list.findIndex(i => i.name === world)
        return index ? list[index].id : 1001
    }
};
