import Data from "../models/data.model";

const dataCtrl = {};

dataCtrl.listarData = async (req, res) => {
    try {
        // obtener un areglo con todos los datos
        const arregloData = await Data.find();
        res.status(200).json(arregloData);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al obtener los datos"
        })
        
    }
}
dataCtrl.crearData = async (req, res) => {

    try {
        const {
            location,
            status,
            firstname,
            lastname,
            phone,
            email,
            residence,
            propertySearch,
            isOlder,
            acceptTerms,
            acceptImage,
            createdDate
        } = req.body
        //crear el nuevo objeto
        const dataNew = new Data({
            location,
            status,
            firstname,
            lastname,
            phone,
            email,
            residence,
            propertySearch,
            isOlder,
            acceptTerms,
            acceptImage,
            createdDate
        });
        await dataNew.save();
        res.status(201).json({
            mensaje: "Producto agregado a la BD"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error"
        })
    }
}

// Para editar data recordar mandar como parametro el id en la peticion 
// con la direccion  /api/(id del objeto a eliminar) 
dataCtrl.editarData = async (req, res) => {
    try {
        console.log(req.body)
        await Data.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "El dato fue modificado"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al editar el dato"
        })
    }
}


dataCtrl.eliminarData = async (req, res) => {
    try {
        console.log(req.params.id)
        await Data.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "el dato fue eliminado"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error eliminar el dato"
        })
    }

}

dataCtrl.obtenerUnDato = async (req, res) => {
    try {
        console.log(req.params.id)
        const datoBuscado = await Data.findById(req.params.id)

        res.status(200).json(datoBuscado)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener el dato"
        })
    }

}
dataCtrl.hola = async (req, res) => {
    try {
        console.log()
        res.status(200).json({
            mensaje: "el dato fue eliminado"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error eliminar el dato"
        })
    }

}
export default dataCtrl;