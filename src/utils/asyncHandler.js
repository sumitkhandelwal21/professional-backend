// --------->>> using promises <<<--------//
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// --------->>> using async/await <<<--------//
// const asyncHandler = (fn) => {
//   async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (err) {
//       res.status(err.code || 500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
// };
