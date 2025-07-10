import prisma from "../common/prisma/init.prisma";

export const userPageService = {
  create: async function (req) {
    return `This action create`;
  },

  findAll: async function (req) {
    return `This action returns all userPage`;
  },

  findOne: async function (req) {
    const { id } = req.params;

    const user = await prisma.nguoi_dung.findUnique({
      where: {
        nguoi_dung_id: Number(id),
      },
      select: {
        nguoi_dung_id: true,
        email: true,
        ho_ten: true,
        tuoi: true,
        anh_dai_dien: true,
      },
    });
    return user;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} userPage`;
  },

  remove: async function (req) {
    const { id } = req.params;
    const user = req.user.nguoi_dung_id;
    console.log("user", user);
    const img = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: Number(id),
      },
      select: {
        nguoi_dung_id: true,
      },
    });

    if (!img) {
      throw new Error("Image not found");
    }

    if (img.nguoi_dung_id !== Number(user)) {
      throw new Error("You are not the owner of this image");
    }

    await prisma.hinh_anh.delete({
      where: {
        hinh_id: Number(id),
      },
    });
  },

  findSaved: async function (req) {
    const { id } = req.params;
    const images = await prisma.luu_anh.findMany({
      where: {
        nguoi_dung_id: Number(id),
      },
      include: {
        hinh_anh: true,
      },
      orderBy: {
        ngay_luu: "desc",
      },
    });
    return images;
  },

  findCreated: async function (req) {
    const { id } = req.params;
    const images = await prisma.hinh_anh.findMany({
      where: {
        nguoi_dung_id: Number(id),
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return images;
  },
};
