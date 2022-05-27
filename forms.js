const Nombre= document.getElementById ("myname")
const Apellido= document.getElementById ("surname")
const correo = document.getElementById ("mail")
const contrasenia= document.getElementById ("password")
const repitacontrasenia= document.getElementById ("repeatpassword")
const terminosycondiciones=document.getElementById ("termsAndConditions")
const form= document.getElementById ("form")
const listInputs = document.querySelectorAll (".form-input")
console.log (listInputs);
 



   


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (listInputs.value==0) {
        console.error ("Completa el nombre");

    }
})