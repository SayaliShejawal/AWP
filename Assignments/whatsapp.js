function MouseOver1() {
   
    let id5Element = document.querySelector("  .fa.fa-microphone");
    id5Element.className = "fa fa-arrow-right fa-lg";
    document.querySelector("#type").style.visibility = "visible";
  }
  
  function MouseOut1() {
    let id5Element = document.querySelector(".fa.fa-arrow-right");
    id5Element.className = "fa fa-microphone fa-lg";
    document.querySelector("#type").style.visibility = "hidden";
  }

  function handleMouseOver() {
    document.querySelector("#type1").style.visibility = "visible";
    var id2Element = document.querySelector(".fa-microphone");
    id2Element.className = "fa fa-arrow-right fa-lg";
    
  }
  
  function handleMouseOut() {
    document.querySelector("#type1").style.visibility = "hidden";
    var id2Element = document.querySelector(".fa-arrow-right");
    id2Element.className = "fa fa-microphone fa-lg";
  
  }



  function commentHere2() {
    let userComment = document.querySelector("#inputId2").value; 
  
    // create new element
    const newElement = document.createElement("div");
    newElement.textContent = userComment; 
  
    // add styling to new element
    newElement.style.background = "rgb(244, 248, 248)"; 
    newElement.style.color = "black";
    newElement.style.margin = "6px";
    newElement.style.borderRadius= "5px"
    newElement.style.width="200px"
    newElement.style.padding="4px"
    // comment box elment
    
    if(document.querySelector("#inputId2").value == "")
    {
        return false;
    }
    const commentBox = document.querySelector("#commentBox");
   
   
    // commentBox.appendChild(newElement);
    commentBox.appendChild(newElement);
  
    const commentBox2 = document.querySelector("#commentBox2");
    commentBox2.appendChild(newElement);
    // clean the input box
    document.querySelector("#inputId2").value = "";
  }
  


  function commentHere() {
    let userComment = document.querySelector("#inputId1").value; 
  
    const newElement = document
    .querySelector("#referenceCommentId")
    .cloneNode(true);

    

    newElement.removeAttribute("id"); //good practice to keep unique id.
    newElement.style.visibility = "visible";
    newElement.innerHTML = userComment;
    
    

    if(document.querySelector("#inputId1").value == "")
    {
        return false;
    }
    const commentBox = document.querySelector("#commentBox");
    
   
    // commentBox.appendChild(newElement);
    commentBox.appendChild(newElement);
  
    // clean the input box
    document.querySelector("#inputId1").value = "";
  }
  

  function deleteComment() {
    document.querySelector(".msg").style.background ="yellow";
  }
