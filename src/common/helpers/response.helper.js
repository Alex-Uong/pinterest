export const responseSuccess = (
  data = null,
  message = `ok`,
  statusCode = 200
) => {
  return {
    status: "success",
    statusCode: statusCode,
    message: message,
    data: data,
    doc: "domain.com/swagger",
  };
};

// định dạng lỗi trả về
export const responseError = (
  message = `Internal server error`,
  statusCode = 500,
  stack = null
) => {
  return {
    status: `error`,
    statusCode: statusCode,
    message: message,
    // lỗi nên không có data, có stack để dễ đọc lỗi
    stack: stack,
    // cái này phụ thôi, kiểu hiển thị doc cho người ta đọc cho nó chuyên nghiệp
    doc: "domain.com/swagger",
  };
};
