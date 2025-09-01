//  api integration 

// register

let baseUrl = "https://api.freeapi.app/api/v1"

let registerForm = document.getElementById("register-form");
registerForm.addEventListener('submit', (event) => {
    try {
        event.preventDefault();
        let successMessage = document.getElementById("success-message");
        let username = event.target.username.value;
        let email = event.target.email.value;
        let password = event.target.password.value

        register({ username, email, password, role: "USER" }).then((data) => {
            if (data.success == true) {
                successMessage.innerText = data.message;
                setTimeout(() => {
                    window.location.href = `../snap-card/login.html`
                }, 2000)

            }
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(error.message);

    }
})

async function register(userData) {
    try {
        let url = `${baseUrl}/users/register`
        let response = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData) })
        let data = await response.json();
        console.log(data);

        if (data.statusCode == 200) {
            return data;
        }
        else {
            return { success: false, message: "Registration failed...." }
        }
    } catch (error) {
        console.log(error.message);

    }

}