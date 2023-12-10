//----------------------------------------//
//- Javascript used by detail.handlebars -//
//----------------------------------------//

const tableContinerEl = document.getElementById("table-container")                                     // Create listener that triggers when any wine-table is clicked
const sessionEl = document.getElementById("session-details")                                           // Element on page with session details

// Add Comment
const addCommentOpenModalEl = document.getElementById("add-comment-open-modal")                        // Add Comment Button
const addCommentModalEl = document.getElementById("add-comment-modal")                                 // Add Comment Modal Window
const addCommentFormEl = document.getElementById("add-comment-form")                                   // Add Comment Form
const addCommentSubmitBttnEl = document.getElementById("add-comment-submit-button")                    // Add Comment Submit Button
const addCommentCancelBttnEl = document.getElementById("add-comment-cancel-button")                    // Add Comment Cancel Button
const addCommentCloseBttnEl = document.getElementById("add-comment-close-button")                      // Add Comment Close Button

// Update Wine
// const updateWineModalEl = document.getElementById("update-wine-modal")                              // Update Wine Modal Window
// const updateWineFormEl = document.getElementById("update-wine-form")                                // Update Wine Form
// const updateWineCancelBttnEl = document.getElementById("update-wine-cancel-button")                 // Update Wine Cancel Button
// const updateWineCloseBttnEl = document.getElementById("update-wine-close-button")                   // Update Wine Close Button
// const updateWineDeleteBttnEl = document.getElementById("update-wine-delete-button")                 // Update Wine Delete Button

// Inactivate Wine
// const inactivateWineModalEl = document.getElementById('inactivate-wine-modal')                      // Inactivate Wine Modal Window
// const inactivateWineConfirmButtonEl = document.getElementById('inactivate-wine-confirm-button')     // Inactivate Wine Confirm Button
// const inactivateWineCancelButtonEl = document.getElementById('inactivate-wine-cancel-button')       // Inacitvate Wine Cancel Button
// const inactivateWineCloseButtonEl = document.getElementById('inactivate-wine-close-button')         // Inacitvate Wine Close Button

//-----------------------------//
//- POST (Add) Comment Record -//
//-----------------------------//

const postCommentHandler = async (event, blogId) => {
    event.preventDefault();
    // Build JSON body
    // {
    //     "comment_body" : "Long text",
    //     "user_id" : 1	    
    // }    
    let JSONBody = {}    
    JSONBody.comment_body = document.getElementById('new-comment').value
    JSONBody.user_id = sessionEl.dataset.userId
    //Stringify the Array to prepare for FETCH
    const bodyStringified = JSON.stringify(JSONBody)    
    // FETCH Request (POST Method)
    const response = await fetch(`/api/comment/${blogId}`, {
        method: 'POST',
        body: bodyStringified,        
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        if (response.ok) {
            window.location.reload() // Reload screen 
        } else {
            alert('Failed to Add Comment Record');
        }
    return;
}

//----------------------------//
//- PUT (update) Wine Record -//
//----------------------------//

// const putWineHandler = async (event) => {
//     event.preventDefault();
//     // Build JSON body
//     // {
//     //     "wine_name" : "Diana Madeline",
//     //     "active_ind" : 1	    
//     // }

//     let JSONBody = {}
//     JSONBody.wine_name = document.querySelector('#update-wine-name').value
//     //Stringify the Array to prepare for FETCH
//     const bodyStringified = JSON.stringify(JSONBody)

//     // FETCH Request (POST Method)
//     const response = await fetch(`/api/wine/${document.querySelector('#update-wine-wine-id').value}`, {
//     method: 'PUT',
//     body: bodyStringified,        
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         window.location.reload() // Reload screen
//     } else {
//         alert('Failed to Update Wine Record');
//     }
//     return;
// };


//--------------------------------//
//- PUT (inactivate) Wine Record -//
//--------------------------------//

// const inactivateWineHandler = async (wine_id) => {
    
//     // console.log(wine_id)
    
//     try{
//     let inactivateWineURL = `./../api/wine/inactivate/${wine_id}`
//     let options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         // body: jsonString
//     }        
//     const response = await fetch(inactivateWineURL, options )
//     const data = await response.json()
//     // console.log(data)
//     window.location.reload() // Reload screen 
//     } catch (err) {
//         console.error(err);
    
//     }
//     return;
// };


        //-------------------//
        //- Shared Listener -//
        //-------------------//

//----------------------------------------------------------------------------------------//
//- Event listener - Table Area - Update Wine/ Add Vintage / Update Vintage Modal - Show -// 
//----------------------------------------------------------------------------------------//

// //Listen for a click within the Table area - the body of the page ...
// tableContinerEl.addEventListener('click', async (event) => {
//     // console.log ("Table area click registered")
//     const element = event.target;    

    //------------------------------//
    //- Modal - Update Wine - Show -//
    //------------------------------//

//     //(Pull wine details, pre-render Update Wine Modal and show.) //

//     if (element.matches("button") === true && element.classList.contains("update-wine-button")) { 
//         let update_wine_wine_id = element.getAttribute("data-index");
//         event.preventDefault();
//         // console.log("  > Update Wine button clicked")
//         try{                
//             // GET details of wine
//             let getOneWineURL = `./../api/wine/${update_wine_wine_id}`
//             let options = {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json'
//                 },            
//             }
//             const response = await fetch(getOneWineURL, options )
//             const wineArray = await response.json()             
//             // Pre-populate fields in UPDATE WINE modal 
//             document.getElementById('update-wine-name').value = wineArray.wine_name
//             document.getElementById('update-wine-wine-id').value = wineArray.wine_id
//             document.getElementById('update-wine-delete-button').value = wineArray.wine_id  //set value of delete button so that it can be passsed through

//             // Show the UPDATE WINE modal 
//             updateWineModalEl.style.display = 'block';
//         } catch (err) {
//             console.error(err);        
//         }
//         return;
//     }
// });



    //-------------------//
    //- Event Listeners -//
    //-------------------//

//---------------------------------------------//
//- Event Listener - Add Comment Modal - Show -//
//---------------------------------------------//

//Show "Add Comment Modal" when "Add Comment" button is clicked
addCommentOpenModalEl.addEventListener('click', function () {
    addCommentModalEl.style.display = 'block';
});

//------------------------------------------------------//
//- Event Listener - Add Comment Modal - Hide (Cancel) -//
//------------------------------------------------------//

//Hide "Add Comment Modal" when "Cancel" button is clicked
addCommentCancelBttnEl.addEventListener('click', function () {
    addCommentModalEl.style.display = 'none';
});

//-----------------------------------------------------//
//- Event Listener - Add Comment Modal - Hide (Close) -//
//-----------------------------------------------------//


addCommentCloseBttnEl.addEventListener('click', function () {
    addCommentModalEl.style.display = 'none';
});

//----------------------------------------------------//
//- Event listener - Add Comment Modal - Submit Form -//
//----------------------------------------------------//
addCommentFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const blogId = event.target.dataset.blogId
    postCommentHandler(event, blogId)
    addCommentModalEl.style.display = 'none';
})

