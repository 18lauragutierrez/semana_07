// app/config/db.config.js
export default {
  // Render le pasará la URL completa aquí en internet
  URL: process.env.DATABASE_URL || null,

  // Datos locales por si en tu PC sigues usando MySQL o Postgres local
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASSWORD || "",
  DB: process.env.DB_NAME || "lab07",
  PORT: process.env.DB_PORT || 3306,
  
  // CAMBIAMOS ESTO A POSTGRES
  dialect: "postgres", 
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // Render exige conexión segura SSL para PostgreSQL
  dialectOptions: process.env.DATABASE_URL ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {}
};