// const namesinput = document.getElementById("searchInput");
// const namesList = document.getElementById("namesList");

// async function handleSearchTopNavbar() {
//     const namesvalue = namesinput.value;
//     console.log("------the enter value of user ----", namesvalue);
//     try {
//         const data = await fetchData(namesvalue);
//         displaySearchResults(data.namesonly);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// async function fetchData(namesvalue) {
//     const response = await fetch(
//         `http://localhost:5000/api/v1/users/usernamedetail/${namesvalue}`,
//         {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }
//     );

//     if (!response.ok) {
//         throw new Error("Failed to fetch the data");
//     }

//     return response.json();
// }

// function displaySearchResults(namesonlyy) {
//     const namesonly = namesonlyy.map((item) => item.user);
//     const namesid = namesonlyy.map((item) => item.id);
//     console.log("All ids is ", namesid);
//     console.log("All the names and ids :", namesonlyy);

//     namesList.innerHTML = "";
//     namesonlyy.forEach((name) => {
//         const listItem = document.createElement("li");
//         const anchor = document.createElement("a");
//         anchor.textContent = name.user;
//         console.log("-----user detai ---", anchor.textContent);
//         anchor.href = `http://localhost:5000/api/v1/users/detailuser/${name.id}`;
//         console.log("-----user detai is  ---", anchor.href);
//         listItem.appendChild(anchor);
//         console.log("------wddwd----", anchor.textContent);
//         namesList.appendChild(listItem);
//     });
// }