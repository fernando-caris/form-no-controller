# Usamos una imagen base de node.js
FROM node:18 AS build

# Definimos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de configuración de npm (y package-lock.json o yarn.lock)
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la app
COPY . .

# Construimos la app para producción
RUN npm run build

# Usamos una imagen ligera para producción
FROM nginx:alpine

# Copiamos los archivos estáticos generados en la construcción al contenedor de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 para que nginx pueda servir los archivos estáticos
EXPOSE 80

# Iniciamos nginx en modo foreground para que el contenedor no se cierre
CMD ["nginx", "-g", "daemon off;"]