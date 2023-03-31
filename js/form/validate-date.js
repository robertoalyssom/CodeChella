export default function notOfLegalAge(field) {
    let userDate = new Date(field.value);
    let atualDate = new Date();
    
    let userDateMore18 = new Date(userDate.getUTCFullYear() + 18, userDate.getUTCMonth(), userDate.getUTCDate());

    if(userDateMore18 > atualDate) {
        field.setCustomValidity("error message");
    };
};