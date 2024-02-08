function validation(id:string, message:string):void{
    
    const form:any| undefined | null = document.querySelector(`#${id}`);
    removeValidation(form);
    const errorMessage:string = message.slice(9,message.indexOf("("));
    const element:any = document.createElement("p");
    element.style.color='red';
    element.id="validationMessage"
    element.innerText= errorMessage;
    form.appendChild(element);
}

function removeValidation(form:any):void{

    if(form.querySelector('#validationMessage')!=null)
    {form.querySelector("#validationMessage").remove();}
}
export default validation
export {removeValidation}