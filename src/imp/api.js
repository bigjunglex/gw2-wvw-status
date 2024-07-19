
export const getWorldsList = async () => {
    const url = 'https://api.guildwars2.com/v2/worlds?ids=all' 
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();

    return data
};

export const getMatch = async (url) => {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    // const worlds = data.all_worlds;

    return data
};

export const getId = (world, servers) => {
    if(!world) {
        console.log('not found')
    }else{
        const index = servers.findIndex(i => i.name === world)
        return index ? servers[index].id : 1001
    }
};

export const getWorld = (id, servers) => {
    const world = servers.find(server => server.id === id);
    return world ? world.name : null;
}

export const getFullStats = async (match) => {
    const url = `https://api.guildwars2.com/v2/wvw/matches/` + `${match.id}`;
    const response = await fetch(url, {mode: 'cors'});
    const data = await response.json()

    return data
}
