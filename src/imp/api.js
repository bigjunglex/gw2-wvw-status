
export const getServersName = async () => {
    const url = 'https://api.guildwars2.com/v2/worlds?ids=all' 
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    const list = [];
    for (let i = 0; i < data.length; i++){
        list.push(data[i].name)
    }
    return list
};

export const getMatch = async (url) => {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    const worlds = data.worlds;
    console.log(worlds); 
};
