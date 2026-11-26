const {Client}=require('pg')

const con=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password: "123123123",
    database:"project_penerbitan"
})

con.connect().then(()=> console.log("connected"))

con.query('SELECT * FROM pengguna', (err,res)=>{
    if(!err){
        console.log(res.rows)
    }else{
        console.log(err.message)
    }
    con.end;
})