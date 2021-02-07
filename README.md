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
  <li> <a href="#araba-kiralama-projesi"> Ödev 7, 8, 9</a> </li>
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

Bu katman  *Abstract* soyut kısım, *Concrete* somut kısım ve *ValidationRules* olmak üzere üç dizinden oluşmakta.

Soyut kısımdaki *IEntitiyService* interface' i, somut kısımda bulunan *GameManager.cs* ve *PlayerManager.cs*' in referanslarını tutmak ve eş görevleri paylaştırmak üzere üretilmiştir.

*PlayerManager.cs*' de bulunan ekleme metodunda *mernis validasyon* simülasyonu yapılmıştır. 

İsterlerde bulunan kampanya indirimlerine *Sales* dizininde yer verilmiştir. 

Ayrıca *Concrete* dizininde bulunan *Platforms* dizininde, çeşitli oyun dağıtım platformlarına yer verilmiştir.

# [Araba Kiralama Projesi](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/CarRentalProject)

## Ödev 7
Araba kiralama sistemi yazıyoruz.

Entities, DataAccess, Business ve Console katmanlarını oluşturunuz.

Bir araba nesnesi oluşturunuz. "Car". Özellik olarak : Id, BrandId, ColorId, ModelYear, DailyPrice, Description alanlarını ekleyiniz. (Brand = Marka)

InMemory formatta GetById, GetAll, Add, Update, Delete oprasyonlarını yazınız. Consolda test ediniz.

## Ödev 8
Araba Kiralama projemiz üzerinde çalışmaya devam edeceğiz.

Car nesnesine ek olarak;

1) Brand ve Color nesneleri ekleyiniz(Entity)

Brand-->Id,Name

Color-->Id,Name

2) Sql Server tarafında yeni bir veritabanı kurunuz. Cars,Brands,Colors tablolarını oluşturunuz.

3) Sisteme Generic IEntityRepository altyapısı yazınız.

4) Car, Brand ve Color nesneleri için Entity Framework altyapısını yazınız.

5) GetCarsByBrandId , GetCarsByColorId servislerini yazınız.

6) Sisteme yeni araba eklendiğinde aşağıdaki kuralları çalıştırınız.

Araba ismi minimum 2 karakter olmalıdır

Araba günlük fiyatı 0'dan büyük olmalıdır.

## Ödev 9

1) CarRental Projenizde Core katmanı oluşturunuz.

2) IEntity, IDto, IEntityRepository, EfEntityRepositoryBase dosyalarınızı 9. gün dersindeki gibi oluşturup ekleyiniz.

3) Car, Brand, Color sınıflarınız için tüm CRUD operasyonlarını hazır hale getiriniz.

4) Console'da Tüm CRUD operasyonlarınızı Car, Brand, Model nesneleriniz için test ediniz. GetAll, GetById, Insert, Update, Delete.

5) Arabaları şu bilgiler olacak şekilde listeleyiniz. CarName, BrandName, ColorName, DailyPrice. (İpucu : IDto oluşturup 3 tabloya join yazınız)

## Araba Kiralama Projesi ile ilgili Notlar
<h4>
  <ul>
    <li>ConsoleUI' ı startup project olarak seçtiğinizden emin olunuz.</li>
    <li>7.Haftadaki DataAccess katmanında bulunan Abstract kısım Generic Repository Design Pattern ile güncellendi.</li>
    <li>7.Haftadaki DataAccess katmanında bulunan InMemoryCarDal güncellendi. (LINQ kodları eklenmiştir.)</li>
    <li>8.Hafta ödevine ilişkin EntityFramework kodları yazıldı.</li>
    <li>Sql Server' da oluşturulan veritabanı <a href="https://hizliresim.com/hL9kKp">bu</a> şekildedir.</li>
    <li>9.Hafta ödevine ilişkin Core Katmanı kodları yazıldı.</li>
    <li>Console' da isterlerdeki bütün testler simüle edilmiştir. Dilerseniz <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/ConsoleUI/Program.cs">Program.cs</a> üzerinden, yorum satırlarını açarak diğer operasyonları da deneyebilirsiniz.</li>
    <li>ConsoleUI' da yapılacan Add, Update, Delete işlemlerini ilgili fonksiyonlardan güncelleyebilirsiniz. </li>
  </ul>
</h4>