function validarFormulario() {
    // Obtener referencias a los elementos del formulario
    const nombre = document.getElementById('nombre');
    const telefono=document.getElementById('telefono');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const medioContacto = document.querySelector('input[name="medioContacto"]:checked');
    const imagen = document.getElementById('imagen');
  
    // Inicializar variables para almacenar si los campos son válidos
    let nombreValido = true;
    let emailValido = true;
    let asuntoValido = true;
    let mensajeValido = true;
    let medioContactoValido = true;
    let imagenValida = true;
  
    // Validar cada campo
    if (nombre.value === '') {
      nombreValido = false;
      mostrarError('nombre', 'El nombre es obligatorio');
    } else {
      ocultarError('nombre');
    }
  
    if (email.value === '') {
      emailValido = false;
      mostrarError('email', 'El correo electrónico es obligatorio');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailValido = false;
      mostrarError('email', 'El correo electrónico no es válido');
    } else {
      ocultarError('email');
    }
  
    if (telefono.value === '') {
      asuntoValido = false;
      mostrarError('Telefono', 'El Telefono es obligatorio');
    } else {
      ocultarError('Telefono');
    }
  
    if (mensaje.value === '') {
      mensajeValido = false;
      mostrarError('mensaje', 'El mensaje es obligatorio');
    } else {
      ocultarError('mensaje');
    }
  
    if (!medioContacto) {
      medioContactoValido = false;
      mostrarError('medioContacto', 'Debe seleccionar un medio de contacto');
    } else {
      ocultarError('medioContacto');
  