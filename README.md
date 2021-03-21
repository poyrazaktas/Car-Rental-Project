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
  <li> <a href="#araba-kiralama-projesi"> Araba Kiralama Projesi</a> </li>
  <li> <a href="#araba-kiralama-projesi-backend"> Araba Kiralama Projesi Backend</a> </li>
  <li> <a href="#araba-kiralama-projesi-frontend"> Araba Kiralama Projesi Frontend</a> </li>
</ul>
</h3>

# Araba Kiralama Projesi
<h3>Güne ilişkin ödevin detaylarına <a href="#ödev-detayları">buradan</a> ulaşabilirsiniz.</h3>

## [Araba Kiralama Projesi Backend](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/CarRentalProject)

<h4>
  <ul>
    <li>Projede kullandığım veritabanını oluşturmak için adımlar:
    <ol>
      <li>Sol üstte bulunan View Menüsününden, SQL Server Object Explorer' i seçiniz. Ya da Türkçe Q Klavye kullanıyorsanız CTRL + ç, CTRL+ S ile açabilirsiniz.</li>
      <li>Açılan menüde SQL Server>(localdb)>Databases dizinini açınız.</li>
      <li>Databases' e sağ tıklayarak Add New Database' i seçiniz.</li>
      <li>Veritabanına istediğiniz ismi verebilirsiniz. Ben CarRental ismini tercih ediyorum.</li>
      <li>Oluşturduğunuz Database üzerine sağ tıklayıp New Query'i seçiniz. <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalQuery.txt">CarRental.txt</a> içindeki her şeyi kopyalayıp, yeni sorgu içerisine yapıştırınız.</li>
      <li>Sorguyu sol üsteki run tuşundan veya CTRL + SHIFT + E tuş takımı ile çalıştırınız.</li>
      <li>Sorgu çalıştıktan sonra açılan .sql dosyasını kapatabilirsiniz. Artık veritabanı kullanıma hazır.</li>
    </ol>
    </li>
    <li> <del>ConsoleUI' ı startup project olarak seçtiğinizden emin olunuz.</del> </li>
    <li>11. Gün Güncellemesi: WebAPI' yi startup project olarak seçtiğinizden emin olunuz.</li>
    <li>7. Gündeki DataAccess katmanında bulunan Abstract kısım Generic Repository Design Pattern ile güncellendi.</li>
    <li>7. Gündeki DataAccess katmanında bulunan InMemoryCarDal güncellendi. (LINQ kodları eklenmiştir.)</li>
    <li>8. Gün ödevine ilişkin EntityFramework kodları yazıldı.</li>
    <li><del>Sql Server' da oluşturulan veritabanı <a href="https://hizliresim.com/hL9kKp">bu</a> şekildedir.</del></li>
    <li>9. Gün ödevine ilişkin Core Katmanı kodları yazıldı.</li>
    <li>10. Gün ödevinin ilk aşamasına ilişkin Core Katmanı kodlarına Utils dizini eklendi ve kod refaktör edildi.</li>
    <li>10. Gün ödevinin ikinci aşamasına ilişkin veritabanı düzenlendi(foreign keyler vs. eklendi).</li>
    <li>11. Gün ödevine ilişkin WebAPI katmanı kuruldu.</li>
    <li>11. Günda Business katmanında bulunan Validasyon kuralları FluentValidation ile yazıldı. ValidationAspect Attribute' u ile AOP teknikleri kullanıldı.</li>
    <li>12. Gün ödevine ilişkin projeye Autofac, FluentValidation ve AOP Desteği eklendi.</li>
    <li>Kiralanacak arabanın, teslim edilmiş olması kuralı <del>FluentValidation ile <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/Business/ValidationRules/FluentValidation/RentalValidator.cs">RentalValidator</a>'da yazıldı.</del> 12. ve 13. Gün Dersi ile beraber bu kuralın Business Kuralı olduğu anlaşılmış işlemler <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/Business/Concrete/RentalManager.cs">RentalManager</a> sınıfına taşınmıştır. </li>
    <li>13. Gün ödevine ilişkin CarRental veritabanına CarImages eklendi.</li>
    <li>13. Araba fotoğrafları wwwroot dizini altında, GUID'ler ile isimlendirilerek tutuldu. Bu işlemler WebAPI katmanında CarImagesController' ın Add Metodunda bulunmaktadır. </li>
    <li>Araba fotoğraflarının eklenmesi, silinmesi, güncellenmesi işlemleri veritabanında sorunsuz çalışmaktadır. Daha sonra veritabanından silinen araba fotoğrafının wwwroot dizininden silinmesi de eklenebilir.</li>
    <li>14. Gün ödevine ilişkin JWT entegrasyonu eklendi. SecuredOperation Attribute' u <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/Business/Concrete/CarImageManager.cs">CarImageManager</a> ekleme (Add) metoduna eklendi.</li>
    <li>15. Gün ödevine ilişkin Cache, CacheRemove, TransactionScope ve Performance Aspectleri eklendi.</li>
    <li> Postman de yapılan bazı istekler:
        <h2><b>Yeni İstekler</b> 13. ve 15.Gün Ödevi</h2>
        <ul>SecuredOperation Aspecti olan metotlar için kullanıcının ilk önce register ve login olması, loginden alınan tokenin ilgili metoda Authorization'ı Bearer Token olarak vermesi gerekir.
        Ayrıca login olan kullanıcının UserOperationClaims tablosunda gerekli Claimlerinin olduğundan emin olunuz.
        <li>POST : https://localhost:44324/api/auth/register<br>
            POST: https://localhost:44324/api/auth/login <br>
            Type: BODY(raw -JSON): 
            <pre>     {
    "firstName": "Poyraz",
    "lastName": "Aktaş",
    "email": "poyraz@poyraz.com",
    "password": "12345"
      }</pre>
            <h2>Gelen token ile</h2>    
          <li><h3>Authorization</h3>
          Type: Bearer Token
          <h6>eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMDYiLCJlbWFpbCI6ImNwcnVtdXRAcG95cmF6LmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJVbXV0IMOHYXBhciIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InVzZXIiLCJuYmYiOjE2MTQ4NDgxMjYsImV4cCI6MTYxNDg0ODcyNiwiaXNzIjoicG95cmF6QHBveXJhei5jb20iLCJhdWQiOiJwb3lyYXpAcG95cmF6LmNvbSJ9.VIjKzkawKI5eiys8BCwSfUVTTQgmq2fRrsrGnt4DvwO1vumOywVIPplOEA-AdX5Q_ru9UJLtlQVItC4N9FHieQ</h6>
          <h3>POST: https://localhost:44324/api/carimages/add</h3><br> 
        <h3><b>form-data:</b></h3> 
        <table style="width:100%">
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Type</th>
          </tr>
          <tr>
            <td>carId</td>
            <td>1</td>
            <td>Text</td>
          </tr>
          <tr>
            <td>File</td>
            <td>toyota_corolla.jpg</td>
            <td>File</td>
          </tr>
        </table>
        </li>
        <li>GET: https://localhost:44324/api/carimages/photos?id=1</li>
        <h2><b>Eski İstekler</b> 11.Gün Ödevi</h2>
          <ul>
            <li>GET: https://localhost:44324/api/rentals/details </li>
            <li>GET: https://localhost:44324/api/users/all </li>
            <li>GET: https://localhost:44324/api/cars/brand?id=3</li>
            <li>GET: https://localhost:44324/api/cars/color?id=7</li>
            <li>POST: https://localhost:44324/api/rentals<br> 
            Type: BODY(raw -JSON): 
            <pre>            {
            "carId": 4,
            "customerId": 1,
            "rentDate": "2021-02-14T00:00:00",
            "returnDate": "2021-02-19T00:00:00"
            }</pre>
          <b>Hatırlatma:</b> localhost'tan sonra gelen 44324 port numarası aynı olmayabilir, kendinizinkiyle değiştirebilirsiniz.
            </li>
        </ul>
    </li>
    <li><del>Console' da isterlerdeki bütün testler simüle edilmiştir. Dilerseniz <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/ConsoleUI/Program.cs">Program.cs</a> üzerinden, yorum satırlarını açarak diğer operasyonları da deneyebilirsiniz.</del></li>
    <li><del>ConsoleUI' da yapılacan Add, Update, Delete işlemlerini ilgili fonksiyonlardan güncelleyebilirsiniz. </del></li>
  </ul>
