// const formElt = document.getElementById("comment-form");
function getDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    const formattedToday = dd + '/' + mm + '/' + yyyy;

    return formattedToday;
}

const formElt = document.querySelector('#comment-form');

function handleSubmit(event) {
    // don't forget to "prevent" the form from being sent
    event.preventDefault();
    console.log(event);

    // create a new comment with the user name, the current date (french format: dd/mm/yyyy)
    // new comments must have the same HTML structure as existing comments.
    const usernameInputElt = document.getElementById('comment-username');
    const messageInputElt = document.getElementById('comment-content');

    const userName = usernameInputElt.value.trim();
    const message = messageInputElt.value.trim();

    if(userName == '') {
        alert('Votre nom ne peut pas être vide');

        return;
    }

    if(message == '') {
        alert('Votre message ne peut pas être vide');

        return;
    }
    
    // je créer mon li
    const newCommentElt = document.createElement('li');

    // je créé un h5 qui contient, le username
    const newCommentUsernameElt = document.createElement('h5');
    newCommentUsernameElt.textContent = userName;

    newCommentElt.append(newCommentUsernameElt);

    // je créé un h6qui contient la date
    const newCommentDateElt = document.createElement('h6');
    newCommentDateElt.textContent = getDate();

    newCommentElt.append(newCommentDateElt);

    // je créé un p qui contient le content
    const newCommentContentElt = document.createElement('p');
    newCommentContentElt.textContent = message;

    newCommentElt.append(newCommentContentElt);
 
    // j'ajoute mon li au DOM
    const commentListElt = document.getElementById('comments-list');
    commentListElt.append(newCommentElt);

    formElt.reset();
}

// add a click event listener on the form submit button
formElt.addEventListener("submit", handleSubmit);
