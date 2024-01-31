window.Addcustomers=function($scope,$http,$location){
    $scope.mtam="Mtam123"
    const API="http://localhost:3000/KhachHang"
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
    $scope.Add=function(){
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
        // let regex4 =/^\d+$/;
        // if(!regex4.test($scope.inputValue.HoTen)){
        //     flag=false
        //     $scope.KiemTra.HoTen=true
        // }

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
        if(!$scope.inputValue || !$scope.inputValue.HanhLy || $scope.inputValue.HanhLy >30){
            flag=false
            $scope.KiemTra.HanhLy=true
        }
        if(!$scope.inputValue || !$scope.inputValue.LoaiGhe){
            flag=false
            $scope.KiemTra.LoaiGhe=true
        }
        if(!$scope.inputValue || !$scope.inputValue.ChangBay){
            flag=false
            $scope.KiemTra.ChangBay=true
        }
        if(!$scope.inputValue || !$scope.inputValue.ChangBay){
            flag=false
            $scope.KiemTra.ChangBay=true
        }
        if(new Date($scope.inputValue.NgayDi) > new Date($scope.inputValue.NgayVe)){
            flag=false
            $scope.KiemTra.NgayVe=true

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
   
        
        let newKH={
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
        $http.post(API,newKH).then(function(respone){
            alert("Đặt vé thành công")
            if(respone.status==201){
                $location.path('/ListVe')
            }
        })
       }
    }
}