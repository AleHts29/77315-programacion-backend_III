export const generateUserErrorInfo_ESP = (user) => {
    return ` Se ha producido un error al intentar crear el usuario.\
    Lista de propieades requeridas:
     -> first_name: type String, recibido:${user.first_name},
     -> email: type String, recibido:${user.email}
    `
}


export const generateUserErrorInfo_ENG = (user) => {
    return `An error occurred while trying to create the user.\
    List of required properties:
     -> first_name: type String, received:${user.first_name},
     -> email: type String, received:${user.email}
    `
}


export const generateUserErrorInfo_FRA = (user) => {
    return `Une erreur s'est produite lors de la tentative de création de l'utilisateur.\
    Liste des propriétés requises:
     -> first_name: type String, reçu:${user.first_name},
     -> email: type String, reçu:${user.email}
    `
}



export const generateUserErrorInfo_DEU = (user) => {
    return `Beim Versuch, den Benutzer zu erstellen, ist ein Fehler aufgetreten.\
    Liste der erforderlichen Eigenschaften:
     -> first_name: type String, erhalten:${user.first_name},
     -> email: type String, erhalten:${user.email}
    `
}
