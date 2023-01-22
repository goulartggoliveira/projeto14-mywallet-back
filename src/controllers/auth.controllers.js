import  {usersCollection}  from '../database/teste';
import { bcrypt } from 'bcrypt';



export async function singUp(req, res){
const user = res.local.user
const cryptPassword = bcrypt.hashSync(user.password, 10)

try {
    
    await usersCollection.InsertOne({...user, password: cryptPassword});
    res.sendStatus(201)

} catch (error) {
    console.log(error)
    res.sendStatus(500)
}
}


export async function SignIn(req, res ){}