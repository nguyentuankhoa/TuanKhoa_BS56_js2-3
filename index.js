// bài 1 : tính tiền lương nhân viên 
// input:luong1 ngay = 100.000
// bước xử lí :tính tiền lương =lương 1 ngày * số ngày làm
// output: tính và xuất ra số tiền lương nhân viên
function tinhLuong() {
    var soNgayLam = document.getElementById("ngayLam").value *1;
    var luong1Ngay = 1e5;
    var tinhTienLuong = soNgayLam * luong1Ngay;
    document.getElementById("ketQua1").innerHTML = tinhTienLuong + " VNĐ"
}


// bài 2 :tính gia trị trung bình 
// input: lấy 5 sô thực người dùng
// bước xử lí : tính giá trị trung bình = (5 sô + lại) / 5
//output : tính và xuất ra giá trị trung bình của 5 số đó
function giaTriTrungBinh() {
    var soThuNhat = document.getElementById("so1").value *1;
    var soThuHai = document.getElementById("so2").value *1;
    var soThuBa = document.getElementById("so3").value *1;
    var soThuTu = document.getElementById("so4").value *1;
    var soThuNam = document.getElementById("so5").value *1;
    var tinhTongGiaTriTrungBinh = (soThuNhat + soThuHai +  soThuBa + soThuTu + soThuNam ) / 5
    document.getElementById("ketQua2").innerHTML = tinhTongGiaTriTrungBinh + " VNĐ"
}


// bài 3: quy đổi USD ra tiền VNĐ
// input: giá đô la hiện tại 23.000 vnd, cho người dùng nhập vào số đô la
// các bước xử lí: quy đổi 23.000 vnd * so do la
// output: quy đổi và xuất ra giá trị
function quyDoiTien() {
    var tienDo = document.getElementById("nhapSoTien").value*1;
    var quyDoi = tienDo * 23500;
    document.getElementById("ketQua3").innerHTML = quyDoi + " VNĐ"
}

// bài 4: tính chu vi và diện tích
// input: viết vào chiều dài và rộng
// bước xử lí: diện tích = chiều dài * chiều rộng, chu vi = (chiều dài + chiều rộng) * 2
// output: tính và xuất ra chu vi và diện tích
function tinhHinhChuNhat() {
    var tinhChieuDai = document.getElementById("chieuDai").value*1;
    var tinhChieuRong = document.getElementById("chieuRong").value *1;

    var chuVi = ( tinhChieuDai + tinhChieuRong) * 2;
    var dienTich = tinhChieuDai * tinhChieuRong;

    document.getElementById("ketQua4").innerHTML = "chu vi : "+ chuVi + " diện tích : " + dienTich;
}

// bài 5: tính tổng 2 ký số
// input : nhập vào hai ký 
// bước xử lí: lấy số hàng chục / 10, lấy số hàng đơn vị %10
//output:  tính tổng 2 ký số vừa nhập 
function tongKySo() {
    var haiKySo = document.getElementById("nhapKySo").value *1;
    var soHangChuc = Math.floor(haiKySo / 10);
    var soHangDonVi = Math.floor(haiKySo % 10);
    var tongHaiKySo = soHangChuc + soHangDonVi;
    document.getElementById("ketQua5").innerHTML = tongHaiKySo;
}