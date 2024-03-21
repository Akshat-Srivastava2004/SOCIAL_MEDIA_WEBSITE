// async function deletePost(postId) {
//     try {
//       console.log("the post id to be deleted is ", postId);
//       console.log(`http://localhost:5000/api/v1/users/delete/${postId}`);
//       const response = await fetch(
//         `http://localhost:5000/api/v1/users/delete/${postId}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.ok) {
//         // If deletion successful, remove the post from the UI
//         //const postElement = document.querySelector(
//         //  `.post[data-id="${postId}"]`
//         //);
//         const divElement = document.getElementById(postId);
//         if (divElement) {
//           divElement.remove();
//         }
//       } else {
//         console.error("Failed to delete post:", await response.json());
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   }


  