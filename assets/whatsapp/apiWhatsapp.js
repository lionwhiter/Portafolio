let  textFinal = null; 
export  class conectionApi {
    constructor (...parammet ){
       
    }
    
    //revision de parametros recibidos
    getData (params) {
        let textTitle,
            textTransform;
        try {
            if (params == null || params.length == 0 ) throw { status: "Campos Vacios" } 
            textTitle = new String (params.message);
            
            textFinal = params.message.replaceAll(" ","%20");
            textFinal = textFinal + ":%20%0a";
            console.log(textFinal);
            console.info(params);
            if(params.servicio != 0){
                for (const key of params.servicio) {
                    console.log(key);
                    textTransform = key.replaceAll(" ","%20");
                    textFinal = ` ${textFinal} ✓ ${textTransform}`;    
                    textFinal = textFinal + "%20%0a";
                }
            }
            //if (textFinal.length <= textFinal.length) throw {status: "Error al tranformar la cadena"}
            console.log(textFinal);
            return textFinal;
        } catch (err) {
            let message =  err.status || "Error interno desconocido!.."
            console.info(`Error dentro del sistema ${message}`);
        }
    } 
    //final de revision de parametros

    //Envio de cadena control de paramentros
    set(params,tlf,data){
        console.log(data);
        data = new String (data);
        /*
            parametros posibles
            _blank - La URL se carga en una nueva pestaña. Esto es por defecto.
            _parent - La URL se carga en el marco principal
            _self - La URL reemplaza la página actual
            _top - La URL reemplaza cualquier conjunto de marcos que se pueda cargar
            console.log(data);
            console.info( new String(data));
            hola%20%0Asoy

        */ 
        // let base = `https://api.whatsapp.com/send?phone=${tlf}&text=${data}`;
        let base= ` https://wa.me/${tlf}?text=${data}`;

        let  win = window.open(base, params);
        if (win) {
            //de existir la nueva instacia se muestra en pantalla
            win.focus();
        } else {
            //Mensaje de Error del sistema 
            console.error("Error al generar el nuevo enlace a la Api");
        }
    }
    //final dec manejo de elementos y contruccions de cadena

}