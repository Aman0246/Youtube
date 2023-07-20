import bcrypt from 'bcrypt'
const saltRounds = 10;

export  const hassPassword=async(password)=>{

    const hash = bcrypt.hash(password, saltRounds);
    return hash;

}

export const compare=async(password,passwordHash)=>{

    const match = await bcrypt.compare(password, passwordHash);
    return match;
}

