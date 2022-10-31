import  {conectionApi} from "../assets/whatsapp/apiWhatsapp.js";

const d = document,
    $cartValue = d.querySelector(".contCark"),
    $whatsapp = d.querySelector("#whatsapp"),
    $textCont = d.querySelector('.ElementSet'),
    $modalPorta = d.querySelector('.modalPortafolio'),
    $content =  d.querySelector('main');

var selecPro = [],
    message;  

const setWhatsapp = e =>{
    console.info ("Data de salidad y envio al whatsapp");
    let data = {},
        apiWhatsapp; 
    if (selecPro.length > 0){
        data = {
            'message': 'Un Cordial saludo estoy interesado en el siguiente servicio',
            'servicio': selecPro
        };
    }else{
        data = {
            'message': "Un Saludo, Esto Interesado En Sus Servicios",
            'servicio': 0,
        };
    }

    //llamado de conecion de a whatsapp
    apiWhatsapp = new  conectionApi();
    message = apiWhatsapp.getData(data); 
    apiWhatsapp.set("_blank","584125687995",message);    

}

//funcion para el registro dentro del array
function ctrlData (dta,event){
    //evaluamos si ya existe
    let index = selecPro.findIndex((e) => e == dta);
    console.log(index);
    
    //si el Resultado es -1 
    // se guarda el valor en el arreglo
    if(index < 0){
        selecPro.push(dta);
        event.target.innerHTML = `
            Quitar
            <span class="addCarkIcons">
                <i class="fa-solid fa-cart-shopping"></i>
            </span>
        `;
    }else if (index >= 0){
        //para eliminarla 
        selecPro.splice(index, 1);
        event.target.innerHTML = `
            Agregar
            <span class="addCarkIcons">
                <i class="fa-solid fa-cart-shopping"></i>
            </span>
        `;
    }
    renderText();
    $cartValue.innerText= selecPro.length;
}

// dibujamos el texto del Carro
function renderText() {  
    let $html = ``;
    selecPro.forEach((e)=>{
        $html += `
            <p>
                ✅ ${e}
            </p>
        `;
    });
    $textCont.innerHTML = $html;
}

$whatsapp.addEventListener("click",setWhatsapp);
// $whatsapp.addEventListener("click",()=>{
//     console.log(`${selecPro}`);
//     console.log(selecPro.length)

// });

//gestion de carrito de Ventas 
$content.addEventListener('click',(e)=>{
    console.log(e);
    e.target.classList.forEach(element => {
        switch (element) {
            case 'btnWEB':
                ctrlData("Programación de pagina web.",e);
                break;
            case 'ventasBTN':
                ctrlData("Sistemas de Ventas en Linea.",e);
                break;
            case 'sistemas':
                ctrlData("Sistemas de Gestión empresarial.",e);
                break;
            case 'appBTN':
                ctrlData("Aplicaciones Móviles.",e);
                break;
            case 'soporteBTN':
                ctrlData("Soporte Técnico a Equipos y Usuarios.",e);
                break;
            
            // case 'soporteBTN':
            //     console.log(`${element}`);
            //     break;
            default:
                break;
        }
    });


});


$cartValue.innerText= "0";



  
