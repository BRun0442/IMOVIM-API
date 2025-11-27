import mysql from 'mysql2/promise'

const connect = async () => {
    // Atenção: A maioria dos bancos Cloud exige SSL
    const connection = await mysql.createConnection({
        uri: process.env.DATABASE_URL, // Pega a string completa da Vercel
        ssl: {
            rejectUnauthorized: true // Obrigatório para garantir segurança
        }
    })
    
    return connection
}

export default { connect }
