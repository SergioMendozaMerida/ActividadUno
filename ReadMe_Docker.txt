UTILIZAMOS EL SIGUIENTE COMANDO PARA CREAR LA IMAGEN DE LA APP

docker build -t docker-react-image:1.0 .

UTILIZAMOS EL SIGUIENTE COMANDO PARA CREAR EL CONTENEDOR

docker run -p 4000:80 --name docker-react-container docker-react-image:1.0  