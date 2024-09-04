

# Use an official OpenJDK runtime as a base image
#FROM maven:3.8.4-openjdk-8 AS builder

# Set the working directory inside the container
#WORKDIR /molsys-backend

# Copy the project files to the container
#COPY . /molsys-backend

# Build the Maven project
#RUN mvn clean package -DskipTests

# Use an official OpenJDK runtime as a base image
#FROM openjdk:8

# Set the working directory inside the container
#WORKDIR /molsys-backend

# Copy the JAR file from the builder stage
#COPY --from=builder /molsys-backend/target/molsys-0.0.1-SNAPSHOT.jar /molsys-backend/molsys-0.0.1-SNAPSHOT.jar

# Expose port 8080
#EXPOSE 8080

# Start the Spring Boot application
#CMD ["java", "-jar", "molsys-0.0.1-SNAPSHOT.jar"]

# Use an official OpenJDK runtime as a base image
FROM maven:3.8.4-openjdk-8 AS builder

# Set the working directory inside the container
WORKDIR /molsys-backend

# Copy the project files to the container
COPY . /molsys-backend

# Build the Maven project
RUN mvn clean package -DskipTests

# Use an official OpenJDK runtime as a base image
FROM openjdk:8

# Set the working directory inside the container
WORKDIR /molsys-backend

# Copy the JAR file from the builder stage
COPY --from=builder /molsys-backend/target/molsys-0.0.1-SNAPSHOT.jar /molsys-backend/molsys-0.0.1-SNAPSHOT.jar

# Expose port 8080
EXPOSE 8080

# Start the Spring Boot application
CMD ["java", "-jar", "molsys-0.0.1-SNAPSHOT.jar"]





