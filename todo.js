let inputField = document.querySelector('#inputBox')
let addValue = document.querySelector("#addBtn")

let uncheck = 'https://icons.veryicon.com/png/o/miscellaneous/wens/uncheck.png';
let check = 'https://www.svgrepo.com/show/525265/check-circle.svg';

let listContainer = document.getElementById("listContainer")

addValue.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputField.value === '') {
        alert('Add your task, First')
        return;
    }

    const fullContain = document.createElement('ul'); // Create the main container
    fullContain.className = 'flex items-center justify-between';

    const fDiv = document.createElement('div'); // Create the first div
    fDiv.className = 'flex items-center gap-2 pl-10';

    const img = document.createElement('img'); // Create the uncheck image
    img.src = uncheck;
    img.className = 'w-[25px] h-[25px] mt-3 cursor-pointer';

    img.addEventListener('click', () => { // Toggle check/uncheck
        li.classList.toggle('line-through');
        li.classList.toggle('text-gray-500');
        img.src = li.classList.contains('line-through') ? check : uncheck;

        saveData();
    });

    const li = document.createElement('li'); // Create the li for the task
    li.innerHTML = inputField.value;
    li.className = 'text-2xl mt-2 cursor-pointer';

    const sDiv = document.createElement('div'); // Create the second div for buttons
    sDiv.className = 'flex items-center gap-2';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class='bx bx-trash-alt'></i>`;
    deleteBtn.className = 'text-2xl';

    deleteBtn.addEventListener('click', () => {
        fullContain.remove();

        saveData()
    });

    fDiv.appendChild(img);
    fDiv.appendChild(li);

    sDiv.appendChild(deleteBtn);

    fullContain.appendChild(fDiv);
    fullContain.appendChild(sDiv);

    listContainer.appendChild(fullContain);

    inputField.value = ''; // Clear the input field
    saveData()
});


const sideArrow = document.querySelector('#arrow')


sideArrow.addEventListener('click',()=>{
    const container = document.querySelector('#sidebar')
    container.classList.toggle('-translate-x-full')
})

    
