const logInButtonEl = document.getElementById ("log-in-button");
const signUpButtonEl = document.getElementById ("sign-up-button");

//Log in

const logIn = async ()=> {
    console.log("logIn engaged")
    try{
        let JSONBody = {}    
        JSONBody.username = "HH"
        JSONBody.password = "12345678"

        //Stringify the Array to prepare for FETCH
        const bodyStringified = JSON.stringify(JSONBody)
        
        console.log(bodyStringified)

        // FETCH Request (POST Method)
        const response = await fetch(`/api/users/login`, {
            method: 'POST',
            body: bodyStringified,        
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
        const user = await response.json()

        if (response.ok) {
            console.log (response)
            // window.location.reload() // Reload screen 
            window.location.href = "/" // Redirect to homePage
        } else {
            alert('Log in unsuccessful');    
        }return;
    } catch (err) {
        console.error(err);        
    }
    return;
}

// Create account 

const createAccount = async ()=> {
    console.log("createAccount engaged")
    try{
        let JSONBody = {}    
        JSONBody.username = "AA"
        JSONBody.password = "12345678"

        //Stringify the Array to prepare for FETCH
        const bodyStringified = JSON.stringify(JSONBody)
        
        // FETCH Request (POST Method)
        const response = await fetch(`/api/users/login`, {
            method: 'POST',
            body: bodyStringified,        
                headers: {
                    'Content-Type': 'application/json',
                },
            });


        if (response.ok) {
            window.location.reload() // Reload screen 
            console.log (response)
        } else {
            alert('Failed to log in');    
        }return;
    }catch (err) {
        console.error(err);        
    }
    return;
}

//----------------------------------//
//- Event Listener - Log in Button -//
//----------------------------------//

logInButtonEl.addEventListener('click', function(event) {
    console.log("Log in button clicked")
    // console.log(event)
    logIn()   
});

signUpButtonEl.addEventListener('click', function (event) {
    event.preventDefault();
    // console.log ("Update Vintage Delete button clicked") 
    // inactivateVintageModalEl.style.display = 'none';    
    // let vintage_id = event.target.getAttribute("value")
    // console.log (vintage_id)       
    // console.log(event) 
    createAccount()
});