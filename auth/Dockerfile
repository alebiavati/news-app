FROM quay.io/keycloak/keycloak:latest

WORKDIR /opt/jboss/keycloak

COPY . .

CMD ["-b", "0.0.0.0", "-Dkeycloak.import=/opt/jboss/keycloak/imports/realm-export.json"]
