export function fetchData(htmlElement){
    fetch("https://randomuser.me/api/?results=3")
        .then(data => data.json())
        .then(data => {
            for(let i = 0; i < 3; i++){
                let user = data.results[i]
                htmlElement.innerHTML += `
                    <div class="user">
                        <img src="${user.picture.large}" alt="client profile picture" class="user__img">
                        <h3 class="user__name">${user.name.last} ${user.name.last}</h3>
                        <p class="user__opinion">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eligendi ducimus, corrupti",
                        </p>
                    </div>
                `
            }
        })
}
