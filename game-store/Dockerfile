FROM maven:3-eclipse-temurin-17

RUN mkdir /app
COPY . /app
WORKDIR /app

CMD bash -c 'cd /app && mvn spring-boot:run'