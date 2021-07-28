# Araba Kiralama Projesi Frontend

Bu proje [Angular CLI](https://github.com/angular/angular-cli) versiyon 11.2.4 ile oluşturulmuştur.

## Giriş

Bu projede backendini Asp.net Core versiyon 3.1 ile geliştirdiğim araba kiralama simülasyonunun kullanıcı arayüzünü oluşturdum. Bu arayüzü oluştururken [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) ve Angular framework' unun çeşitli özelliklerinden yararlandım. Yararlandığım özellikler ve uygulama ağacı aşağıdaki gibidir:

1. Backende yapılan istekler [services](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/services) dizini altında,
2. İstekleri karşılayacak model sınıfları [models](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/models) dizini altında,
3. Her bileşene ait istekler o bileşenin `component.ts` dosyasında her bileşenin arayüzü ise o bileşenin `component.html` dosyasında bulunmaktadır. Bu bileşenler [components](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/components) dizini altında,
4. Bazı bileşenlere ait veri filtrelemelerinin ve dönüşümleri [pipes](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/pipes) dizini altında,
5. Bazı bileşenleri kullanıcı girişi olmadan görüntülenmesine izin vermeyen sınıflar [guards](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/guards) dizini altında,
6. Yapılan isteklerin başlık kısmına Bearer Token ilavesiyle yetkilendirme veren sınıfı [interceptors](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/interceptors) dizini altında bulunmaktadır.    


## Çalıştırma Adımları

1. Eğer backend farklı bir portta çalışıyorsa [README](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/README.md#proje-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma-ad%C4%B1mlar%C4%B1) belirtilen güncelleme yapılması gerekir.
2. `npm install` ile projenin bağımlılıkları indirilir.
3. `ng serve` ile sunucu çalıştırılır. `http://localhost:4200/` gidilir.(*opsiyonel*)
4. `ng serve --open` ile proje sistemin varsayılan tarayıcısı üzerinden çalıştırılır.(*opsiyonel*)


