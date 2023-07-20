export const createError=(status,message)=>{
    console.log(status,message)
    const err=new Error()
    err.status= status
    err.message=message 
    return err  
}