//----------------------------------------//
//- Javascript used by detail.handlebars -//
//----------------------------------------//

const tableContinerEl = document.getElementById("table-container")                                     // Create listener that triggers when any wine-table is clicked
const sessionEl = document.getElementById("session-details")                                           // Element on page with session details

// Add Blog
const addBlogOpenModalEl = document.getElementById("add-blog-open-modal")                        // Add Blog Button
const addBlogModalEl = document.getElementById("add-blog-modal")                                 // Add Blog Modal Window
const addBlogFormEl = document.getElementById("add-blog-form")                                   // Add Blog Form
const addBlogCancelBttnEl = document.getElementById("add-blog-cancel-button")                    // Add Blog Cancel Button
const addBlogCloseBttnEl = document.getElementById("add-blog-close-button")                      // Add Blog Close Button

// Update Blog
const updateBlogButtonEl = document.querySelectorAll('.update-blog-button')                         // Update Blog All Edit Buttons (to gropu assign eventlisteners)
const updateBlogModalEl = document.getElementById("update-blog-modal")                             // Update Blog Modal Window
const updateBlogFormEl = document.getElementById("update-blog-form")                                // Update Blog Form
const updateBlogCancelBttnEl = document.getElementById("update-blog-cancel-button")                 // Update Blog Cancel Button
const updateBlogCloseBttnEl = document.getElementById("update-blog-close-button")                   // Update Blog Close Button
const updateBlogDeleteBttnEl = document.getElementById("update-blog-delete-button")                 // Update Blog Delete Button
const updateBlogTitleFieldEl = document.getElementById("update-blog-title")                         // Update Blog Title Field
const updateBlogBodyFieldEl = document.getElementById("update-blog-body")                           // Update Blog Body Field


// Inactivate Blog
const inactivateBlogModalEl = document.getElementById('inactivate-blog-modal')                      // Inactivate Blog Modal Window
const inactivateBlogSubmitButtonEl = document.getElementById('inactivate-blog-submit-button')     // Inactivate Blog Confirm Button
const inactivateBlogCancelButtonEl = document.getElementById('inactivate-blog-cancel-button')       // Inacitvate Blog Cancel Button
const inactivateBlogCloseButtonEl = document.getElementById('inactivate-blog-close-button')         // Inacitvate Blog Close Button

//-----------------------------//
//- POST (Add) Blog Record -//
//-----------------------------//

