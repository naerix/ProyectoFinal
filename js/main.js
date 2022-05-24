class Misusuarios{
    constructor(nombre,apellido,usuario,email,contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.email = email;
        this.contraseña = contraseña;
    }
    
}
const UsuariosRegistrados = []

mostrarMenu();

function mostrarMenu(){

    let opciones = Number(prompt("ingrese una opcion 1- Registrase || 2- iniciar sesion"));
    
    if(opciones === 1){
        registro();
    }

    else if (opciones === 2){
        logIn();
    }

    else{
        alert("opcion incorrecta, por favor ingrese una opcion valida")
        let i = 0
        while(opciones !== 1 && opciones !== 2){
            mostrarMenu()
            i++
        }
    }
}


function registro(){
    const nombre = prompt("ingrese su nombre");
    const apellido = prompt("ingrese su apellido");
    const usuario = prompt("ingrese un nombre de usuario");
    const mail = prompt("ingrese su email");
    const contraseña = prompt("ingrese una contraseña");

    const usr = new Misusuarios(nombre,apellido,usuario,mail,contraseña);

    UsuariosRegistrados.push(usr)

    logIn()
}

console.log(UsuariosRegistrados[0].nombre)



function logIn(){
    let user = prompt("ingrese su nombre de usuario")
    let pass = prompt("ingrese su contraseña")

    validacion = user === UsuariosRegistrados[0].usuario && pass === UsuariosRegistrados[0].contraseña
    if(validacion != false){
        alert( "BIENVENIDO" + " " + UsuariosRegistrados[0].nombre + " " + UsuariosRegistrados[0].apellido)

        alert("hemos enviado un correo electronico de verificacion a " + " " + UsuariosRegistrados[0].email + " por favor revice su casilla de correo electronico")
    }

    else{
        alert("datos incorrectos, por favor ingrese sus datos nuevamente")
        while(validacion != true){
            logIn();
            i++
        }
    }
 }

