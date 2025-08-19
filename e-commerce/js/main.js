//  get root element from html

let root = document.getElementById("root");

function LoginPage() {
    let loginContainer = document.createElement("section")
    // login-container
    loginContainer.setAttribute("class", "login-container")

    // login-sub-container

    let loginSubContainer = document.createElement("div")
    loginSubContainer.setAttribute("class", "login-sub-container")

    loginContainer.appendChild(loginSubContainer)
    return loginContainer
}
//  render login page here
root.appendChild(LoginPage())