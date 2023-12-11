

// const logInButtonEl = document.getElementById("login-login-button");
const logInEmailField = document.getElementById("login-email")
const logInPasswordField = document.getElementById("login-password")
const logInFormEl = document.getElementById("login-form")

//---------------------//
//- Function - Log in -//
//---------------------//

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

//------------------------------------------//
//- Event Listener - Log in form Submitted -//
//------------------------------------------//

logInFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Login Form Submitted")
    logInHandler(event);
});






//-----------------//
//- QUICK LOG INS -//
//-----------------//


//-----------------------------------------------//
//- Event Listener - Log in Button - Admin -//
//-----------------------------------------------//
const logInButtonAdminEl = document.getElementById("log-in-button-admin");
logInButtonAdminEl.addEventListener('click', function() {
    console.log("Admin Log in button clicked")
    logInHandlerAdmin()   
});

//---------------------------//
//- Function - Quick Log in -//
//---------------------------//

const logInHandlerAdmin = async (event)=> {
    console.log("logInHandler Quick Log in for HH engaged")
    try{
        let JSONBody = {}    
        JSONBody.email = "admin@email.com"
        JSONBody.password = "12345678"

        //Stringify the Array to prepare for FETCH
        const bodyStringified = JSON.stringify(JSONBody)
        
        console.log(bodyStringified)

        // FETCH Request (POST Method)
        const loginAdmin = await fetch(`/api/users/login`, {
            method: 'POST',
            body: bodyStringified,        
                headers: {
                    'Content-Type': 'application/json',
                },
            });    
        await loginAdmin.json()

        if (loginAdmin.ok) {
            console.log (loginAdmin)
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


//---------------------------------------//
//- Event Listener - Log in Button - HH -//
//---------------------------------------//
const logInButtonHHEl = document.getElementById("log-in-button-HH");
logInButtonHHEl.addEventListener('click', function() {
    console.log("HH Log in button clicked")
    logInHandlerHH();
});

//------------------------------//
//- Function - Quick Log in HH -//
//------------------------------//

const logInHandlerHH = async (event)=> {
    console.log("logInHandler Quick Log in for HH engaged")
    try{
        let JSONBody = {}    
        JSONBody.email = "hh@email.com"
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




//---------------------------------------//
//- Event Listener - Log in Button - JS -//
//---------------------------------------//
const logInButtonJSEl = document.getElementById("log-in-button-JS");
logInButtonJSEl.addEventListener('click', function() {
    console.log("JS Log in button clicked")
    logInHandlerJS();
});

//---------------------------//
//- Function - Quick Log in Admin -//
//---------------------------//

const logInHandlerJS = async (event)=> {
    console.log("logInHandler Quick Log in for JS engaged")
    try{
        let JSONBody = {}    
        JSONBody.email = "js@email.com"
        JSONBody.password = "87654321"

        //Stringify the Array to prepare for FETCH
        const bodyStringified = JSON.stringify(JSONBody)
        
        console.log(bodyStringified)

        // FETCH Request (POST Method)
        const loginJS = await fetch(`/api/users/login`, {
            method: 'POST',
            body: bodyStringified,        
                headers: {
                    'Content-Type': 'application/json',
                },
            });    
        await loginJS.json()

        if (loginJS.ok) {
            console.log (loginJS)
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