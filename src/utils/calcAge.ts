export const calcAge = () => {
  const birthDate = new Date("2001-11-14");
  const currentDate = new Date();

  const differenceMs = currentDate.getTime() - birthDate.getTime();

  const ageDate = new Date(differenceMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age;
};
