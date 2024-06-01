export const registerUser = async (req, res, next) => {
  try {
    console.log("register route".bgRed);
  } catch (error) {
    next(error.message);
  }
};
