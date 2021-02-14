# YazilimGelistiriciKampi

<h2> Kamp Ödevleri </h2>

<h3>
<ul>
  <li> <a href="https://repl.it/@PoyrazAkta/ders1"> Ödev 1</a> </li>
  <li> <a href="https://repl.it/@PoyrazAkta/ders2"> Ödev 2</a> </li>
  <li> <a href="https://repl.it/@PoyrazAkta/ders3"> Ödev 3</a> </li>
  <li> <a href="https://repl.it/@PoyrazAkta/ders4"> Ödev 4</a> </li>
  <li> <a href="#kamp-ödev-5"> Ödev 5</a> </li>
  <li> Ödev 6 SQL ile ilgiliydi. </li>
  <li> <a href="#araba-kiralama-projesi"> Ödev 7, 8, 9, 10, 11</a> </li>
</ul>
</h3>

# [Kamp Ödev 5](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5)

Bir oyun yazmak istiyorsunuz. Bu yazılım için backend kodlarını C# ile geliştirmeyi planlıyoruz. Yeni üye, satış ve kampanya yönetimi yapılması isteniyor.
Nesnelere ait özellikleri istediğiniz gibi verebilirsiniz.

## Gereksinimler

1. Oyuncuların sisteme kayıt olabileceği, bilgilerini güncelleyebileceği, kayıtlarını silebileceği bir ortamı simule ediniz. Müşteri bilgilerinin doğruluğunu e-devlet sistemlerini kullanarak doğrulama yapmak istiyoruz. (E-devlet sistemlerinde doğrulama TcNo, Ad, Soyad, DoğumYılı bilgileriyle yapılır. Bunu yapacak servisi simule etmeniz yeterlidir.)

2. Oyun satışı yapılabilecek satış ortamını simule ediniz.( Yapılan satışlar oyuncu ile ilişkilendirilmelidir. Oyuncunun parametre olarak metotta olmasını kastediyorum.)

3. Sisteme yeni kampanya girişi, kampanyanın silinmesi ve güncellenmesi imkanlarını simule ediniz.

4. Satışlarda kampanya entegrasyonunu simule ediniz.

<h3>Yazdığım kodda üç katman bulunuyor:</h3> 
<h4>
  <ol>
    <li> <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5/Odev5/Entities">Entities </a> </li>
    <li> <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5/Odev5/DataAccess">Data Access </a> </li>
    <li> <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5/Odev5/Business">Business </a> </li>
  </ol>
</h4>
  
Her katmanda ise soyut işlemleri tanımlamak için *Abstract*, somut işlemleri tanımlamak için *Concrete* klasörü bulunmakta.

### [Entities](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5/Odev5/Entities)

Bu katmanın soyut kısmında tüm varlıkların referansını tutabilecek bir IEntity interface' i; somut kısmında ise oluşturulacak oyunlar için Game, Kişiler için Person, Oyuncular için Player class'ları bulunmakta.

### [Data Access](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5/Odev5/DataAccess)

Bu katmanın soyut kısmında tüm verileri loglamaya yarayacak, tüm loggerların referansını tutabilecek ILoggerService interface' i; somut kısmında ise Database ve File dizini bulunmakta.
Database dizininde verileri Database'e loglamanın simülasyonu yapılan DatabaseLoggerService, File dizininde verileri dosyaya loglamanın simülasyonu yapılan FileLoggerService bulunmaktadır.

### [Business](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5/Odev5/Business)

Bu katman _Abstract_ soyut kısım, _Concrete_ somut kısım ve _ValidationRules_ olmak üzere üç dizinden oluşmakta.

Soyut kısımdaki _IEntitiyService_ interface' i, somut kısımda bulunan _GameManager.cs_ ve _PlayerManager.cs_' in referanslarını tutmak ve eş görevleri paylaştırmak üzere üretilmiştir.

_PlayerManager.cs_' de bulunan ekleme metodunda _mernis validasyon_ simülasyonu yapılmıştır.

İsterlerde bulunan kampanya indirimlerine _Sales_ dizininde yer verilmiştir.

Ayrıca _Concrete_ dizininde bulunan _Platforms_ dizininde, çeşitli oyun dağıtım platformlarına yer verilmiştir.

# [Araba Kiralama Projesi](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/CarRentalProject)

## Araba Kiralama Projesi ile ilgili Notlar

