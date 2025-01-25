

async function fetchUserData () {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            console.log(user.username);

            const li = document.createElement('li');

            li.textContent = user.username;

            userList.append(li);
        });

        dataContainer.append(userList);
    }catch(error){
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }

}

document.addEventListener("DOMContentLoaded", function(){
    fetchUserData();
})