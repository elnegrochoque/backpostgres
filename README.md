# Api para archivo data [Python_1]

APi que contiene los metodos GET, POST, PUT y DELETE para un JSON 

# Ejemplo del modelo del archivo JSON

var data = {
      'location': "Arena Miami",
      'status': "Pending",
      'firstname': firstNameController.text,
      'lastname': lastNameController.text,
      'phone': phoneController.text,
      'email': emailController.text,
      'residence': country,
      'propertySearch':resident,
      'isOlder':true,
      'acceptTerms':true,
      'acceptImage':optoutImage,
      'createdDate': new DateTime.now(),
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

La conexion a la BD esta dada en el archivo /src/database.js const url