const postBlogHandler = async (event, userId) => {
    event.preventDefault();
    // Build JSON body
    // {
    //     "blog_title" : "Long text",
    //     "blog_body" : "Long text",
    //     "user_id" : 1	    
    // }    
    let JSONBody = {}    
    JSONBody.blog_title = document.getElementById('add-blog-title').value
    JSONBody.blog_body = document.getElementById('add-blog-body').value
    JSONBody.user_id = userId
    //Stringify the Array to prepare for FETCH
    const bodyStringified = JSON.stringify(JSONBody)    
    // FETCH Request (POST Method)
    const response = await fetch(`/api/blog/`, {
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

const putBlogHandler = async (event, blogId) => {
    event.preventDefault();
    // Build JSON body
    // {
    //     "blog_title" : "Diana Madeline",
    //     "blog_body" : 1	    
    //     "user_id" : 1	    
    // }

    let JSONBody = {}
    JSONBody.blog_title = document.getElementById('update-blog-title').value
    JSONBody.blog_body = document.getElementById('update-blog-body').value
    JSONBody.user_id = sessionEl.dataset.userId

    //Stringify the Array to prepare for FETCH
    const bodyStringified = JSON.stringify(JSONBody)

    // FETCH Request (POST Method)
    const response = await fetch(`/api/blog/${blogId}`, {
    method: 'PUT',
    body: bodyStringified,        
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        window.location.reload() // Reload screen
    } else {
        alert('Failed to Update Blog Record');
    }
    return;
};


//--------------------------------//
//- PUT (inactivate) Blog Record -//
//--------------------------------//

const inactivateBlogHandler = async (blog_id) => {
    
    console.log(blog_id)
    
    try{
    let inactivateBlogURL = `/api/blog/inactivate/${blog_id}`
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: jsonString
    }        
    const response = await fetch(inactivateBlogURL, options )
    
    await response.json()
    
    window.location.reload() // Reload screen 
    } catch (err) {
        console.error(err);
    
    }
    return;
};



    //-------------------//
    //- Event Listeners -//
    //-------------------//

//------------------------------------------//
//- Event Listener - Add Blog Modal - Show -//
//------------------------------------------//

//Show "Add Blog Modal" when "Add Blog" button is clicked
addBlogOpenModalEl.addEventListener('click', function () {
    addBlogModalEl.style.display = 'block';
});

//---------------------------------------------------//
//- Event Listener - Add Blog Modal - Hide (Cancel) -//
//---------------------------------------------------//

//Hide "Add Blog Modal" when "Cancel" button is clicked
addBlogCancelBttnEl.addEventListener('click', function () {
    addBlogModalEl.style.display = 'none';
});

//--------------------------------------------------//
//- Event Listener - Add Blog Modal - Hide (Close) -//
//--------------------------------------------------//


addBlogCloseBttnEl.addEventListener('click', function () {
    addBlogModalEl.style.display = 'none';
});

//-------------------------------------------------//
//- Event listener - Add Blog Modal - Submit Form -//
//-------------------------------------------------//
addBlogFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const userId = event.target.dataset.userId
    postBlogHandler(event, userId)
    addBlogModalEl.style.display = 'none';
})


//---------------------------------------------//
//- Event Listener - Update Blog Modal - Show -//
//---------------------------------------------//

// Assign event listener across class

 // Set up click event listeners for all updateBlogButtons
updateBlogButtonEl.forEach(editButton => {
    editButton.addEventListener('click', (event) => {

    //If clicked - carry these actions out:
        //Determine current values:
        const blogId = event.target.dataset.blogId;                                             //Blog ID (from triggering button)
        const currentBlogTitle = document.getElementById(`blog-title-${blogId}`).textContent    // Blog Title (bit of handlebar magic to insert IDs)
        const currentBlogBody = document.getElementById(`blog-body-${blogId}`).textContent      // Blog Body (bit of handlebar magic to insert IDs)
        
        // console.log (blogId)
        // console.log (currentBlogTitle)
        // console.log (currentBlogBody)
        
        //Prefill the values
        updateBlogTitleFieldEl.value = currentBlogTitle
        updateBlogBodyFieldEl.value = currentBlogBody
        updateBlogFormEl.dataset.blogId = blogId
        
        //Prefill the delete modal while we're here
        updateBlogDeleteBttnEl.dataset.blogId = blogId // Attach Blog ID to delete button
        document.getElementById('inactivate-blog-heading').textContent = currentBlogTitle
        inactivateBlogSubmitButtonEl.dataset.blogId = blogId

        //Show Update Modal Window
        updateBlogModalEl.style.display = 'block';
    });
});

//------------------------------------------------------//
//- Event listener - Update Blog Modal - Hide (cancel) -//
//------------------------------------------------------//

updateBlogCancelBttnEl.addEventListener('click', function () {
    updateBlogModalEl.style.display = 'none';
});

//-----------------------------------------------------//
//- Event listener - Update Blog Modal - Hide (close) -//
//-----------------------------------------------------//

updateBlogCloseBttnEl.addEventListener('click', function () {
    updateBlogModalEl.style.display = 'none';
});

//-----------------------------------------------//
//- Event listener - Update Wine Modal - Submit -//
//-----------------------------------------------//
updateBlogFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log ("Update Wine Record Modal - Submit")
    const blogId = event.target.dataset.blogId
    console.log(blogId)
    updateBlogModalEl.style.display = 'none';  
    putBlogHandler(event, blogId)
})

//----------------------------------------------------------//
//- Event listener - Update Blog Modal - Show Delete Modal -//
//----------------------------------------------------------//
updateBlogDeleteBttnEl.addEventListener('click', (event) => {
    event.preventDefault();    
    
    let blog_id = updateBlogDeleteBttnEl.dataset.blogId
    console.log(blog_id)
    updateBlogModalEl.style.display = 'none';     
    inactivateBlogModalEl.style.display = 'block'    
})

//--------------------------------------------------//
//- Modal (inactivate) Blog Record - Hide (Cancel) -//
//--------------------------------------------------//

inactivateBlogCancelButtonEl.addEventListener('click', function () {
    inactivateBlogModalEl.style.display = 'none';
});

//-------------------------------------------------//
//- Modal (inactivate) Wine Record - Hide (Close) -//
//-------------------------------------------------//

inactivateBlogCloseButtonEl.addEventListener('click', function () {    
    inactivateBlogModalEl.style.display = 'none';
});

//-------------------------------------------//
//- Modal (inactivate) Blog Record - Submit -//
//-------------------------------------------//

inactivateBlogSubmitButtonEl.addEventListener('click', function (event) {
    event.preventDefault();
    let blog_id = inactivateBlogSubmitButtonEl.dataset.blogId
    inactivateBlogModalEl.style.display = 'none';
    inactivateBlogHandler(blog_id)
});
