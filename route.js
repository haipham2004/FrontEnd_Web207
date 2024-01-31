let app = angular.module('myApp', ['ngRoute'])
app.config(function ($routeProvider) {
    $routeProvider
        .when(
            '/TrangThongTin',
            {
                templateUrl: './view/TrangThongTin.html',
                controller: TrangThongTin
            }
        )
        .when(
            '/TrangLienHe',
            {
                templateUrl: './view/TrangLienHe.html',
                controller: TrangLienHe
            }
        )
        .when(
            '/TrangDatVe',
            {
                templateUrl: './view/TrangDatVe.html',
                controller: TrangDatVe
            }
        )
        .when(
            '/ListVe',
            {
                templateUrl: './view/ListVe.html',
                controller: ListVe
            }
        )
        .when(
            '/Detail/:id',
            {
                templateUrl: "./view/Detail.html",
                controller: Detail
            }
        )
        .when(
            '/Add',
            {
                templateUrl: "./view/TrangDatVe.html",
                controller: Addcustomers
            }
        )
        .when(
            '/Edit/:id',
            {
                templateUrl: "./view/Editcustomers.html",
                controller: Editcustomers
            }
        )
        .otherwise(
            {
                redirectTo: '/TrangThongTin'
            }
        )
})