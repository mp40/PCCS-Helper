export const getGrenadeTof = (range) => {
  switch (true) {
    case (range < 7.1):
      return 2.3;
    case range < 18.1:
      return 4.3;
    case range < 35.1:
      return 6.3;
    default:
      return 8.3;
  }
};
