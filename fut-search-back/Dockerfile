FROM eclipse-temurin:17-jdk-alpine AS build
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar","/app.jar"]