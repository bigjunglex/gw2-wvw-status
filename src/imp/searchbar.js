import { getServersName } from './api.js'


export const autocomplete = async (input, container) => {
    const keywords = await getServersName();

    const selectInput = (listItem) => {
        input.value = listItem.textContent;
        container.innerHTML = '';
    };

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

    input.addEventListener('keyup', () => {
        const typed = input.value.toLowerCase();
        let result = [];
        
        if (typed.length > 0) {
            result = keywords.filter((word) => word.toLowerCase().includes(typed));
        }

        display(result);
    });
};