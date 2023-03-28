export default function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/ // for regular expressions use /.../
    
    if (!emailRegex.test(email)) {
        let errorMessage = "email invalido! Por favor, digite o email corretamente!";
        return errorMessage;
    };
};
