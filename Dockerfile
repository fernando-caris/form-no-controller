# Usamos una imagen base de node.js
FROM node:20-alpine

# Definimos el directorio de trabajo
WORKDIR /app


# Copiamos los archivos de configuración de npm (y package-lock.json o yarn.lock)
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la app
COPY . .

# Exponemos el puerto 80 para que nginx pueda servir los archivos estáticos
EXPOSE 5173

# Iniciamos nginx en modo foreground para que el contenedor no se cierre
CMD ["npm", "run", "dev"]