export default function validateName(name) {
    let brokenName = name.split("");
    
    let spaceString = brokenName.find(string => string === " "); // find space string
    
    if(!spaceString) {
        const errorMessage = "Por favor! Preencha com o nome completo, ok?";
        return errorMessage;
    };
};