using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        public static string CarAdded = "Araba başarıyla eklendi.";
        public static string CarUpdated = "Araba başarıyla güncellendi.";
        public static string CarDeleted = "Araba başarıyla silindi.";
        public static string CarsListed = "Arabalar başarıyla listelendi.";

        public static string ErrorAddCar = "Araba eklenemedi.";
        public static string ErrorUpdateCar = "Araba güncellenemedi.";
        public static string ErrorDeleteCar = "Araba silinemedi.";
        public static string ErrorListCars = "Arabalar listelenemedi.";

        public static string BrandAdded = "Marka başarıyla eklendi.";
        public static string BrandUpdated = "Marka başarıyla güncellendi.";
        public static string BrandDeleted = "Marka başarıyla silindi.";
        public static string BrandsListed = "Markalar başarıyla listelendi.";

        public static string ColorAdded = "Renk başarıyla eklendi.";
        public static string ColorUpdated = "Renk başarıyla güncellendi.";
        public static string ColorDeleted = "Renk başarıyla silindi.";
        public static string ColorsListed = "Renkler başarıyla listelendi.";

        public static string UserAdded = "Kullanıcı başarıyla eklendi.";
        public static string UserUpdated = "Kullanıcı başarıyla güncellendi.";
        public static string UserDeleted = "Kullanıcı başarıyla silindi.";
        public static string UsersListed = "Kullanıcılar başarıyla listelendi.";

        public static string CustomerAdded = "Müşteri başarıyla eklendi.";
        public static string CustomerUpdated = "Müşteri başarıyla güncellendi.";
        public static string CustomerDeleted = "Müşteri başarıyla silindi.";
        public static string CustomersListed = "Müşteriler başarıyla listelendi.";

        public static string RentalAdded = "Kiralama başarıyla eklendi.";
        public static string RentalUpdated = "Kiralama başarıyla güncellendi.";
        public static string RentalDeleted = "Kiralama başarıyla silindi.";
        public static string RentalsListed = "Kiralamalar başarıyla listelendi.";

        public static string ErrorAddRental = "Kiralama eklenemedi.";
        public static string ErrorUpdateRental = "Kiralama güncellenemedi.";
        public static string ErrorDeleteRental = "Kiralama silinemedi.";
        public static string ErrorListRentals = "Kiralama listelenemedi.";

        public static string ErrorBrandExists = "Sistemde aynı marka var.";
        public static string ErrorColorExists = "Sistemde aynı renk var.";

        public static string CarImageAdded = "Araba fotoğrafı başarıyla eklendi.";
        public static string CarImageUpdated = "Araba fotoğrafı başarıyla güncellendi.";
        public static string CarImageDeleted = "Araba fotoğrafı başarıyla silindi.";
        public static string CarImagesListed = "Araba fotoğrafları başarıyla listelendi.";
        public static string ErrorAddCarImage = "Arabanın hali hazırda çok fazla fotoğrafı var.";
        public static string ErrorNoCarImage = "Arabanın herhangi bir fotoğrafı yok.";

        public static string ErrorNoSuchData = "Silinecek veri kalmadı.";

        public static string AuthorizationDenied = "Yetkilendirme kabul edilmedi.";

        public static string UserRegistered = "Kayıt başarılı.";
        public static string UserNotFound = "Kullanıcı bulunamadı.";
        public static string PasswordError = "Parola hatası";
        public static string SuccessfulLogin = "Giriş başarılı.";
        public static string UserAlreadyExists = "Kullanıcı zaten var.";
        public static string AccessTokenCreated = "Erişim tokeni oluşturuldu.";
    }
}