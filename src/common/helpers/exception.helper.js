import { statusCodes } from "./status-code.helper.js";

// copy class Error và thêm thuộc tính
export class BadRequestException extends Error {
  constructor(message = "Bad request") {
    // lấy dữ liệu từ class Error qua
    super(message);

    this.code = statusCodes.BAD_REQUEST;
  }
}

export class UnauthorizedException extends Error {
  constructor(message = "UnauthorizedException") {
    // lấy dữ liệu từ class Error qua
    super(message);

    this.code = statusCodes.UNAUTHORIZED;
  }
}
