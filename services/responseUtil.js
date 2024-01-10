
const sendResponse = (res,data, statusCode=200) => {
    res.status(statusCode);
    return res.json(data);
  };
  export default sendResponse;
  