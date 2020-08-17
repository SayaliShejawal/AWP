let Likepost = function(btnElement){

    //access the span child 

    let postLikeCount=btnElement.children[0].innerHTML;
    //innerHTML returns string
    //convert string into integer

    let newLikeCount= parseInt(postLikeCount);

    newLikeCount++;

    btnElement.children[0].innerHTML=newLikeCount;


};

//Comment

let readAndAddComment = function(btnElementComment){

    let UserComment= btnElementComment.parentElement.parentElement.children[1].children[0].value;

    let CommentBox = btnElementComment.parentElement.parentElement.parentElement.children[2];

    let newElement =  CommentBox.children[0].cloneNode(true);

    newElement.children[0].innerHTML=UserComment;

   CommentBox.insertBefore( newElement,CommentBox.firstChild);

   //Clear the box

   btnElementComment.parentElement.parentElement.children[1].children[0].value = "";   
};

//Delete part

let DeleteComment = function(btnElementDelete){

    btnElementDelete.parentElement.parentElement.remove();
};