# YazilimGelistiriciKampi

<h2> Kamp Ödevleri </h2>

<h3>
<ul>
  <li> <a href="#kamp-ödev-5"> Ödev 5</a> </li>
  <li> <a href="#kamp-ödev-6"> Ödev 6</a> </li>
</ul>
</h3>

## [Kamp Ödev 5](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev5)
Bir oyun yazmak istiyorsunuz. Bu yazılım için backend kodlarını C# ile geliştirmeyi planlıyoruz. Yeni üye, satış ve kampanya yönetimi yapılması isteniyor. 
Nesnelere ait özellikleri istediğiniz gibi verebilirsiniz. 

### Gereksinimler

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

## [Kamp Ödev 6](https://github.com/poyrazaktas/YazilimGelistiriciKampi/tree/master/KampOdev6)
Kampımızla beraber paralelde geliştireceğimiz bir projemiz daha olacak. Araba kiralama sistemi yazıyoruz.

Entities, DataAccess, Business ve Console katmanlarını oluşturunuz.

Bir araba nesnesi oluşturunuz. "Car". Özellik olarak : Id, BrandId, ColorId, ModelYear, DailyPrice, Description alanlarını ekleyiniz. (Brand = Marka)

InMemory formatta GetById, GetAll, Add, Update, Delete oprasyonlarını yazınız. Consolda test ediniz.

## Ödev 6 ile ilgili Notlar
<h4>
  <ul>
    <li>ConsolUI' ı startup project olarak seçtiğinizden emin olunuz</li>
    <li>Console' da GetAll, GetById ve Update operasyonları simüle edilmiştir. Dilerseniz Program.cs üzerinden diğer operasyonları da deneyebilirsiniz</li>
  </ul>
</h4>