<h4>
  <ul>
    <li> <del>ConsoleUI' ı startup project olarak seçtiğinizden emin olunuz.</del> </li>
    <li>11. Hafta Güncellemesi: WebAPI' yi startup project olarak seçtiğinizden emin olunuz.</li>
    <li>7. Haftadaki DataAccess katmanında bulunan Abstract kısım Generic Repository Design Pattern ile güncellendi.</li>
    <li>7. Haftadaki DataAccess katmanında bulunan InMemoryCarDal güncellendi. (LINQ kodları eklenmiştir.)</li>
    <li>8. Hafta ödevine ilişkin EntityFramework kodları yazıldı.</li>
    <li>Sql Server' da oluşturulan veritabanı <del><a href="https://hizliresim.com/hL9kKp">bu</a></del> şekildedir.</li>
    <li>9. Hafta ödevine ilişkin Core Katmanı kodları yazıldı.</li>
    <li>10. Hafta ödevinin ilk aşamasına ilişkin Core Katmanı kodlarına Utils dizini eklendi ve kod refaktör edildi.</li>
    <li>10. Hafta ödevinin ikinci aşamasına ilişkin veritabanı düzenlendi(foreign keyler vs. eklendi).</li>
    <li>11. Hafta ödevine ilişkin WebAPI katmanı kuruldu.</li>
    <li> Postman de yapılan bazı istekler
      <ul>
        <li>GET: https://localhost:44324/api/rentals/details </li>
        <li>GET: https://localhost:44324/api/users/all </li>
        <li>GET: https://localhost:44324/api/cars/brand?id=3</li>
        <li>GET: https://localhost:44324/api/cars/color?id=7</li>
        <li>POST: https://localhost:44324/api/rentals<br> 
        BODY(raw -JSON): 
        <pre> 
        {
            "carId": 4,
            "customerId": 1,
            "rentDate": "2021-02-14T00:00:00",
            "returnDate": "2021-02-19T00:00:00"
        }
        </pre>
        </li>
      </ul>
    </li>
    <li>Console' da isterlerdeki bütün testler simüle edilmiştir. Dilerseniz <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/ConsoleUI/Program.cs">Program.cs</a> üzerinden, yorum satırlarını açarak diğer operasyonları da deneyebilirsiniz.</li>
    <li>ConsoleUI' da yapılacan Add, Update, Delete işlemlerini ilgili fonksiyonlardan güncelleyebilirsiniz. </li>
  </ul>
</h4>

## Ödev 7

Araba kiralama sistemi yazıyoruz.

Entities, DataAccess, Business ve Console katmanlarını oluşturunuz.✓

Bir araba nesnesi oluşturunuz. "Car". Özellik olarak : Id, BrandId, ColorId, ModelYear, DailyPrice, Description alanlarını ekleyiniz. (Brand = Marka)✓

InMemory formatta GetById, GetAll, Add, Update, Delete oprasyonlarını yazınız. Consolda test ediniz.✓

## Ödev 8

Araba Kiralama projemiz üzerinde çalışmaya devam edeceğiz.

Car nesnesine ek olarak;

1. Brand ve Color nesneleri ekleyiniz(Entity)✓

Brand-->Id,Name

Color-->Id,Name

2. Sql Server tarafında yeni bir veritabanı kurunuz. Cars,Brands,Colors tablolarını oluşturunuz.✓

3. Sisteme Generic IEntityRepository altyapısı yazınız.✓

4. Car, Brand ve Color nesneleri için Entity Framework altyapısını yazınız.✓

5. GetCarsByBrandId , GetCarsByColorId servislerini yazınız.✓

6. Sisteme yeni araba eklendiğinde aşağıdaki kuralları çalıştırınız.✓

Araba ismi minimum 2 karakter olmalıdır✓

Araba günlük fiyatı 0'dan büyük olmalıdır.✓

## Ödev 9

1. CarRental Projenizde Core katmanı oluşturunuz.✓

2. IEntity, IDto, IEntityRepository, EfEntityRepositoryBase dosyalarınızı 9. gün dersindeki gibi oluşturup ekleyiniz.✓

3. Car, Brand, Color sınıflarınız için tüm CRUD operasyonlarını hazır hale getiriniz.✓

4. Console'da Tüm CRUD operasyonlarınızı Car, Brand, Model nesneleriniz için test ediniz. GetAll, GetById, Insert, Update, Delete.✓

5. Arabaları şu bilgiler olacak şekilde listeleyiniz. CarName, BrandName, ColorName, DailyPrice. (İpucu : IDto oluşturup 3 tabloya join yazınız)✓

## Ödev 10

### Aşama 1

1. Core katmanında Results yapılandırması yapınız.✓

2. Daha önce geliştirdiğiniz tüm Business sınıflarını bu yapıya göre refactor (kodu iyileştirme) ediniz.✓

### Aşama 2

1. Kullanıcılar tablosu oluşturunuz. Users-->Id,FirstName,LastName,Email,Password✓

2. Müşteriler tablosu oluşturunuz. Customers-->UserId,CompanyName✓

3. Kullanıcılar ve müşteriler ilişkilidir.✓

4)Arabanın kiralanma bilgisini tutan tablo oluşturunuz. Rentals-->Id, CarId, CustomerId, RentDate(Kiralama Tarihi), ReturnDate(Teslim Tarihi). ✓

5. Araba teslim edilmemişse ReturnDate null'dır.✓

6. Projenizde bu entity'leri oluşturunuz.✓

7. CRUD operasyonlarını yazınız.✓

8. Yeni müşteriler ekleyiniz.✓

9. Arabayı kiralama imkanını kodlayınız. Rental-->Add✓

10. Arabanın kiralanabilmesi için arabanın teslim edilmesi gerekmektedir.✓

## Ödev 11

1. WebAPI katmanını kurunuz.✓

2. Business katmanındaki tüm servislerin Api karşılığını yazınız.✓

3. Postman'de test ediniz.✓


