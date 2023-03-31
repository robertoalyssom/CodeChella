export default function validateName(field) {
    let brokenName = field.value.split("");
    
    let spaceString = brokenName.find(string => string === " "); // find space string
    
    if(!spaceString && field.value.length >= 4) {
        field.setCustomValidity("error Message");
    }
};