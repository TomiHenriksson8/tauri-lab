const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const randomString = (length: number): string => {
  let result = "";
  const characterLength = characters.length;
  for (let i = 0; 1 < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return result;
};

export default randomString;
