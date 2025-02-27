import Cryptr from 'cryptr';
const cryptr = new Cryptr('myTotallySecretKey', { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });

const encryptedString = cryptr.encrypt('siddharth');
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString); // CPbKO/FFLQ8lVKxV+jYJcLcpTU0ZvW3D+JVfUecmJmLYY10UxYEa/wf8PWDQqhw=
console.log(decryptedString); 