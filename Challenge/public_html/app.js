let amigos = [];
function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    let nombre = amigo.value.trim();
    if(!nombre){
        alert('ingresa un nombre');
        return;
    }
    amigos.push(nombre);
    amigo.value='';
    amigo.focus();
    crearList();
}
function crearList(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML='';
    
    amigos.forEach((nombre)=>{
        let lista = document.createElement('li');
        lista.textContent = nombre;
        listaAmigos.append(lista);
    });
}
function sortearAmigo(){
    if(amigos.length===0){
        alert('Se necesita mas de dos');
        return;
    }
    let sortear = Math.floor(Math.random()*amigos.length);
    let sorteo = amigos[sortear];
    let resGanador = document.getElementById('resultado');
    resGanador.innerHTML='';
    
    let ganSorteo = document.createElement('li');
    ganSorteo.textContent = `el Gandos es ${sorteo}`;
    resGanador.appendChild(ganSorteo);
}