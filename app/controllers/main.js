var services = new Services();
function getEle(id) {
  return document.getElementById(id);
}

function getListClient() {
  services
    .fetchData()
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListClient();

function renderHTML(data) {
  var content = "";
  for (i = 0; i < data.length; i++) {
    var client = data[i];

    content += `
    <tr>
  <td>${i + 1}</td>
  <td>${client.taiKhoan}</td>
  <td>${client.matKhau}</td>
  <td>${client.hoTen}</td>
  <td>${client.email}</td>
  <td>${client.ngonNgu}</td>
  <td>${client.loaiND}</td>
  <td>
  <button class="btn btn-info"  data-toggle="modal"
data-target="#myModal" onclick="sua(${client.id})">Sửa</button>
    <button class="btn btn-danger" onclick="xoa(${client.id})">Xóa</button>
  
  </td>
</tr>

    `;
  }
  document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}
// xoa client
function xoa(id) {
  services
    .deleteClient(id)
    .then(function () {
      getListClient();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getEle("btnThemNguoiDung").addEventListener("click", function () {
  document.getElementsByClassName("modal-title")[0].innerHTML =
    "Thêm người dùng";

  var footer = `
    <button class="btn btn-success" onclick="addClient()">Thêm</button>
  `;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});

// them
function addClient() {
  var tk = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var mk = getEle("MatKhau").value;
  var email = getEle("Email");
  var hinhAnh = getEle("HinhAnh").value;
  var loaiNgonngu = getEle("loaiNgonNgu").value;

  var loaiClient = getEle("loaiNguoiDung").value;
  var moTa = getEle("MoTa").value;
  // tao doi tuong
  var client = new Client(
    "",
    tk,
    hoTen,
    mk,
    email,
    hinhAnh,
    loaiNgonngu,

    loaiClient,
    moTa
  );
  services
    .addClient(client)
    .then(function () {
      getListClient();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}
// sua
function sua(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa thông tin";
  var footer = `
    <button class="btn btn-warning" onclick="capNhat(${id})">Update</button>
  `;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  services
    .getClientbyID(id)
    .then(function (result) {
      console.log(result.data);
      var client = result.data;
      getEle("TaiKhoan").value = client.taiKhoan;
      getEle("HoTen").value = client.hoTen;
      getEle("MatKhau").value = client.matKhau;
      getEle("Email").value = client.email;
      getEle("HinhAnh").value = client.hinhAnh;
      getEle("loaiNguoiDung").value = client.loaiND;
      getEle("loaiNgonNgu").value = client.loaiNgonngu;
      getEle("MoTa").value = client.moTa;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// cap nhat
function capNhat(id) {
  var tk = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var mk = getEle("MatKhau").value;
  var email = getEle("Email");
  var hinhAnh = getEle("HinhAnh").value;
  var loaiClient = getEle("loaiNguoiDung").value;
  var loaiNgonngu = getEle("loaiNgonNgu").value;
  var moTa = getEle("MoTa").value;

  var client = new Client(
    id,
    tk,
    hoTen,
    mk,
    email,
    hinhAnh,
    loaiClient,
    loaiNgonngu,
    moTa
  );
  console.log(client);
  //   services
  //     .updateClient(client)
  //     .then(function (result) {
  //       getListClient(result);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   console.log(id);
}
