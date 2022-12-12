
let picArray = ['https://media.istockphoto.com/id/1067302478/photo/traditional-tajine-dishes-couscous-and-fresh-salad-on-rustic-wooden-table-tagine-lamb-meat.jpg?s=612x612&w=0&k=20&c=2G8Q9JrTgnA8WpaR0jxiPDHXzU2uZYgzbIuEFt-k4hs=', 'https://images.unsplash.com/photo-1664575198308-3959904fa430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'];

//menu bar dropdown function
function dropdownMenu() {
    console.log('working')
    document.getElementById("products-category").classList.toggle("show");
    console.log(document.getElementById("products-category"))
}

window.onclick = function (event) {
    if (!event.target.matches('.fa.fa-bars')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//refresh the current page
const refreshPage = () => {
    location.reload()
}
//display update message on the web
const updateMessage = () => {
    let updateMessage = document.querySelectorAll(".update-message");
    updateMessage.forEach(child => {
        child.remove();
    })
    let messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "update-message");
    messageDiv.innerHTML = "The site is going through maintenance as of right now.<br>New features will be updated soon.<br>Thank you for your patience.";
    main.appendChild(messageDiv)
}
//create variables to represent the images in the dom
let leftImage = document.querySelector('.image:nth-child(1)');
let myImage = document.querySelector('.image:nth-child(2)');
let rightImage = document.querySelector('.image:nth-child(3)');

//create a function to change the picture
let previousPic = 1;
let currentPic = 2
let nextPic = 3;
leftImage.src = picArray[previousPic];
myImage.src = picArray[currentPic]
rightImage.src = picArray[nextPic];
const changePic = (move) => {
    let updateMessage = document.querySelectorAll(".update-message");
    updateMessage.forEach(child => {
        child.remove();
    })
    currentPic += move
    previousPic += move;
    nextPic += move;

    //if the index is greater than the array.length - 1, set it back to zero
    if (currentPic > (picArray.length - 1)) {
        currentPic = 0;
    }
    //if the index is less than zero, set it to the last picture
    if (currentPic < 0) {
        currentPic = picArray.length - 1;
    }
    if (nextPic > picArray.length - 1) {
        nextPic = 0;
    }
    if (nextPic < 0) {
        nextPic = picArray.length - 1;
    }
    if (previousPic > picArray.length - 1) {
        previousPic = 0;
    }
    if (previousPic < 0) {
        previousPic = picArray.length - 1;
    }
    myImage.src = picArray[currentPic];
    leftImage.src = picArray[previousPic];
    rightImage.src = picArray[nextPic]
}

