import { UnauthorizedException } from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";

export const updateUserService = {
  update: async function (req) {
    const userId = req.user.nguoi_dung_id;
    if (!userId) {
      throw new UnauthorizedException("khong co quyen truy cap");
    }

    const data = {};
    // chi cho phep cac field sau duoc cap nhat
    ["ho_ten", "tuoi", "anh_dai_dien"].forEach((field) => {
      if (req.body[field]) {
        data[field] = req.body[field];
      }
    });

    if (Object.keys(data).length === 0) {
      throw new UnauthorizedException("khong co quyen truy cap");
    }
    const updateUser = await prisma.nguoi_dung.update({
      where: {
        nguoi_dung_id: Number(userId),
      },
      data: data,
      select: {
        nguoi_dung_id: true,
        email: true,
        ho_ten: true,
        tuoi: true,
        anh_dai_dien: true,
      },
    });

    return updateUser;
  },
};
