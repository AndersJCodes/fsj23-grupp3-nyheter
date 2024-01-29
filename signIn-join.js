const modal = document.querySelector('#modals');


const authModal = () =>{
    //Modal
    //Sign In
    modal.innerHTML += `
        <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel">Sign In</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                    ${signInForm()}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>    
    `
    //Join
    modal.innerHTML += `
        <div class="modal fade" id="joinModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel">Join</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        ${joinForm()}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>    
    `

}

const signInForm = () => {
    return(`
    <form>
        <div class="mb-3">
            <label for="inputEmail" class="form-label">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword"> 
        </div>
        <div class="mb-3 form-check">
            <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#joinModal">Register new user</a>
        </div>
        <button type="submit" class="btn btn-success">Sign in</button>
    </form>
    `)
}

const joinForm = () =>{
    return(`
    <form>
        <div class="mb-3">
            <label for="inputEmail" class="form-label">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword"> 
        </div>
        <button type="submit" class="btn btn-success">Register</button>
    </form>
    `)
}

export default authModal();

