window.ListVe=function($scope,$http){
    $scope.title="Hải Phạm Mtam"
    const API='http://localhost:3000/KhachHang'
    $scope.getList=function(){
        $http.get(API).then(function(respone){
           console.log(respone.data)
           if(respone.status==200){
            $scope.listKH=respone.data
           }
        })
    }
    $scope.getList();
    $scope.delete=function(IDXoa){
        let XacNhan=window.confirm("Bạn có muốn xoá nhan vien nay")
       if(XacNhan){
        $http.delete(`${API}/${IDXoa}`).then(function(respone){
            console.log(respone.data)
            if(respone.status==200){
                alert("Xoá thành công")
             $scope.getList();
            }
         })
       }
    }
}