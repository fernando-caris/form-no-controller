# Formulario No Controlado con React y TypeScript
![Imagen de la página de inicio de EC2](./images/GIF.gif)
## Descripción

Este Proyecto Tiene la intención de mejorar mi habilidades y mostrar mis avanzes en **AWS** y **DOCKER**.
Consiste en un formulario no controlado desarrollado con **React** y **TypeScript** totalmente responsivo. El objetivo principal es proporcionar una aplicación simple que se pueda ejecutar en un contenedor **Docker**, lo que permite probar su funcionamiento de manera consistente en cualquier entorno. Además, este proyecto incluye una guía detallada sobre cómo desplegar la aplicación en una instancia EC2 de **AWS** para facilitar las pruebas en la nube con Docker.
<div>
  <br>
  <img src="./images/aws.png" alt="Aws" width="250">
  <img src="./images/docker.png" alt="Docker" width="250">
</div>

## Tecnologías
  - React - TypeScript - Docker - AWS (EC2)
  - Html - css - sass - Js
### Requisitos
1. Tener instalado Git
2. Tener instalado Docker
### Pasos
1. **Clonar el repositorio:**
   Para comenzar, clona este repositorio en tu máquina local o servidor.
   Tambien puedes ejecutar en una instancia **ec2** Con la siguiente Guia [AWS-Guia.md](./AWS-Guia.md) Recuerda tener Git y Docker instalados dependiendo de donde ejecutaras la app, listo para usar.

   ```bash
   git clone https://github.com/fernando-caris/form-no-controller.git

2. **Construir la imagen Docker:**
   Una vez clonado el repositorio, navega al directorio del proyecto y construye la imagen Docker:

   ```bash
   cd form-no-controller
   docker build -t formulario-react .
   ```

3. **Ejecutar el contenedor Docker:**
   Ejecuta la aplicación en un contenedor Docker mapeando el puerto 3000 al puerto 80 de tu máquina, estara corriendo en segundo plano:
   ```bash
   docker run -d -p 80:3000 formulario-react
   ```
4. **¡Listo!**:
Tu aplicación ahora está corriendo en el contenedor Docker. Para acceder a ella, simplemente abre tu navegador y dirígete a:
http://\<tu-ip-publica\>:80

Recuerda que \<tu-ip-publica\> debe ser reemplazada por la dirección IP pública de tu instancia EC2. El puerto 80 está mapeado al puerto 3000 de tu aplicación dentro del contenedor, así que no tienes que preocuparte por nada más. ¡Tu app debería estar visible y funcionando!
   
   
   
