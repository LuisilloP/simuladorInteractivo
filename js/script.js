window.addEventListener('DOMContentLoaded', (event) => {


    const precioJuegos =["30000","20000","40000"];
   const btn = document.getElementById('boton');
    const cantidadGta =  document.getElementById("cantidadGta");
    const cantidadDbz =  document.getElementById("cantidadDbz");
    const cantidadUnc =  document.getElementById("cantidadUnc");
    let total = 0;
    btn.addEventListener("click",()=>
    {

        if(cantidadGta.value!=0 || cantidadDbz.value !=0 || cantidadUnc.value !=0)
        {
            for(let i = 0; i<precioJuegos.length;i++)
            {
               switch (i)
               {
                case 0:
                    if(cantidadDbz.value!=0)
                    {
                        total +=precioJuegos[i]*cantidadDbz.value;  
                    }
                    break;
                case 1:
                    if(cantidadGta.value!=0)
                    {
                        total +=precioJuegos[i]*cantidadGta.value;  
                    }
                    break;
                case 2:
                    if(cantidadUnc.value!=0)
                    {
                        total +=precioJuegos[i]*cantidadUnc.value;  
                    }
                    break;        
               }
            }
        alert("Su tutal es de "+total);
        total=0;
        }else
        {
            alert("ingresa una cantidad de algun producto");
        }

    }); 
});


