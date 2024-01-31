window.Detail = function ($scope, $http, $routeParams) {
    const API = 'http://localhost:3000/KhachHang'
    let IDs = $routeParams.id
    console.log("ID là: " + IDs)
    $http.get(`${API}/${IDs}`).then(function (respone) {
        console.log("data: " + respone.data)
        if (respone.status == 200) {
            $scope.inputValue = {
                id:respone.data.id,
                HoTen: respone.data.HoTen,
                CCCDs: respone.data.CCCDs,
                email: respone.data.email,
                SDTs: respone.data.SDTs,
                DiemDen: respone.data.DiemDen,
                DiemDi: respone.data.DiemDi,
                NgayDi: new Date(respone.data.NgayDi),
                NgayVe: new Date(respone.data.NgayVe),
                HanhLy: respone.data.HanhLy,
                LoaiGhe: respone.data.LoaiGhe,
                ChangBay:respone.data.ChangBay

            }
        }
    })
}