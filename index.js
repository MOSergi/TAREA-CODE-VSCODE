function listaproductos(){
document.write(`
    <link rel="stylesheet" href="index.css">
    <section class="estilo_js">
        <h2>Lista de ropa: </h2>
        <h3>1)Pantalon</h3>
        <h3>2)Chaqueta</h3>
        <h3>3)Jersey</h3>
        <h3>4)Bufanda</h3>
        <h3>5)Gorro</h3>
        <button><a href="ejercicioJS.html">Volver a la pagina anterior</a></button>
    </section>
    <footer id="footer_js">
        <h3>Pagina Creada por Sergio para la tarea de CODE</h3>
    </footer>    
`);
}
function myfuncion(){
    var numero_usuarios = prompt("Introduce el numero de personas que van a comprar: ");
    var nombre, nombreUsuario;
    var dinero;
    for(var i = 1; i <=numero_usuarios; i++){
        nombre = prompt("Introduce tu nombre");
        alert("Hola: " + nombre);
        dinero = prompt("Introduce el dinero que quieres usar: ");
        if (dinero<0.6){
            alert("No tienes suficiente dinero para comprar una prenda de ropa");
        } else if(dinero>=0.6 && dinero<1) {
            alert("Tienes dinero para comprar el 'Pantalon'");
        } else if(dinero>=1 && dinero<1.6){
            alert(`Tienes dinero para comprar los siguientes elementos: 
            'Pantalón' y 'Chaqueta' `);
        } else if (dinero>=1.6 && dinero<2.0){
            alert("Puedes comprar los siguientes elementos: 'Pantalon', 'Chaqueta' y 'Jersey'")
        } else if (dinero>=2.0 && dinero<2.5){
            alert("Puedes comprar los siguientes elementos: 'Pantalon', 'Chaqueta' y 'Jersey' y 'Bufanda'");
        } else if (dinero>=2.5 && dinero<3){
            alert("Puedes comprar los siguientes elementos: 'Pantalon', 'Chaqueta' y 'Jersey', 'Bufanda' y 'Gorro'");
        } else if (dinero>=3){
            alert("Puedes comprar todos los elementos y te sobra dinero");
        } else {
            alert("Error, parametros no validos");
        }
    }

}
