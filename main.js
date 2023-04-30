// BAi TAP 1
/** Mô hình 3 khối
 * tính điểm chuẩn
    * Đầu vào
        - tạo biến diem chuan, khu vuc , doi tuong , diem thi mon 1 , 2 ,3 , thi sinh
    * Xử Lí
        - nếu điểm môn thi thứ 1,2,3 = 0 thi rơt
        - nếu điểm thi >= điểm chuẩn thi đậu
        - nếu điểm thi <= điểm chuẩn thì rớt
    * Đầu ra
        - Tổng Điểm thi
*/

// Dom toi cac the input de lay value

document.getElementById("btntinhdiem").onclick = function () {
   var khuvuc = document.getElementById("khuvuc").value * 1;
   var doituong = document.getElementById("doituong").value * 1;
   var diemmon1 = document.getElementById("diemmon1").value * 1;
   var diemmon2 = document.getElementById("diemmon2").value * 1;
   var diemmon3 = document.getElementById("diemmon3").value * 1;
   var diemchuan = document.getElementById("diemchuan").value * 1;

   var diemthi = diemmon1 + diemmon2 + diemmon3 + khuvuc + doituong;
   var thisinh = "";

   // Xử Lí

   if ((diemmon1 && diemmon2 && diemmon3) <= 0) {
      thisinh = " Bạn đã rớt . Do có điểm nhỏ hơn hoặc bằng 0 ";
   } else if (diemthi >= diemchuan) {
      thisinh = "Bạn đã đậu. Tổng điểm: " + diemthi
   } else if (diemthi <= diemchuan) {
      thisinh = "Bạn đã rớt. Tổng điểm: " + diemthi
   } else {
   }

   // Show ket qua
   var result = thisinh;
   document.getElementById("Sodiem").innerHTML = result;
}

//BÀI TẠP 2
/**
 * Đầu vào
    - Tạo biến giá tiền KWDAU_50 = 500 ,KWKE_50 = 650 ,KWKE_100 = 850 ,KWKE_150 = 1100 ,CONLAI = 1300
    - Tạo hàm dome lấy value
 * Xử lí
    - nếu so km <= 0 && so km <= 1 ( tongtien = sokw * KWDAU_50 )
    - nếu so km <= 1 && so km <= 50 ( tongtien = sokw * KWDAU_50 )
    - nếu so km <= 50 && so km <= 100 ( tongtien = sokw * KWKE_50 )
    - nếu so km <= 100 && so km <= 150 ( tongtien = sokw * KWKE_100 )
    - nếu so km <= 150 && so km <= 350 ( tongtien = sokw * KWKE_150 )
    - nếu so km 350 >= sokw ( tongtien = sokw * CONLAI )

 * Đầu ra
    - Format VND
    - Tiền điệ phải trả
 */

// Đầu vào

const KWDAU_50 = 500;
const KWKE_50 = 650;
const KWKE_100 = 850;
const KWKE_150 = 1100;
const CONLAI = 1300;

function getEle(id) {
   return document.getElementById(id)
}

function btntiendien() {
   // lấy thông tin user
   var hoten = getEle("hoten").value;
   var sokw = getEle("sokw").value * 1;
   var tongtien = "";

   // tính tien dien
   if (0 <= sokw && sokw <= 1) {
      tongtien = sokw * KWDAU_50
   } else if (1 < sokw && sokw <= 50) {
      tongtien = sokw * KWDAU_50
   } else if (50 < sokw && sokw <= 100) {
      tongtien = sokw * KWKE_50
   } else if (100 < sokw && sokw <= 150) {
      tongtien = sokw * KWKE_100
   } else if (150 <= sokw && sokw <= 350) {
      tongtien = sokw * KWKE_150
   } else if (350 >= sokw) {
      tongtien = sokw * CONLAI
   } else {
   }


   //Format VND
   var currentFormat = new Intl.NumberFormat("vn-VN");
   // show ket qua 

   var result = "";
   result += "Họ Tên : " + hoten;
   result += "; Tiền Điện :" + currentFormat.format(tongtien);
   getEle("tiendien").innerHTML = result;

}


// BÀI TẬP 3
/**
 * Đầu vào
    * tạo biến
 * Xử lí
    *  tính tiền thuế
   
 * Đầu ra
    * show kết quả
 */

// Đầu Vào

const THUE_60 = 5 / 100;
const THUE_60_120 = 10 / 100;
const THUE_120_210 = 15 / 100;
const THUE_210_384 = 20 / 100;
const THUE_384_624 = 25 / 100;
const THUE_624_960 = 30 / 100;
const THUE_960 = 35 / 100;
const PHUTHUOC = 1600000;
const TIENTROCAP = 4000000

// Xử lí

