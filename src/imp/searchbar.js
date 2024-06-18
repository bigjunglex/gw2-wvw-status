import { getServersName } from './api.js'


export const autocomplete = async (input, container) => {
    const getKeywords = async () => {
        const data = await getServersName()
        const list = [];
        for (let i = 0; i < data.length; i++){
                list.push(data[i].name)
            }
        return list
    }

    //  get keywords from server objects arrray and assign same name variable
    // for autocomplete

    const keywords = await getKeywords();

    const selectInput = (listItem) => {
        input.value = listItem.textContent;
        container.innerHTML = '';
    };

    // function for selecting suggested names (replaces html + clears drop)

    const display = (result) => {
        container.innerHTML = ''; 
        if (result.length > 0) {
            const ul = document.createElement('ul');
            
            for(let i = 0; i < result.length; i++){
                const li = document.createElement('li')
                li.textContent = result[i]
                li.addEventListener('click', () => selectInput(li))
                ul.appendChild(li)
            }
            
            container.appendChild(ul);
        }
    };

    // display dropdown as a ul of list with listeners on click


    input.addEventListener('keyup', () => {
        const typed = input.value.toLowerCase();
        let result = [];
        
        if (typed.length > 0) {
            result = keywords.filter((word) => word.toLowerCase().includes(typed));
        }

        display(result);
    });
};