// //------------------------------------------------------//
// //- Event listener - Update Wine Modal - Hide (cancel) -//
// //------------------------------------------------------//

// //Hide "Update Wine Modal" when "Cancel" button is clicked
// updateWineCancelBttnEl.addEventListener('click', function () {
//     // console.log ("Update Wine Record Modal - Hide (Cancel)")  
//     updateWineModalEl.style.display = 'none';
// });

// //------------------------------------------------------//
// //- Event listener - Update Wine Modal - Hide (close) -//
// //------------------------------------------------------//

// //Hide "Update Wine Modal" when "Close" button is clicked
// updateWineCloseBttnEl.addEventListener('click', function () {
//     // console.log ("Update Wine Record Modal - Hide (Close)")  
//     updateWineModalEl.style.display = 'none';
// });

// //-----------------------------------------------//
// //- Event listener - Update Wine Modal - Submit -//
// //-----------------------------------------------//
// updateWineFormEl.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // console.log ("Update Wine Record Modal - Submit")
//     updateWineModalEl.style.display = 'none';  
//     putWineHandler(event)
// })

// //-----------------------------------------------//
// //- Event listener - Update Wine Modal - Delete -//
// //-----------------------------------------------//
// updateWineDeleteBttnEl.addEventListener('click', (event) => {
//     event.preventDefault();
//     // console.log ("Update Wine Record Modal - Delete Clicked - updateWineDeleteBttnEl")  
//     let wine_id = event.target.getAttribute("value")
//     updateWineModalEl.style.display = 'none';     
//     inactivateWineModal(wine_id)
// })

// //-----------------------------------------//
// //- Modal (inactivate) Wine Record - Show -//
// //-----------------------------------------//

// // Show Inactivate Modal 
// const inactivateWineModal = async (wine_id) => {
//     try{                
//         // GET details of Wine
//         // console.log ("Inactivate Wine Record Modal - Show - inactivateWineModal")  
//         let getOneWineURL = `./../api/wine/${wine_id}`
//         let options = {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json'
//             },            
//         }
//         const response = await fetch(getOneWineURL, options )
//         const wineArray = await response.json()             
//         // Pre-populate fields in Inactivate Modal Window 
//         document.getElementById('inactivate-wine-heading').textContent = wineArray.wine_name
//         document.getElementById('inactivate-wine-confirm-button').value = wineArray.wine_id  //set value of delete button so that it can be passsed through
//         // Show the Inactivate  modal window 
//         inactivateWineModalEl.style.display = 'block';

//     } catch (err) {
//         console.error(err);        
//     }
//     return;
// };


// //--------------------------------------------------//
// //- Modal (inactivate) Wine Record - Hide (Cancel) -//
// //--------------------------------------------------//

// inactivateWineCancelButtonEl.addEventListener('click', function () {
//     // console.log ("Inactivate Wine Record Modal - Hide (Cancel) - inactivateWineCancelButtonEl")  
//     inactivateWineModalEl.style.display = 'none';
// });

// //-------------------------------------------------//
// //- Modal (inactivate) Wine Record - Hide (Close) -//
// //-------------------------------------------------//

// inactivateWineCloseButtonEl.addEventListener('click', function () {
//     // console.log ("Inactivate Wine Record Modal - Hide (Close) - inactivateWineCloseButtonEl")  
//     inactivateWineModalEl.style.display = 'none';
// });

// //-------------------------------------------//
// //- Modal (inactivate) Wine Record - Submit -//
// //-------------------------------------------//

// inactivateWineConfirmButtonEl.addEventListener('click', function (event) {
//     event.preventDefault();
//     // console.log ("Inactivate Wine Record Modal - Submit")  
//     let wine_id = event.target.getAttribute("value")    
//     inactivateWineModalEl.style.display = 'none';    
//     inactivateWineHandler(wine_id)
// });
