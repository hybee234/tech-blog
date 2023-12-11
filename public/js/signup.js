const signUpFormEl = document.getElementById("sign-up-form");
const signUpNameField = document.getElementById("sign-up-name")
const signUpEmailField = document.getElementById("sign-up-email")
const signUpPasswordField = document.getElementById("sign-up-password")
const signUpRepeatPasswordField = document.getElementById("sign-up-repeat-password")

//---------//
//-Sign Up-//
//---------//

const signUpHandler = async ()=> {
    console.log("signUpHandler engaged")
    try{
        //Check if passwords match
        if (signUpPasswordField.value !== signUpRepeatPasswordField.value) {
            console.log("Passwords don't match")
            showToast('Passwords do not match, please check','red')
            return;
        } else {
            console.log ("Passwords match")
        }
        
        let JSONBody = {}
        JSONBody.name = signUpNameField.value    
        JSONBody.email = signUpEmailField.value
        JSONBody.password = signUpPasswordField.value

        //Stringify the Array to prepare for FETCH
        const bodyStringified = JSON.stringify(JSONBody)
        console.log(bodyStringified)
        // FETCH Request (POST Method)
        const createUser = await fetch(`/api/users/signup`, {
            method: 'POST',
            body: bodyStringified,        
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        if (createUser.ok) {
            // window.location.reload() // Reload screen
            window.location.href = "/" // Redirect to homePage
            console.log (createUser)
        } else {
            // alert('Failed to Sign Up');    
            showToast('Sign up failed','red');
        }return;
    }catch (err) {
        console.error(err);
    return;
    }
};

//-------------------------------------------//
//- Event Listener - Sign Up Form Submitted -//
//-------------------------------------------//

signUpFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Sign Up Form Submitted")
    signUpHandler(event)
});


// Function to show toast notification
function showToast(message, colour) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.backgroundColor = `${colour}`
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}