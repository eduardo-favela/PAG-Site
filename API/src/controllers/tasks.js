import {connect} from '../database'

export const getTasks = async (req, res)=>{
    const db = await connect();
    const [rows] = await db.query('select * from tasks');
    res.json(rows);
}
export const getTask = async (req, res)=>{
    const db = await connect();
    const row = await db.query('select * from tasks where id = ?', [req.params.id]);
    res.json(row);
}
export const getTaskCount = async (req, res)=>{
    const db = await connect();
    const [rows] = await db.query('select count(*) as count from tasks');
    res.json(rows[0].count);
}
export const saveTask = async (req, res)=>{
    const db = await connect();
    const [results] = await db.query(`INSERT INTO tasks(title, description) VALUES (?,?)`,[req.body.title, req.body.description]);
    res.json({
        id:results.insertId,
        ...req.body
    });
}
export const deleteTask = async (req, res)=>{
    const db = await connect();
    const [result] = await db.query('DELETE FROM tasks WHERE id = ?',[req.params.id]);
    if(result.affectedRows>0){
        res.sendStatus(204);
    }
    else{
        res.json({error:"Registro no encontrado"})
    }
}
export const updateTask = async (req, res)=>{
    const db = await connect();
    const [result] = await db.query(`UPDATE tasks SET ? WHERE id = ?`,[req.body, req.params.id]);
    if (result.changedRows>0) {
        res.sendStatus(204);
    }
    else{
        res.json({error:"Registro no encontrado"})
    }
}