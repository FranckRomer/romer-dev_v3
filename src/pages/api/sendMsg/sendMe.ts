// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { InsertData, HoraActual } from"@/crud/index"

type Data = {
    msg: string
}

export default async function sendMsg(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    //    
    console.log(req.body);
    const body = req.body
    if (body == '') {
        res.status(400).json({ msg: 'Mensaje Sin Datos' })        
    }
    // se agrega la hora
    const hora = HoraActual()
    console.log(hora);
    body.hora = hora
    
    //Busqueda
    let result_find = await InsertData(body, "portfolio", "mensaje_formulario")

    res.status(200).json({ msg: 'Mensaje Exitoso' })
}
