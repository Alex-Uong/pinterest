CREATE TABLE nguoi_dung (
  nguoi_dung_id INT AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(255) NOT NULL UNIQUE,
  mat_khau      VARCHAR(255) NOT NULL,
  ho_ten        VARCHAR(255) NOT NULL,
  tuoi          INT,
  anh_dai_dien  VARCHAR(255),
  created_at    DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE hinh_anh (
  hinh_id       INT AUTO_INCREMENT PRIMARY KEY,
  ten_hinh      VARCHAR(255) NOT NULL,
  duong_dan     VARCHAR(255) NOT NULL,
  mo_ta         TEXT,
  nguoi_dung_id INT NOT NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  -- FK về người dùng
  CONSTRAINT fk_hinh_nguoi_dung
    FOREIGN KEY (nguoi_dung_id)
    REFERENCES nguoi_dung(nguoi_dung_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE binh_luan (
  binh_luan_id   INT AUTO_INCREMENT PRIMARY KEY,
  nguoi_dung_id  INT NOT NULL,
  hinh_id        INT NOT NULL,
  ngay_binh_luan DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  noi_dung       TEXT    NOT NULL,
  -- FK về người dùng
  CONSTRAINT fk_binhluan_nguoidung
    FOREIGN KEY (nguoi_dung_id)
    REFERENCES nguoi_dung(nguoi_dung_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  -- FK về hình ảnh
  CONSTRAINT fk_binhluan_hinhanh
    FOREIGN KEY (hinh_id)
    REFERENCES hinh_anh(hinh_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE luu_anh (
  nguoi_dung_id INT NOT NULL,
  hinh_id       INT NOT NULL,
  ngay_luu      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (nguoi_dung_id, hinh_id),
  -- FK về người dùng 
  CONSTRAINT fk_luu_nguoidung
    FOREIGN KEY (nguoi_dung_id)
    REFERENCES nguoi_dung(nguoi_dung_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  -- FK về hình ảnh
  CONSTRAINT fk_luu_hinhanh
    FOREIGN KEY (hinh_id)
    REFERENCES hinh_anh(hinh_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB;

INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien)
VALUES
  ('alice@example.com', '$2b$10$abcdefghijk', 'Alice Nguyễn', 28, '/avatars/alice.jpg'),
  ('bob@example.com',   '$2b$10$lmnopqrstuv', 'Bob Trần',    35, '/avatars/bob.png'),
  ('carol@example.com', '$2b$10$wxyzabcdexy', 'Carol Lê',    22, NULL);

INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id)
VALUES
  ('sunset.jpg', '/uploads/sunset.jpg', 'Hoàng hôn biển Phú Quốc',      1),
  ('coffee.jpg', '/uploads/coffee.jpg','Tách cà phê buổi sáng',         2),
  ('guitar.png', '/uploads/guitar.png','Guitar mini trong rừng thông',   1),
  ('flower.jpeg','/uploads/flower.jpeg','Đóa hoa hồng nở trong vườn',   3);

INSERT INTO binh_luan (nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung)
VALUES
  (2, 1, '2025-06-10 08:15:00', 'Màu sắc đẹp quá, chụp ở đâu vậy?'),
  (3, 1, '2025-06-10 09:05:30', 'Mình cũng thích cảnh biển này!'),
  (1, 2, '2025-06-11 07:45:20', 'Cà phê nhìn ngon quá!'),
  (2, 3, '2025-06-12 18:30:00', 'Không biết tiếng hát có theo không 😉'),
  (3, 4, '2025-06-13 14:00:00', 'Hoa đẹp mà tớ chưa có dịp trồng.');

INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu)
VALUES
  (1, 2, '2025-06-11 08:00:00'),
  (1, 4, '2025-06-13 15:00:00'),
  (2, 1, '2025-06-10 10:20:00'),
  (2, 3, '2025-06-12 19:00:00'),
  (3, 1, '2025-06-10 11:00:00'),
  (3, 2, '2025-06-11 08:30:00');