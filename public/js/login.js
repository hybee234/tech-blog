
const logInButtonHHEl = document.getElementById("log-in-button-HH");


// const logInButtonEl = document.getElementById("login-login-button");
const logInEmailField = document.getElementById("login-email")
const logInPasswordField = document.getElementById("login-password")
const logInFormEl = document.getElementById("login-form")

const signUpButtonEl = document.getElementById("sign-up-button");

//--------------------//
//-Function - Log in -//
//--------------------//

const logInHandler = async (event)=> {
    console.log("logInHandler engaged")
    try{
        let JSONBody = {}    
        JSONBody.email = logInEmailField.value
        JSONBody.password = logInPasswordField.value

        //Stringify the Array to prepare for FETCH
        const bodyStringified = JSON.stringify(JSONBody)
        
        console.log(bodyStringified)

        // FETCH Request (POST Method)
        const login = await fetch(`/api/users/login`, {
            method: 'POST',
            body: bodyStringified,        
                headers: {
                    'Content-Type': 'application/json',
                },
            });    
        await login.json()

        if (login.ok) {
            console.log (login)
            window.location.reload() // Reload screen 
            // window.location.href = "/" // Redirect to homePage
        } else {
            alert('Log in unsuccessful');    
        }return;
    } catch (err) {
        console.error(err);        
    }
    return;
}

//-------------------//
//- Function Log in -//
//-------------------//

const logInHandlerHH = async (event)=> {
    console.log("logInHandler Quick Log in for HH engaged")
    try{
        let JSONBody = {}    
        JSONBody.email = "HH"
        JSONBody.password = "12345678"

        //Stringify the Array to prepare for FETCH
        const bodyStringified = JSON.stringify(JSONBody)
        
        console.log(bodyStringified)

        // FETCH Request (POST Method)
        const loginHH = await fetch(`/api/users/login`, {
            method: 'POST',
            body: bodyStringified,        
                headers: {
                    'Content-Type': 'application/json',
                },
            });    
        await loginHH.json()

        if (loginHH.ok) {
            console.log (loginHH)
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

//---------//
//-Sign Up-//
//---------//

const createAccount = async ()=> {
    console.log("createAccount engaged")
    try{
        let JSONBody = {}    
        JSONBody.email = "AA"
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

//-----------------------------------------------//
//- Event Listener - Log in Button - HuberHeats -//
//-----------------------------------------------//

logInButtonHHEl.addEventListener('click', function() {
    console.log("HH Log in button clicked")
    logInHandlerHH()   
});

//----------------------------------//
//- Event Listener - Log in Button -//
//----------------------------------//

logInFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Login Form Submitted")
    logInHandler(event);
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