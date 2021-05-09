# Araba Kiralama Projesi

Bu proje kapsamında bir Araba Kiralama sisteminin backendini ASP.Net Core, frontendini ise Angular kullanarak simüle ettim. Amacım bu simülasyonu gerçeklerken SOLID kod yazma prensiplerine uymak ve n-Layered Architecture kullanarak proje ölçeklenebilirliğini arttırmaktı. Motivasyonum ise [kodlama.io](https://www.kodlama.io/)'da katıldığım C# + Angular Kampının ödevlerini tamamlamaktı.

Yazdığım proje Engin Demiroğ ve veya ekibi tarafından gözden geçirilmiş olup [onaylanmıştır](https://www.kodlama.io/p/gururtablosu).

Backend ve Frontend' in ilgili **README** dosyası proje dizinlerinde bulunmaktadır.

## Proje Çalıştırma Adımları

1. İlk önce [backend solution](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/CarRentalProject/CarRental.sln)' u açılır.
2. IIS Express olarak çalıştırılır. 
   - IIS Express çalışırken farklı bilgisayarlarda farklı portlar seçebilmektedir. Dolayısıyla eğer port numarası `localhost:44324` farklı çıkıyorsa Angular' da bu değişiklik [app-settings.ts](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/car-rental-frontend/src/app/app-settings.ts) üzerinden yapılır.
3. [Frontend dizini](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend)'ne gidilir ve uygulama çalıştırılır:
   ```
   cd car-rental-frontend
   ng serve --open
   ```

## [Backend](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/CarRentalProject)
## [Frontend](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend)


## Uygulamadan Görüntüler

![Uygulama içinden fotoğraflar](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/Ekler/running_project.gif?raw=true)

## Proje Gereksinimleri

- .Net Core v3.1+
- SQL Server 13.0+
- Node.js v14.16.0+
- Angular v11.2.4+
