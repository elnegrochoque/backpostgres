# Api para archivo data [Python_1]

APi que contiene los metodos GET, POST, PUT y DELETE para un JSON 

# Instalacion

Para el funcionamiento de la api se instalaron las siguientes herramientas

npm install express --save
npm install babel-cli babel-preset-env
npm install -D nodemon
npm i morgan cors
npm install mongoose --save
npm install pg

# Ejemplo del modelo del archivo JSON para metodo GET
data = {
      'idlocation': 1,
      'status': "Pending",
      'firstname': firstNameController.text,
      'lastname': lastNameController.text,
      'phone': phoneController.text,
      'email': emailController.text,
      'residence': country,
      'propertySearch':resident,
      'isOlder': 1,
      'acceptTerms': 1,
      'acceptImage': 1,
      'createdDate': new DateTime.now(),
    };

# Ejemplo del modelo del archivo JSON para metodo POST

data = {
      'idlocation': 1,
      'status': "Pending",
      'firstname': firstNameController.text,
      'lastname': lastNameController.text,
      'phone': phoneController.text,
      'email': emailController.text,
      'residence': country,
      'propertySearch':resident,
      'isOlder': 1,
      'acceptTerms': 1,
      'acceptImage': 1
    };

# Metodos y rutas
Para la ruta ("/api")
Metodos GET: lista todos los archivos de la forma mencionada
Metodo POST crear un archivo nuevo en la BD

Para la ruta ("/api/:id")

Metodo GET: Obtiene el objeto con el id pasado como parametro en la ruta.
Metodo PUT: Edita el archivo con el id pasado como parametro en la ruta.
Metdodo DELETE: ELimina el archivo con el id pasado como parametro en la ruta.

# Conexion a la BD

La conexion a la BD esta dada en el archivo /src/database.js const pool

# Para ejecucion despues de clonar el repositorio
## Utilizar comando
  npm run dev