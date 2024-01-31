window.Editcustomers=function($scope,$http,$routeParams,$location){
    const API='http://localhost:3000/KhachHang'
    let IDs=$routeParams.id
    console.log(IDs)
    $http.get(`${API}/${IDs}`).then(function(respone){
        console.log("Data: "+respone.data)
        if(respone.status==200){
            $scope.inputValue={
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
    $scope.TongTien=function(){
        if($scope.inputValue.LoaiGhe=='ThuongGia' && $scope.inputValue.ChangBay=='Một chiều'){
            $scope.inputValue.Gia=9000000
        }
        if($scope.inputValue.LoaiGhe=='ThuongGia' && $scope.inputValue.ChangBay=='Hai chiều'){
            $scope.inputValue.Gia=9000000*2
        }
        if($scope.inputValue.LoaiGhe=='HangNhat' && $scope.inputValue.ChangBay=='Một chiều'){
            $scope.inputValue.Gia=8000000
        }
        if($scope.inputValue.LoaiGhe=='HangNhat' && $scope.inputValue.ChangBay=='Hai chiều'){
            $scope.inputValue.Gia=8000000*2
        }
        if($scope.inputValue.LoaiGhe=='PhoThong'  && $scope.inputValue.ChangBay=='Một chiều'){
            $scope.inputValue.Gia=7000000
        }
        if($scope.inputValue.LoaiGhe=='PhoThong'  && $scope.inputValue.ChangBay=='Hai chiều'){
            $scope.inputValue.Gia=7000000*2
        }

    }
    $scope.Edit=function(){
        let flag=true
        $scope.KiemTra={
            HoTen:false,
            CCCDs:false,
            SDTs:false,
            email:false,
            DiemDen:false,
            DiemDi:false,
            NgayDi:false,
            NgayDi:false,
            NgayVe:false,
            HanhLy:false,
            LoaiGhe:false,
            ChangBay:false
        }
        let regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        if(!regex.test($scope.inputValue.email)){
            flag=false
            $scope.KiemTra.email=true
        }
        let regex2 =/((09|03|07|08|05)+([0-9]{8})\b)/g
        if(!regex2.test($scope.inputValue.SDTs)){
            flag=false
            $scope.KiemTra.SDTs=true
        }
        let regex3 =/^\d+$/;
        if(!regex3.test($scope.inputValue.CCCDs)){
            flag=false
            $scope.KiemTra.CCCDs=true
        }

        if(!$scope.inputValue || !$scope.inputValue.HoTen){
            flag=false
            $scope.KiemTra.HoTen=true
        }
        if(!$scope.inputValue || !$scope.inputValue.CCCDs){
            flag=false
            $scope.KiemTra.CCCDs=true
        }
        if(!$scope.inputValue || !$scope.inputValue.SDTs){
            flag=false
            $scope.KiemTra.SDTs=true
        }
        if(!$scope.inputValue || !$scope.inputValue.email){
            flag=false
            $scope.KiemTra.email=true
        }
        if(!$scope.inputValue || !$scope.inputValue.DiemDen){
            flag=false
            $scope.KiemTra.DiemDen=true
        }
        if(!$scope.inputValue || !$scope.inputValue.DiemDi){
            flag=false
            $scope.KiemTra.DiemDi=true
        }
        if(!$scope.inputValue || !$scope.inputValue.NgayVe){
            flag=false
            $scope.KiemTra.NgayVe=true
        }
        if(!$scope.inputValue || !$scope.inputValue.NgayDi){
            flag=false
            $scope.KiemTra.NgayDi=true
        }
        if(!$scope.inputValue || !$scope.inputValue.HanhLy){
            flag=false
            $scope.KiemTra.HanhLy=true
        }
        if(new Date($scope.inputValue.NgayDi) > new Date($scope.inputValue.NgayVe)){
            flag=false
            $scope.KiemTra.NgayVe=true
        }
        if(!$scope.inputValue || !$scope.inputValue.LoaiGhe){
            flag=false
            $scope.KiemTra.LoaiGhe=true
        }
        if(!$scope.inputValue || !$scope.inputValue.ChangBay){
            flag=false
            $scope.KiemTra.ChangBay=true
        }
        let getDates=new Date()
        if(new Date($scope.inputValue.NgayDi)<getDates){
            flag=false
            $scope.KiemTra.NgayDi=true
        }
        if(new Date($scope.inputValue.NgayVe)<getDates){
            flag=false
            $scope.KiemTra.NgayVe=true
        }
      
        let newUpdate={
            HoTen: $scope.inputValue.HoTen,
            CCCDs:$scope.inputValue.CCCDs,
            SDTs:$scope.inputValue.SDTs,
            email:$scope.inputValue.email,
            DiemDen:$scope.inputValue.DiemDen,
            DiemDi:$scope.inputValue.DiemDi,
            NgayDi:$scope.inputValue.NgayDi,
            NgayVe:$scope.inputValue.NgayVe,
            HanhLy:$scope.inputValue.HanhLy,
            LoaiGhe:$scope.inputValue.LoaiGhe,
            ChangBay:$scope.inputValue.ChangBay,
            Gia:$scope.inputValue.Gia
        }
        if(flag){
            $http.put(`${API}/${IDs}`,newUpdate).then(function(respone){
                alert("Chỉnh sửa thông tin vé thành công")
                if(respone.status==200){
                    $location.path('/ListVe')
                }
            })
        }
    }
   
}