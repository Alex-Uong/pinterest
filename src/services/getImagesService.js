import prisma from "../common/prisma/init.prisma";

const getImagesService = {
  create: async function (req) {
    return `This action create`;
  },

  findAll: async function (req) {
    // phân trang
    let { page, pageSize, filters } = req.query;
    page = Number(page) > 0 ? Number(page) : 1;
    pageSize = Number(pageSize) > 0 ? Number(pageSize) : 20;
    filters = JSON.parse(filters || "{}");

    if (filters.q) {
      filters.ten_hinh = filters.q;
      delete filters.q;
    }

    Object.entries(filters).forEach(([key, value], i, arr) => {
      if (value === "" || value === null || value === undefined) {
        delete filters[key];
        return;
      }
      if (typeof value === "string") {
        filters[key] = {
          contains: value,
        };
      }
    });

    // đếm tổng số hình:
    const totalItem = await prisma.hinh_anh.count({
      where: filters,
    });

    const skip = (page - 1) * pageSize;

    const images = await prisma.hinh_anh.findMany({
      where: filters,
      skip: skip,
      take: pageSize,
      orderBy: {
        created_at: "desc",
      },
    });
    const totalPage = Math.ceil(totalItem / pageSize);
    return {
      page: page,
      pageSize: pageSize,
      totalPage: totalPage,
      totalItem: totalItem,
      items: images,
    };
  },

  findOne: async function (req) {
    return `This action returns a id: ${req.params.id} getImages`;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} getImages`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} getImages`;
  },
};

export default getImagesService;
