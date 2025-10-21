import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req: Request, res: Response, netx)=>{
    console.log(`Entraste a la ruta ${req.path}`)
    netx()
});

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello world....')
})

app.get('/hola', (req: Request, res: Response)=>{
    res.send('Que tall')
})

app.get('/hola/:nombre', (req: Request, res: Response)=>{
    const {nombre} = req.params;
    res.send (`Hola ${nombre}`)
})

app.get('/saludo', (req: Request, res: Response)=>{
    const {apellido}=req.query;

    if(!apellido){
        return res.send('No me pasaste ningun apellido')
    }

    res.send(`tu apellido es ${apellido}`)
})

app.listen(PORT, ()=>{
    console.log(`Server run on http://localhost:${PORT}`)
})