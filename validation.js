function validation(id, message){
    
    const form = document.querySelector(`#${id}`);
    removeValidation(form);
    const errorMessage = message.slice(9,message.indexOf("("));
    const element = document.createElement("p");
    element.style.color='red';
    element.id="validationMessage"
    element.innerText= errorMessage;
    form.appendChild(element);
}

function removeValidation(form){
    if(form.querySelector('#validationMessage')!=null)
    {document.querySelector("#validationMessage").remove();}
}
export default validation
export {removeValidation}