</h4>

## [Araba Kiralama Projesi Frontend](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/car-rental-frontend)
<h4>
  <ul>
    <li>17. Gün ödevine ilişkin Angular'daki arayüz isterleri tamamlandı.</li>
    <li>18. Gün ödevine ilişkin routing işlemleri tamamlandı. Seçilen arabanın resmi listelendi. Resmi olmayan arabalara dair Http 400 hatası daha sonra giderilebilir.</li>
    <li>19. Gün ödevine ilişkin pipe ile filtreleme işlemleri tamamlandı. Seçilen arabanın kiralanma imkanı, fake banka servisi eklendi ve toastr ile bilgilendirme eklendi.</li>
    <li>19. Gün ödevine ilişikin yazılan fake banka servisi, <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/WepAPI/Controllers/CardInformationsController.cs">CardInformationsController'</a> da bulunmaktadır. Kullanıcı 1000 liralık bakiyesini bir oturumda dilediği gibi harcayabilir. </li>
  </ul>
</h4>


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

# Ödev Detayları

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

4. Arabanın kiralanma bilgisini tutan tablo oluşturunuz. Rentals-->Id, CarId, CustomerId, RentDate(Kiralama Tarihi), ReturnDate(Teslim Tarihi). ✓

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

## Ödev 12

