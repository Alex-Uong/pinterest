import prisma from "../common/prisma/init.prisma";
import bcrypt from "bcrypt";
import tokenService from "./tokenService";

const SALT_ROUNDS = 10;

const authService = {
  register: async (req) => {
    const { email, password, fullName, age } = req.body;

    // Tìm kiếm email tồn tại hay chưa.
    const userExist = await prisma.nguoi_dung.findUnique({
      where: {
        email: email,
      },
    });

    if (userExist) {
      const err = new Error("Email đã tồn tại");
      err.statusCode = 400;
      throw err;
    }

    // mã hoá password trước khi đưa vào db
    const passwordHash = bcrypt.hashSync(password, SALT_ROUNDS);

    // ok, đưa vào database nào
    const userNew = await prisma.nguoi_dung.create({
      data: {
        email: email,
        mat_khau: passwordHash,
        ho_ten: fullName,
        tuoi: age,
      },
    });

    // xoá pass
    delete userNew.mat_khau;

    return userNew;
  },
  login: async (req) => {
    const { email, password } = req.body;

    // xem email có trong db chưa
    const userExist = await prisma.nguoi_dung.findUnique({
      where: {
        email: email,
      },
    });

    console.log("userExist", userExist);

    if (!userExist) {
      const err = new Error("Email không tồn tại");
      err.statusCode = 400;
      throw err;
    }

    // Kiem tra mat khau
    const isPassword = bcrypt.compareSync(password, userExist.mat_khau);

    if (!isPassword) {
      const err = new Error("Sai mat khau");
      err.statusCode = 400;
      throw err;
    }

    // token
    const tokens = tokenService.createTokens(userExist.nguoi_dung_id);

    return tokens;
  },
};

export default authService;
