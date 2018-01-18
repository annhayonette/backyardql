> La gestión de infraestructura de procesamiento en Unholster está basada en Docker Swarm + múltiples servicios AWS. Aquí se describe como está configurado y organizado nuestro Swarm.

# Configuración y gestión de Swarm

Nuestro cluster está configurado usando un CloudFormation template provisto y mantenido por Docker https://docs.docker.com/docker-for-aws/ usando la edición Community estable.


Template URL: `https://editions-us-east-1.s3.amazonaws.com/aws/stable/Docker-no-vpc.tmpl`

Algunos parámetros relevantes:

* Llave SSH:  `unholster-devops`
* Daily resource cleanup: `enabled`
* Cloudwatch for logging: `yes`
* EFS prerequisites for CloudStor: `yes`

# Portainer
Para la gestión del cluster Swarm usamos [Portainer](http://portainer.io), una UI web para Swarm.

La instalación inicial de Portainer en el cluster se realizó con el siguiente comando:
```
docker service create \
    --name portainer \
    --network devops \
    --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
    --mount type=volume,volume-driver=cloudstor:aws,source=devops-portainer,dst=/data \
    portainer/portainer \
    -H unix:///var/run/docker.sock
 ```
