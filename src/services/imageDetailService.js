import prisma from "../common/prisma/init.prisma";

export const imageDetailService = {
  findAll: async function (req) {
    return `This action returns all imageDetail`;
  },

  findOne: async function (req) {
    const id = req.params.id;

    const image = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: Number(id),
      },
      include: {
        nguoi_dung: {
          select: {
            nguoi_dung_id: true,
            ho_ten: true,
            anh_dai_dien: true,
          },
        },
      },
    });
    return image;
  },

  findMany: async function (req) {
    const id = req.params.id;
    const comments = await prisma.binh_luan.findMany({
      where: {
        hinh_id: Number(id),
      },
      orderBy: {
        ngay_binh_luan: "desc",
      },
      include: {
        nguoi_dung: {
          select: {
            nguoi_dung_id: true,
            ho_ten: true,
            anh_dai_dien: true,
          },
        },
      },
    });
    return comments;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} imageDetail`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} imageDetail`;
  },

  isImageSavedByUser: async function (req) {
    const hinh_id = req.params.id;
    const nguoi_dung_id = req.user.nguoi_dung_id;
    const image = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: Number(hinh_id),
      },
    });
    if (image.nguoi_dung_id === Number(nguoi_dung_id)) {
      return true;
    }
    return false;
  },

  addCommentToImage: async function (req) {
    const hinh_id = req.params.id;
    const nguoi_dung_id = req.user.nguoi_dung_id;
    const { noi_dung } = req.body;
    const comment = await prisma.binh_luan.create({
      data: {
        hinh_id: Number(hinh_id),
        nguoi_dung_id: Number(nguoi_dung_id),
        noi_dung: noi_dung,
      },
      include: {
        nguoi_dung: {
          select: {
            nguoi_dung_id: true,
            ho_ten: true,
            anh_dai_dien: true,
          },
        },
      },
    });
    return comment;
  },
};
