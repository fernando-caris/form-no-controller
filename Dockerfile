# Etapa de construcción
FROM node:20 AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la app
COPY . .

# Crear los archivos de producción
RUN npm run build

# Etapa de producción
FROM node:20 AS production

# Instalar 'serve' para servir los archivos estáticos
RUN npm install -g serve

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de producción desde la etapa de construcción
COPY --from=build /app/dist /app/build

# Exponer el puerto 3000
EXPOSE 3000

# Comando para servir la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]