function btntienthue() {
   var thunhap = getEle("thunhap").value * 1;
   var phuthuoc = getEle("phuthuoc").value * 1;
   var hovaten = getEle("hovaten").value;

   var tienphuthuoc = phuthuoc * PHUTHUOC
   var tienhuachiuthue = thunhap - TIENTROCAP - tienphuthuoc
   var thunhapchiuthue = "";

   // tính tiền thuế

   if (0 <= thunhap && thunhap <= 60000000) {
      thunhapchiuthue = tienhuachiuthue * THUE_60
   } else if (60000000 <= thunhap && thunhap <= 120000000) {
      thunhapchiuthue = tienhuachiuthue * THUE_60_120
   } else if (120000000 <= thunhap && thunhap <= 210000000) {
      thunhapchiuthue = tienhuachiuthue * THUE_120_210
   } else if (210000000 <= thunhap && thunhap <= 384000000) {
      thunhapchiuthue = tienhuachiuthue * THUE_210_384
   } else if (384000000 <= thunhap && thunhap <= 624000000) {
      thunhapchiuthue = tienhuachiuthue * THUE_384_624
   } else if (624000000 <= thunhap && thunhap <= 960000000) {
      thunhapchiuthue = tienhuachiuthue * THUE_624_960
   } else if (960000000 >= thunhap) {
      thunhapchiuthue = tienhuachiuthue * THUE_960
   } else {
      alert("Số tiền thu nhập không hợp lệ!");
   }
   //Format VND
   var currentFormat = new Intl.NumberFormat("vn-VN");
   // show kết quả 
   var result = "";
   result += "Họ Tên : " + hovaten;
   result += "; Tiền thuế thu nhập cá nhân :" + currentFormat.format(thunhapchiuthue);
   getEle("tienthue").innerHTML = result;
}


// BÀI TẬP 4
/**
 * Đầu vào
    * tạo biến
 * Xử lí
    *  tính tiền cáp
   
 * Đầu ra
    * show kết quả
 */

// Đầu Vào

const PHIXYLUHOADON_ND = 4.5;
const PHIDICHVUCONBAN_ND = 20.5;
const PHITHUEKENHCAOCAP_ND = 7.5;

const PHIXYLUHOADON_DN = 15;
const PHIDICHVUCONBAN_DN = 75;
const PHIDICHVUTHEM_DN = 5;
const PHITHUEKENHCAOCAP_DN = 50;

const NHADAN = "Nhà Dân";
const DOANHNGHIEP = "Doanh Nghiệp";


function btnTinhTienCap() {
   // Dom toi cac the input de lay value
   var selLoaiKhachHang = document.getElementById("loaikhachhang");
   var loaiKhachHang = selLoaiKhachHang.options[selLoaiKhachHang.selectedIndex].text;
   var maKhachHang = document.getElementById("makhachhang").value;
   var soKenhCaoCap = document.getElementById("sokenh").value;
   var soKetNoi = document.getElementById("soketnoi").value;

   var tongTien = 0;
   var phiDichVuCoBanDN = 0;

   if (loaiKhachHang == NHADAN) {
      // Kiem tra gia tri cua soKenhCaoCap
      tongTien = PHIXYLUHOADON_ND + PHIDICHVUCONBAN_ND + (PHITHUEKENHCAOCAP_ND * soKenhCaoCap);
   } else if (loaiKhachHang == DOANHNGHIEP) {
      if (soKetNoi <= 10) {
         phiDichVuCoBanDN = PHIDICHVUCONBAN_DN;
      } else if (soKetNoi > 10) {
         phiDichVuCoBanDN = PHIDICHVUCONBAN_DN + ((soKetNoi - 10) * PHIDICHVUTHEM_DN);
      }
      tongTien = PHIXYLUHOADON_DN + phiDichVuCoBanDN + (PHITHUEKENHCAOCAP_DN * soKenhCaoCap);
   }

   // show kết quả
   const displayResult = "Mã khách hàng: " + maKhachHang + "; Tiền Cáp: " + tongTien.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
   document.getElementById("tiencap").innerHTML = displayResult;
}
   // Ẩn hiện số kết nối khi khách hàng là nhà dân 

function sltLoaiKhachHangChange() {
   var selLoaiKhachHang = document.getElementById("loaikhachhang");
   var loaiKhachHang = selLoaiKhachHang.options[selLoaiKhachHang.selectedIndex].text;


   if (loaiKhachHang == NHADAN) {
      document.getElementById("soketnoi").style.display = "none";
      document.getElementById("lblSoKetNoi").style.display = "none";
   } else if (loaiKhachHang == DOANHNGHIEP) {
      document.getElementById("soketnoi").style.display = "block";
      document.getElementById("lblSoKetNoi").style.display = "block";
   }
}


