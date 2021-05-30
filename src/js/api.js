function fetchData(data){
    let i = 0
    while (i < 3){
        user = data[i]
        users = document.getElementById('users')
        users.innerHTML += '<div class="text-light person-contact d-flex align-items-center justify-content-between">\
                            <img src="img/user.png" width="50" alt=""><span>' + user['name'] + '</span><span class="text-muted">' + user['address']['zipcode'] + ' TL\
                            </span><span class="text-primary">Send</span></div>'
        i++;
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        fetchData(data)    
    });


function showFunction(id){
    let tabs = document.getElementsByClassName('tab-pane')
    for (let i = 0; i < 3; i++){
        tabs[i].classList.remove("show")
        tabs[i].classList.remove("active")
        console.log(tabs[i].id)
        if (tabs[i].id == id + '-tab'){
            tabs[i].classList.add("show")
            tabs[i].classList.add("active")
        }
    }    
}