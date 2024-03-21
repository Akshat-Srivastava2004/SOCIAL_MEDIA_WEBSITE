// document.addEventListener('DOMContentLoaded', function() {
//     // Add event listeners here
//     const searchTopNavbar = document.getElementById("searchTopNavbar");
//     searchTopNavbar.addEventListener("click", handleSearchTopNavbar);

    
    
//     const fetchAllPost = document.getElementById("fetchAllPost");
//     fetchAllPost.addEventListener("click", handleFetchAllPosts);


//     const fetchLatestPostButton = document.getElementById("fetchLatestPostButton");
//     fetchLatestPostButton.addEventListener("click", async function() {
//         // Your fetch images event listener code
//         try {
//             const response = await fetch(
//               "http://localhost:5000/api/v1/users/image"
//             );
      
//             if (!response.ok) {
//               throw new Error("Failed to fetch images");
//             }
      
//             const data = await response.json();
//             //const postid=data.postidonly;
//             //console.log("-------------all idsss----",postid)
//             const postImageUrls = data.images;
//             const Latestimage = data.latestImage;
//             const authorlatestone = data.authorlatest;
//             const postcaptionn = data.postcaption;
//             const latestpostids = data.Latestpostids;
//             console.log("------post caption-----", postcaptionn);
//             const captionlatest = data.latestcaption;
//             const postIds = data.posts;
      
//             console.log("--implemnent the postid-----\n", postIds);
//             // Assuming 'images' is the key for image URLs in the response
//             postsHeading.style.display = "none";
//             // Clear previous images
//             imageContainer.innerHTML = "";
      
//             // Create and append post elements for each image URL
//             // Initialize count variable
//             let count = 0;
      
//             Latestimage.forEach((imageUrl) => {
//               // Increment count for each iteration
      
//               console.log("---printing the count value---", count);
      
//               // Create post div
//               const postDiv = document.createElement("div");
//               postDiv.classList.add("post");
//               postDiv.id = postIds[count].id;
//               postDiv.style.display = "inline-block";
      
//               // Create image element
//               const imgElement = document.createElement("img");
//               imgElement.src = imageUrl;
//               imgElement.alt = "Image";
      
//               const authorName = authorlatestone[count];
//               // const authorName = postIds[count].authorName;
//               const authorNameElement = document.createElement("div");
//               authorNameElement.textContent = `Uploaded by: ${authorName}`;
//               authorNameElement.classList.add("author-name");
//               console.log("-------nnnn", authorNameElement);
      
//               // const newPostDiv = document.createElement("div");
//               // newPostDiv.classList.add("post");
      
//               //for Captuion
//               const captionname = captionlatest[count];
//               console.log("----------capiton--------", captionname);
//               const captionelement = document.createElement("div");
//               captionelement.textContent = `Caption: ${captionname}`;
//               captionelement.classList.add("author-name");
//               console.log("-------nnnn", authorNameElement);
      
//               // Create delete button element
//               const buttonElement = document.createElement("button");
//               buttonElement.textContent = "Delete";
//               // // buttonElement.classList.add('deleteId');
//               console.log("the button element postid", postIds[count].id);
//               buttonElement.id = postIds[count].id; // Use postId directly
//               // Add click event listener to delete button
//               buttonElement.addEventListener("click", function () {
//                 const DeletePost = this.id;
//                 console.log(DeletePost, "this is the delete id ");
//                 deletePost(DeletePost);
//               });
      
//               // const buttonElement = document.createElement("button");
//               // buttonElement.textContent = "Delete";
      
//               // // Store post ID using the dataset attribute
//               //  buttonElement.dataset.postid = postid[count].id; // Use postId directly
      
//               // // Add click event listener to delete button
//               //   buttonElement.addEventListener("click", function () {
//               // // Retrieve the post ID from the dataset attribute
//               // const postId = this.dataset.postid;
//               // console.log(postId, "this is the delete id ");
//               // deletePost(postId);
      
//               // Create comment section
//               const commentsection = document.createElement("div");
//               commentsection.classList.add("comment-section");
      
//               // Create add comment form
//               const addCommentForm = document.createElement("form");
//               addCommentForm.classList.add("add-comment-form");
//               addCommentForm.innerHTML = `
//               <input type="text" name="comment" placeholder="Add a comment...">
//               <button type="submit">Post</button>
//               `;
      
//               const replybutton = document.createElement("button");
//               replybutton.classList.add(".small-button");
//               replybutton.textContent = "reply";
      
//               replybutton.addEventListener("click", function () {
//                 if (addCommentForm.style.display === "none") {
//                   addCommentForm.style.display = "block";
//                   addCommentForm.querySelector('input[name="comment"]').focus();
//                   addCommentForm.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                   }); // Set focus to the input field
//                 } else {
//                   addCommentForm.querySelector('input[name="comment"]').focus();
//                 }
//               });
      
//               // Add submit event listener to add comment form
//               addCommentForm.addEventListener("submit", async function (event) {
//                 event.preventDefault();
//                 const commentInput = this.querySelector('input[name="comment"]');
//                 const commentText = commentInput.value.trim();
//                 console.log("----------enter comment---", commentText);
//                 if (commentText) {
//                   try {
//                     const commentData = {
//                       replybutton: commentText,
//                       latestpostids: latestpostids,
//                       comment: commentText,
//                     };
      
//                     const response = await fetch(
//                       "http://localhost:5000/api/v1/users/comment",
//                       {
//                         method: "POST",
//                         headers: {
//                           "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(commentData),
//                       }
//                     );
      
//                     if (!response.ok) {
//                       throw new Error("Failed to save comment");
//                     }
      
//                     const commentDiv = document.createElement("div");
//                     commentDiv.classList.add("comment");
//                     commentDiv.textContent = commentText;
//                     commentDiv.appendChild(replybutton);
//                     commentsection.appendChild(commentDiv);
//                     commentInput.value = "";
//                   } catch (error) {
//                     console.error("Error saving comment:", error);
//                   }
//                 }
//               });
      
//               // Create like button
//               const likeBtn = document.createElement("button");
//               likeBtn.classList.add("like-btn");
//               likeBtn.textContent = "Like";
//               likeBtn.addEventListener("click", function () {
//                 console.log("Liked!");
//               });
//               // Append elements to post div
//               postDiv.appendChild(authorNameElement);
//               postDiv.appendChild(imgElement);
//               postDiv.appendChild(captionelement);
//               // postDiv.appendChild(addCommentForm);
//               postDiv.appendChild(likeBtn);
//               postDiv.appendChild(buttonElement);
//               postDiv.appendChild(commentsection01);
      
//               // Append post div to image container
//               imageContainer.appendChild(postDiv);
      
//               count++;
//             });
//           } catch (error) {
//             console.error("Error fetching images:", error);
//           }
      
       
//     });
// });




   
 
