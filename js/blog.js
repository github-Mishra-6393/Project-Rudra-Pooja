showPost();

function post() {


    //     getting heading and contetn
    let heading = document.getElementById('blog-titel');
    let content = document.getElementById('blog-content');
    let date = new Date();
    let year = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    let time= `${date.getHours()}: ${date.getMinutes()}`;


    // getting item to local storage
    let postHeading = localStorage.getItem('postHeading');
    let postContent = localStorage.getItem('postContent');
    let postDate= localStorage.getItem('postDate');
    let postTime= localStorage.getItem('postTime');

    // checking local storage gettin and setting data to local storage
    flag = 0;
    //  for post heading
    if (postHeading == null) {
        postHeadingObj = [];
    }
    else {
        postHeadingObj = JSON.parse(postHeading);
    }
    if (heading.value == '') {
        alert("Title can't be blank")
    } else {

        postHeadingObj.push(heading.value);
        flag += 1;
        heading.value = '';
    }
    // saving to local storage
    localStorage.setItem("postHeading", JSON.stringify(postHeadingObj));

    // for post content
    if (postContent == null) {
        postContentObj = [];
    }
    else {
        postContentObj = JSON.parse(postContent);
    }
    if (content.value == '') {
        alert("Content can't be blank")
    } else {
        postContentObj.push(content.value);
        content.value = '';
        flag += 1;

    }
    localStorage.setItem("postContent", JSON.stringify(postContentObj));

    if (postDate == null) {
        postDateObj = [];
    }
    else {
        postDateObj = JSON.parse(postDate);
    }
    postDateObj.push(year);
    localStorage.setItem("postDate", JSON.stringify(postDateObj));
    if (postTime == null) {
        postTimeObj = [];
    }
    else {
        postTimeObj = JSON.parse(postHeading);
    }
    postTimeObj.push(time);
    localStorage.setItem("postTime", JSON.stringify(postTimeObj));

    // saving to local storage

    showPost();

}

// Function to show Post
function showPost() {
    let postHeading = localStorage.getItem('postHeading');
    let postContent = localStorage.getItem('postContent');
    let postDate= localStorage.getItem('postDate');
    let postTime= localStorage.getItem('postTime');

    // checking local storage gettin and setting data to local storage

    //  for post heading
    if (postHeading == null) {
        postHeadingObj = [];
    }
    else {
        postHeadingObj = JSON.parse(postHeading);
    }


    // for post content
    if (postContent == null) {
        postContentObj = [];
    }
    else {
        postContentObj = JSON.parse(postContent);
    }
    
    // For Time and Date
    if (postDate == null) {
        postDateObj = [];
    }
    else {
        postDateObj = JSON.parse(postDate);
    }
    if (postTime == null) {
        postTimeObj = [];
    }
    else {
        postTimeObj = JSON.parse(postTime);
    }
   
    // var date = new Date();
    let html = '';
    for (let i = 0; i < postContentObj.length || i < postHeadingObj.length; i++) {
        html += `
            <div class="wrapper">
            <div class="post-box">
            <h2 class="post-heading">${postHeadingObj[i]} </h2>
            <hr>

            <div class="post-content"> ${postContentObj[i]}</div>
            <button class="btn btn-2"> delete Post </button>
            </div>
             <span class="time">${postTimeObj[i]}</span>
             <span class="date">${postDateObj[i]}</span>
           
            </div>
        `
        let parent = document.querySelector('.post-div').innerHTML = html;
    }



}
