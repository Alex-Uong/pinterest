import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES,
} from "../common/constant/app.constant.js";

const tokenService = {
  createTokens: (useId) => {
    if (!useId) {
      throw new Error("khong co user id de tao token");
    }

    const accessToken = jwt.sign({ userId: useId }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES,
    });

    const refreshToken = jwt.sign({ userId: useId }, REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRES,
    });
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },
  verifyAccessToken: (token, ignoreExpiration = false) => {
    return jwt.verify(token, ACCESS_TOKEN_SECRET, { ignoreExpiration: true });
  },
  verifyRefreshToken: (token) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
  },
};

export default tokenService;