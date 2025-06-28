import { UnauthorizedException } from "../helpers/exception.helper";
import tokenService from "../../services/tokenService";
import prisma from "../prisma/init.prisma";

const protect = async (req, res, next) => {
  req.isProtect = true;
  const authHeader = req.headers.authorization || "";
  const [type, token] = authHeader.split(" ");

  console.log({
    token,
    type,
  });

  if (!token) {
    throw new UnauthorizedException("không có token");
  }

  if (type !== "Bearer") {
    throw new UnauthorizedException("kiểu token không hop le");
  }
  // kiểm tra token, nếu chạy qua là token hợp lệ và trả về payload, nếu sai tự động throw lỗi do jwt đã có sẵn.
  const decode = tokenService.verifyAccessToken(token);

  // sau khi verify access token thì sẽ hứng được id vào biến decode, đem biến đó đi querry trong db bằng prisma
  const user = await prisma.nguoi_dung.findUnique({
    where: {
      nguoi_dung_id: decode.userId,
    },
  });

  // kẹp vào req.user để gửi dữ liệu qua bên getinfo controller - tạo thêm 1 key "user" trên req vì req có giá trị không đổi xuyên suốt trong tất cả middle ware
  req.user = user;

  console.log({
    token,
    type,
    decode,
    user,
  });

  next();
};

export default protect;
