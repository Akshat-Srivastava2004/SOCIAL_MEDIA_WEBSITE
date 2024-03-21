


// const imageContainer = document.getElementById("imageContainer");
// const postsHeading = document.getElementById("postsHeading");
// let allpost,currentlogin,allpostimage,allpostcaption,postdetail,allpostids;
// async function handleFetchAllPosts() {
//     try {
//         const response = await fetch("http://localhost:5000/api/v1/users/allpost");
//         if (!response.ok) {
//             throw new Error("Failed to fetch the image ");
//         }
//         data = await response.json();
//         allpost = data.allpost;
//         currentlogin = data.currentuser;
//         allpostimage = data.allimage;
//         allpostcaption = data.allcaption;
//         postdetail = data.alldetailofimage;
//         allpostids = data.allpostids;

//         console.log("data :",data,"\n","allpost :",allpost,"\n","allpostimage :",allpostimage,"\n","allpostcaption:",allpostcaption,"\n","postdetail :",postdetail,"\n","allpostids :",allpostids,"\n","currentlogin : ",currentlogin);

//         postsHeading.style.display = "none";
//         imageContainer.innerHTML = "";

//         allpostimage.forEach((imageUrl, index) => {
//             createPostElement(imageUrl, postdetail[index], allpostcaption[index], allpost[index], allpostids[index]);
//         });
//     } catch (error) {
//         console.error("Error fetching images:", error);
//     }
// }

// function createPostElement(imageUrl, postDetail, postCaption, postId, postIds) {
//     const postDiv = document.createElement("div");
//     postDiv.classList.add("post");
//     postDiv.id = postDetail.id;
//     postDiv.style.display = "inline-block";

//     const imgElement = document.createElement("img");
//     imgElement.src = imageUrl;
//     imgElement.alt = "Image";

//     const authorNameElement = document.createElement("div");
//     authorNameElement.textContent = `Uploaded by: ${postDetail.authorName}`;
//     authorNameElement.classList.add("author-name");

//     const captionElement = document.createElement("div");
//     captionElement.textContent = `Caption: ${postCaption}`;
//     captionElement.classList.add("author-name");

//     const commentSection = createCommentSection(postId);
//     const commentForm = createMainCommentForm(postId);

//     const likeBtn = document.createElement("button");
//     likeBtn.classList.add("like-btn");
//     likeBtn.textContent = "Like";
//     likeBtn.addEventListener("click", function () {
//         console.log("Liked!");
//     });

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.id = postDetail.id;
//     deleteBtn.addEventListener("click",function(){
//         const postId = this.id;
//         deletePost(postId);
//     })

    

//     postDiv.appendChild(authorNameElement);
//     postDiv.appendChild(imgElement);
//     postDiv.appendChild(captionElement);
//     postDiv.appendChild(commentSection);
//     postDiv.appendChild(commentForm);
//     postDiv.appendChild(likeBtn);
//     postDiv.appendChild(deleteBtn);

//     imageContainer.appendChild(postDiv);
// }

// async function deletePost(postId) {
//     try {
//         console.log("the post id to be deleted is ", postId);
//         console.log(`http://localhost:5000/api/v1/users/delete/${postId}`);
//         const response = await fetch(
//             `http://localhost:5000/api/v1/users/delete/${postId}`,
//             {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         if (response.ok) {
//             // If deletion successful, remove the post from the UI
//             const divElement = document.getElementById(postId);
//             if (divElement) {
//                 divElement.remove();
//             }
//         } else {
//             console.error("Failed to delete post:", await response.json());
//         }
//     } catch (error) {
//         console.error("Error deleting post:", error);
//     }
// }


// function createCommentSection(postId) {
//     const commentSection = document.createElement("div");
//     commentSection.id=postId;
//     commentSection.classList.add("comment");
//     commentSection.innerText="comments will appear here";
//     return commentSection;
// }

// function createMainCommentForm(postId) {
//     const form = document.createElement("form");
//     form.id = postId;
//     form.innerHTML = `
//         <input type="text" name="comment" placeholder="Add a comment...">
//         <button type="submit">Post</button>
//     `;
//     form.addEventListener('submit', handleMainFormSubmit);
//     return form;
// }

// function handleMainFormSubmit(event) {
//     event.preventDefault();

//     const commentText = event.target.querySelector('input[name="comment"]').value;
//     const parentElementId = event.target.parentNode.id;
//     addMainComment(commentText, parentElementId);
// }

// function addMainComment(message, parentElementId) {
//     const commentSection = document.querySelector(`#${parentElementId}.comment`);// yash have to explain me this 
//     const commentMain = document.createElement('div');
//     commentMain.classList.add('parentMessage');
//     const text = "post id :"+parentElementId+"\n"+"postUsername:"+postdetail.authorName+"currentUser :"+currentlogin+"message:"+message;
//     commentMain.textContent = text;

//     const replyButton = document.createElement('button');
//     replyButton.textContent = 'Reply';
//     replyButton.classList.add('commentReplyButton');
//     replyButton.addEventListener('click', function() {
//         openReplyForm(commentMain);
//     });

//     commentMain.appendChild(replyButton);
//     commentSection.appendChild(commentMain);
// }

// function openReplyForm(parentElement) {
//     const form = createReplyForm();

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const replyText = event.target.querySelector('input[name="replyComment"]').value;
//         addReply(replyText, parentElement);
//         parentElement.removeChild(form);
//     });

//     parentElement.appendChild(form);
// }

// function createReplyForm() {
//     const form = document.createElement('form');
//     form.innerHTML = `
//         <input type="text" name="replyComment" placeholder="Add a reply...">
//         <button type="submit">Post</button>
//     `;
//     return form;
// }

// function addReply(replyText, parentElement) {
//     const replyDiv = createReplyDiv(replyText);

//     const subReplyButton = createSubReplyButton(parentElement);
//     subReplyButton.addEventListener('click', function() {
//         openSubReplyForm(replyDiv);
//     });

//     replyDiv.appendChild(subReplyButton);
//     parentElement.appendChild(replyDiv);
// }

// function createReplyDiv(replyText) {
//     const replyDiv = document.createElement('div');
//     replyDiv.classList.add('ReplyParentMessage');
//     replyDiv.textContent = replyText;
//     return replyDiv;
// }

// function createSubReplyButton(parentElement) {
//     const subReplyButton = document.createElement('button');
//     subReplyButton.textContent = 'Reply';
//     subReplyButton.classList.add('commentReplyButton');
//     return subReplyButton;
// }

// function openSubReplyForm(parentElement) {
//     const form = createReplyForm();

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const replyText = event.target.querySelector('input[name="replyComment"]').value;
//         addSubSubReply(replyText, parentElement);
//         parentElement.removeChild(form);
//     });

//     parentElement.appendChild(form);
// }

// function addSubSubReply(replyText, parentElement) {
//     const replyDiv = createReplyDiv(replyText);

//     parentElement.appendChild(replyDiv);
// }