1. Car Rental Projenize Autofac desteği ekleyiniz.✓

2. Car Rental Projenize FluentValidation desteği ekleyiniz.✓

3. Car Rental Projenize AOP desteği ekleyiniz. ValidationAspect ekleyiniz.✓

## Ödev 13

RentACar projenizde;

<ul>
  <li>CarImages (Araba Resimleri) tablosu oluşturunuz. (Id,CarId,ImagePath,Date) Bir arabanın birden fazla resmi olabilir.✓</li>
  <li>Api üzerinden arabaya resim ekleyecek sistemi yazınız.✓</li>
  <li>Resimler projeniz içerisinde bir klasörde tutulacaktır. Resimler yüklendiği isimle değil, kendi vereceğiniz GUID ile dosyalanacaktır.✓</li>
  <li>Resim silme, güncelleme yetenekleri ekleyiniz.✓</li>
  <li>Bir arabanın en fazla 5 resmi olabilir.✓</li>
  <li>Resmin eklendiği tarih sistem tarafından atanacaktır.✓</li>
  <li>Bir arabaya ait resimleri listeleme imkanı oluşturunuz.✓</li>
  <li>Eğer bir arabaya ait resim yoksa, default bir resim gösteriniz. Bu resim şirket logonuz olabilir.✓</li>
</ul>

## Ödev 14

1. RentACar projenize JWT entegrasyonu yapınız.✓
   
## Ödev 15

1. RentACar projenize Cache, Transaction ve Performance aspectlerini ekleyiniz.✓

## Ödev 17

RentACar projeniz için:

1. Angular projesi oluşturunuz✓
2. Bootstrap entegrasyonu yapınız✓
3. Markaları listeleyiniz✓
4. Renkleri listeleyiniz✓
5. Müşterileri listeleyiniz✓
6. Arabaları listeleyiniz. (Arabaları listelerken BrandId yerine BrandName, ColorId yerine ColorName şeklinde gösteriniz)✓
7. Kiralamaları listeleyiniz (Rentals) CarId yerine BrandName, CustomerId yerine FirstName + LastName şeklinde gösteriniz.✓

## Ödev 18

1. Brand listesinde herhangi bir marka seçildiğinde, o markaya ait arabaları listeleyiniz.✓
2. Color listesinde herhangi bir renk seçildiğinde, o renge ait arabaları listeleyiniz.✓
3. Car listesinde bir arabaya tıklandığında o arabaya ait detay sayfası oluşturunuz. Bu sayfada bu araca ait resimleri de gösteriniz.✓

## Ödev 19

1. Car, Brand, Color için pipe ile arama desteği ekleyiniz.✓
2. Car sayfasına 2 adet açılır kutu ekleyiniz. Html-Select Option. Bu açılır kutularda sırasıyla Marka ve Renk listeleyiniz.✓
3. Açılır kutuların yanına "Filtrele" butonu ekleyiniz.✓
4. Filtrele butonuna tıklandığında apiden ilgili filtreye uygun arabaları listeleyiniz.✓
5. Araba detay sayfasında "Kirala" butonu ekleyiniz. Bu aracı kiralayabilecek sistemi yazınız. Araba hali hazırda başkası tarafından seçilen tarih aralığında kiralanmışsa, kiralama işlemi yapmayınız.✓
6. Kiralama işleminde tarihler seçildikten sonra, yeni bir sayfada kredi kartıyla ödeme desteği getiriniz.✓
7. Ödeme işlemi için api'de sahte bir banka servisi yazınız.✓
8. Tüm işlemler için Toastr desteği ekleyiniz.✓