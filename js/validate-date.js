export default function notOfLegalAge(date) {
    let userDate = new Date(date);
    let atualDate = new Date();
    
    let userDateMore18 = new Date(userDate.getUTCFullYear() + 18, userDate.getUTCMonth(), userDate.getUTCDate());

    if(userDateMore18 > atualDate) {
        return "Atenção: a compra de ingressos é restrita a maiores de 18 anos.";
    }
};