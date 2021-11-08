import Data from "../models/data.model";
import pool from "../database";


const dataCtrl = {};

dataCtrl.getPrueba = async (req, res) => {
    const response = await pool.query('SELECT * FROM base.client;');
    console.log(response.rows);
    res.send(response.rows)
}

dataCtrl.listarData = async (req, res) => {
    try {
        // obtener un areglo con todos los datos
        const arregloData = await pool.query('SELECT * FROM base.client;');

        res.status(200).json(arregloData.rows);

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
        console.log(dataNew.location);
        const arregloData = await pool.query('INSERT INTO base.client(locationid, firstname, lastname, phone, email, residence, propertysarch, isolder, acceptterms, accepimage) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);',
            [dataNew.location, dataNew.firstname, dataNew.lastname, dataNew.phone, dataNew.email, dataNew.residence, dataNew.propertySearch, dataNew.isOlder, dataNew.acceptTerms, dataNew.acceptImage]);
        res.status(201).json({
            mensaje: "Dato agregado a la BD"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, dato no agregado "
        })
    }
}

// Para editar data recordar mandar como parametro el id en la peticion 
// con la direccion  /api/(id del objeto a eliminar) 
dataCtrl.editarData = async (req, res) => {
    try {
        const { locationid,
            firstname,
            lastname,
            phone,
            email,
            residence,
            propertySarch,
            isOlder,
            acceptTerms,
            acceptImage
        } = req.body
        console.log(req.body)
        const arregloData = await pool.query('UPDATE base.client SET locationid=$1, firstname=$2, lastname=$3, phone=$4, email=$5, residence=$6, propertysarch=$7, isolder=$8, acceptterms=$9, accepimage=$10 WHERE clientid = $11;',
            [locationid, firstname, lastname, phone, email, residence, propertySarch, isOlder, acceptTerms, acceptImage, req.params.id]);
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
        await pool.query('DELETE FROM base.client WHERE clientid = $1', [req.params.id])
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
        const datobuscado = await pool.query('SELECT * FROM base.client WHERE clientid = $1', [req.params.id])
        
        res.status(200).json(datobuscado.rows)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener el dato"
        })
    }

}


export default dataCtrl;