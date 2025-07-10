import prisma from "../common/prisma/init.prisma";

export const uploadImageService = {
  create: async function (req) {
    // 1. lay thong tin user
    const userId = req.user && req.user.nguoi_dung_id;
    if (!userId) {
      throw new Error("User not found");
    }

    // 2. kiem tra file upload
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    // 3. lay cac field can thiet tu request
    const { ten_hinh, mo_ta } = req.body;

    // 4. xac dinh duong dan file luu tru
    const duong_dan = `uploads/${req.file.filename}`;

    // 5. luu vao db
    const hinh_anh = await prisma.hinh_anh.create({
      data: {
        ten_hinh: ten_hinh,
        duong_dan: duong_dan,
        mo_ta: mo_ta || "",
        nguoi_dung_id: Number(userId),
      },
    });
    return hinh_anh;
  },
};
