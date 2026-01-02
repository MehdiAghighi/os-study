export const lessons = [
  {
    id: 1,
    title: "مقدمه و نرم‌افزارهای سیستمی",
    icon: "BookOpen",
    description: "آشنایی با انواع نرم‌افزار، سیستم عامل و منابع سیستم",
    duration: "25 دقیقه",
    content: `
<h2>تقسیم‌بندی برنامه‌ها</h2>
<p>برنامه‌ها به دو دسته کلی تقسیم می‌شوند:</p>
<ul>
<li><strong>Applications (نرم‌افزارهای کاربردی):</strong> برنامه‌هایی که کاربر مستقیماً با آنها کار می‌کند مانند Word، Browser و...</li>
<li><strong>System Software (نرم‌افزارهای سیستمی):</strong> نرم‌افزارهایی که اجازه می‌دهند از منابع سیستم بهره بیشتری ببریم</li>
</ul>

<h3>انواع نرم‌افزارهای سیستمی</h3>

<h4>1. Editors (ویرایشگرها)</h4>
<p>نرم‌افزارهایی برای تغییرات در فایل‌ها. مثال: Notepad، VS Code، Vim</p>

<h4>2. Compilers (کامپایلرها)</h4>
<p>کامپایلرها وظیفه تبدیل کد سطح بالا به کد ماشین را دارند. مراحل کامپایل:</p>

<div class="example-box">
<h4>مراحل کامپایل:</h4>
<ol>
<li><strong>Tokenizer/Scanner:</strong> تشخیص توکن‌ها (کلمات رزرو شده) و متغیرها</li>
<li><strong>Parsing:</strong> بررسی صحت گرامری جملات (مثل بررسی ساختار if-else). در صورت خطا: Syntax Error</li>
<li><strong>Intermediate Code Generation:</strong> تولید کد میانی از درخت پارس</li>
<li><strong>Optimization:</strong> بهینه‌سازی از نظر سرعت و حافظه (اختیاری)</li>
<li><strong>Binary Code Generation:</strong> تولید کد باینری نهایی</li>
</ol>
</div>

<div class="important-box">
<strong>نکته مهم:</strong> برای قابل حمل بودن (Portable) کد، تبدیل به باینری بر عهده سیستم عامل مقصد خواهد بود. برنامه‌های native فقط روی همان سیستم عامل کار می‌کنند.
</div>

<h4>3. DBMS (سیستم‌های مدیریت پایگاه داده)</h4>
<p>برنامه‌هایی که مدیریت داده‌ها را انجام می‌دهند و از ناسازگاری داده‌ها جلوگیری می‌کنند.</p>
<ul>
<li><strong>اطلاعات ثابت:</strong> مانند نام و نام خانوادگی</li>
<li><strong>اطلاعات متغیر:</strong> مانند دروس انتخاب شده هر ترم</li>
</ul>

<h4>4. Operating System (سیستم عامل)</h4>
<div class="important-box">
<strong>تعریف:</strong> سیستم عامل نرم‌افزاری سیستمی است که وظیفه مدیریت منابع را برعهده دارد.
</div>

<h3>انواع منابع (Resources)</h3>
<table>
<tr><th>منابع سخت‌افزاری</th><th>منابع نرم‌افزاری</th></tr>
<tr><td>Hard Drive</td><td>Interrupt Service</td></tr>
<tr><td>CPU</td><td>API</td></tr>
<tr><td>Main Memory</td><td>POSIX</td></tr>
<tr><td>I/O Devices</td><td>Traps, Critical Sections</td></tr>
</table>

<h3>BIOS چیست؟</h3>
<p>BIOS مجموعه‌ای از توابع است که ارتباط با دستگاه‌های I/O را فراهم می‌کند. مثلاً خواندن کاراکتر از کیبورد و نمایش آن روی مانیتور.</p>

<h2>چهار لایه مدیریت منابع (PMDI Management)</h2>
<p>تمامی سیستم عامل‌ها این چهار لایه را برای مدیریت منابع دارند:</p>

<ol>
<li><strong>Process Management (مدیریت فرآیندها):</strong> مدیریت اجرای همزمان برنامه‌ها</li>
<li><strong>Memory Management (مدیریت حافظه):</strong> تخصیص و مدیریت حافظه اصلی</li>
<li><strong>Device Management (مدیریت دستگاه‌ها):</strong> مدیریت دستگاه‌های ورودی و خروجی</li>
<li><strong>Information Management (مدیریت اطلاعات):</strong> مدیریت فایل‌ها و دسترسی‌ها</li>
</ol>

<h3>مدیریت فرآیندها (Process Management)</h3>
<p>سیستم عامل Multi-Process می‌تواند چندین برنامه را به صورت همزمان مدیریت کند. روش کار:</p>
<ul>
<li>صفی از برنامه‌ها (Ready Queue) وجود دارد</li>
<li>سیستم عامل از سر صف یک برنامه انتخاب می‌کند</li>
<li>یک بازه زمانی (Time Slice یا Quantum) مثلاً 200 میلی‌ثانیه به آن اختصاص می‌دهد</li>
<li>برنامه اجرا می‌شود و در صورت عدم اتمام، به انتهای صف برمی‌گردد</li>
</ul>

<div class="important-box">
<strong>Time Sharing:</strong> این عملیات به علت کوتاه بودن، از دید کاربر به صورت اجرای همزمان دیده می‌شود.
</div>

<h3>مدیریت حافظه (Memory Management)</h3>
<p>هر برنامه قبل از اجرا باید در حافظه بارگذاری شود. در صورتی که برنامه‌ها بزرگتر از فضای فیزیکی باشند، عملیات Swap انجام می‌شود.</p>

<h3>مدیریت دستگاه‌ها (Device Management)</h3>
<p>سیستم عامل سرویس‌دهی به درخواست‌های I/O را مدیریت می‌کند. مفاهیم مهم:</p>
<ul>
<li><strong>Track (شیار):</strong> دوایری روی سطح دیسک مغناطیسی</li>
<li><strong>Seek Time (زمان پیگرد):</strong> زمان حرکت هد از موقعیت فعلی به محل داده مورد نظر</li>
</ul>

<h3>مدیریت اطلاعات (Information Management)</h3>
<p>مدیریت داده‌ها در قالب فایل شامل:</p>
<ul>
<li>Extension، زمان ایجاد، آخرین ویرایش</li>
<li>مالک فایل و مسیر ذخیره‌سازی</li>
<li>مدیریت کاربران و دسترسی‌ها</li>
</ul>

<h4>تفاوت Protection و Security</h4>
<table>
<tr><th>Protection (حفاظت)</th><th>Security (امنیت)</th></tr>
<tr><td>اگر کاربر اجازه دسترسی ندارد، به هیچ صورت نتواند دسترسی یابد</td><td>اگر به فایل دسترسی دارد، محتوا رمزگذاری شده باشد</td></tr>
</table>
    `
  },
  {
    id: 2,
    title: "تکامل عملیات I/O",
    icon: "HardDrive",
    description: "روش‌های Polling، Interrupt و DMA",
    duration: "30 دقیقه",
    content: `
<h2>تکامل عملیات I/O</h2>
<p>سه روش اصلی برای انجام عملیات I/O وجود دارد:</p>

<h3>1. روش Polling (نظرسنجی)</h3>
<p>اولین روش برای عملیات I/O که هنوز در برخی میکروکنترلرها استفاده می‌شود.</p>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>CPU فرمان I/O را صادر می‌کند</li>
<li>تا اتمام کار I/O، CPU دستگاه را poll می‌کند (بررسی مداوم)</li>
<li>در این مدت CPU کار دیگری انجام نمی‌دهد</li>
<li>پس از اتمام، داده‌ها به حافظه اصلی منتقل می‌شوند</li>
</ol>
</div>

<div class="important-box">
<strong>مشکل اصلی:</strong> چون عملیات I/O بسیار زمان‌بر است، CPU در این مدت بیکار می‌ماند و استفاده مناسبی از آن نمی‌شود.
</div>

<h3>2. روش I/O مبتنی بر وقفه (Interrupt-Based I/O)</h3>
<p>این روش نسبت به Polling بهینه‌تر است و از بافر استفاده می‌کند.</p>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>داده‌ها از دیسک خوانده شده و به بافر منتقل می‌شوند</li>
<li>بعد از پر شدن بافر، سیگنال وقفه به CPU ارسال می‌شود</li>
<li>CPU کار فعلی را متوقف کرده و سیگنال تأیید برمی‌گرداند</li>
<li>اطلاعات بافر به حافظه اصلی منتقل می‌شود</li>
</ol>
</div>

<div class="formula-box">
برای 100KB داده با بافر 10KB → 10 بار وقفه در کار CPU
</div>

<div class="important-box">
<strong>مشکل:</strong> CPU هنوز در مراتبی درگیر عملیات I/O می‌شود. حالت ایده‌آل این است که CPU فقط در پایان عملیات I/O درگیر شود.
</div>

<h3>3. روش DMA (Direct Memory Access)</h3>
<p>کنترلری به نام DMA Controller کمک می‌کند ارتباط بدون پردازنده برقرار شود.</p>

<div class="example-box">
<h4>اجزای DMA Controller:</h4>
<ul>
<li><strong>Buffer:</strong> ذخیره موقت داده‌ها</li>
<li><strong>Counter Register:</strong> شمارش بایت‌های باقیمانده</li>
<li><strong>Address Register:</strong> آدرس دستگاه فیزیکی</li>
<li><strong>Data Register:</strong> آدرس حافظه مقصد</li>
<li><strong>Logic Control:</strong> کنترل منطقی عملیات</li>
</ul>
</div>

<h4>سیگنال‌های ارتباطی DMA با CPU:</h4>
<ul>
<li>DMA Request</li>
<li>Acknowledge Request</li>
<li>Interrupt</li>
<li>R/W (خواندن/نوشتن)</li>
<li>Clock</li>
</ul>

<div class="example-box">
<h4>مثال کد C برای درک DMA:</h4>
<pre><code>char buffer[150];
File *fp;
fp = fopen("C:\\myfile.txt","t");
buffer = fread(fp, 150);
printf("%s\\n", buffer);</code></pre>

<h4>چهار مورد مهم در این برنامه:</h4>
<ol>
<li><strong>آدرس حافظه مقصد:</strong> آدرس buffer در حافظه</li>
<li><strong>آدرس دستگاه فیزیکی:</strong> C:\\myfile.txt مشخص می‌کند منظور هارد درایو است</li>
<li><strong>نوع عمل:</strong> fread یعنی فقط خواندن</li>
<li><strong>تعداد بایت:</strong> 150 بایت برای Counter</li>
</ol>
</div>

<h4>نحوه کار DMA:</h4>
<ol>
<li>پارامترها در رجیسترهای DMA ذخیره می‌شوند</li>
<li>نوع عمل با پالس R/W مشخص می‌شود</li>
<li>داده‌ها خوانده شده و در Buffer قرار می‌گیرند</li>
<li>وقتی Buffer پر شد، DMA درخواست High Impedance به CPU می‌دهد</li>
<li>کنترل BUS به DMA داده می‌شود</li>
<li>داده‌ها به حافظه منتقل می‌شوند</li>
<li>کنترل BUS به CPU برمی‌گردد</li>
</ol>

<div class="important-box">
<strong>BUS Cycle Stealing:</strong> عمل گرفتن کنترل BUS از CPU را "ربودن چرخه گذرگاه" می‌نامند.
</div>

<h4>پایان عملیات I/O:</h4>
<p>DMA از روی Counter می‌فهمد عملیات به اتمام رسیده (با صفر شدن Counter). سپس سیگنال وقفه به CPU ارسال می‌کند.</p>

<h3>چرخه دستورالعمل</h3>
<ol>
<li><strong>Fetch Opcode:</strong> واکشی دستورالعمل از حافظه</li>
<li><strong>Decode:</strong> تشخیص نوع دستور، تعداد آدرس‌ها، محاسبه طول دستور</li>
<li><strong>Fetch Operand:</strong> واکشی عملوندها (اگر دارد)</li>
<li><strong>Operand Decode:</strong> کدگشایی عملوندها</li>
<li><strong>Execution:</strong> اجرای دستورالعمل</li>
<li><strong>Saving Result:</strong> ذخیره نتایج</li>
</ol>

<div class="important-box">
<strong>نکته مهم:</strong> اجرای دستورالعمل atomic (تجزیه‌ناپذیر) است. وقفه‌ها فقط در پایان چرخه دستورالعمل پذیرفته می‌شوند.
</div>

<p>در مراحل 1، 3 و 6 CPU به BUS نیاز دارد. در مراحل 2، 4 و 5 می‌تواند کنترل BUS را واگذار کند.</p>

<h3>I/O Channel</h3>
<p>برای رفع محدودیت تعداد دستگاه‌های متصل به DMA، از Channel استفاده می‌شود. یک Channel می‌تواند به چندین DMA Controller و چندین I/O متصل شود.</p>

<p>در سوپرکامپیوترها، یک I/O Processor جداگانه برای مدیریت عملیات I/O وجود دارد.</p>
    `
  },
  {
    id: 3,
    title: "انواع وقفه‌ها و مکانیزم پردازش",
    icon: "Zap",
    description: "وقفه‌های برنامه‌ای، I/O، Timeout و سخت‌افزاری",
    duration: "20 دقیقه",
    content: `
<h2>انواع وقفه‌ها</h2>
<p>وقفه‌ها سیگنال‌هایی هستند که از یک جزء سخت‌افزاری به CPU ارسال شده و CPU به ازای پذیرش آنها کار خود را متوقف کرده و روتینی را اجرا می‌کند.</p>

<h3>1. وقفه‌های برنامه‌ای (Program Interrupt)</h3>
<p>توسط ALU پردازنده تولید شده و به Control Unit ارسال می‌شوند.</p>

<div class="example-box">
<h4>شرایط تولید:</h4>
<ul>
<li>تقسیم بر صفر</li>
<li>سرریز محاسباتی (Overflow)</li>
<li>JUMP به قسمتی از حافظه که دسترسی به آن نداریم</li>
</ul>
<p><strong>سرویس روتین:</strong> دستور Abort شدن برنامه</p>
</div>

<h3>2. اتمام عملیات I/O (I/O Completion)</h3>
<p>توسط DMA یا Channel صادر می‌شود. وقتی برنامه I/O به اتمام رسید، این وقفه به CPU ارسال می‌شود.</p>
<p><strong>سرویس روتین:</strong> سیستم عامل تشخیص می‌دهد بعد از توقف چه اتفاقی باید بیفتد.</p>

<h3>3. زمان‌سنج (Timeout)</h3>
<p>مرتبط با RTC (Real Time Clock):</p>

<div class="example-box">
<h4>نحوه عملکرد RTC:</h4>
<ul>
<li>هسته آن یک نوسان‌ساز (کریستال کوارتز) است</li>
<li>نوسانات قابل شمارش هستند</li>
<li>مثلاً 50 تا Timer Tick یک ثانیه را اندازه‌گیری می‌کند</li>
<li>می‌توان زمانی را set کرد که در Counter Reg ذخیره شده و با هر پالس کم می‌شود</li>
<li>با صفر شدن، سیگنال وقفه ارسال می‌شود</li>
</ul>
</div>

<div class="example-box">
<h4>کاربرد:</h4>
<p>نمایش همزمان 4 دوربین: هر 100 میلی‌ثانیه تصویر یک دوربین نمایش داده می‌شود. چون زمان کوتاه است، از نظر ما همزمان به نظر می‌رسد.</p>
</div>

<h3>4. نقص سخت‌افزار (Hardware Failure)</h3>
<ul>
<li>کاهش سطح ولتاژ منبع تغذیه</li>
<li>افزایش دما به حد خطرناک</li>
</ul>

<h2>مکانیزم پردازش وقفه‌ها</h2>

<h3>بخش سخت‌افزاری:</h3>
<ol>
<li>دستگاه وقفه‌دهنده سیگنال وقفه را به پردازنده ارسال می‌کند</li>
<li>پردازنده اجرای دستورالعمل جاری را به پایان می‌رساند</li>
<li>در پایان دستورالعمل، اگر امکان پذیرش وقفه بود، وصول آن اعلام می‌شود</li>
<li>محتوای Program Counter و PSW در بالای Stack ذخیره می‌شود</li>
<li>آدرس اولین دستورالعمل روال خدماتی وقفه در PC بارگذاری می‌شود</li>
</ol>

<h3>بخش نرم‌افزاری:</h3>
<ol>
<li><strong>ذخیره Context:</strong> از تمامی رجیسترها یک کپی در حافظه تهیه می‌شود</li>
<li><strong>اجرای روتین خدماتی:</strong> روتین مربوط به وقفه اجرا می‌شود</li>
<li><strong>بازیابی Context:</strong> متن برنامه متوقف شده از حافظه به CPU منتقل می‌شود</li>
<li><strong>بارگذاری PC و PSW:</strong> از بالای پشته بارگذاری می‌شوند</li>
</ol>

<div class="important-box">
<strong>PSW (Program Status Word):</strong> شامل فلگ‌ها و اطلاعات وضعیت پردازنده است.
</div>
    `
  },
  {
    id: 4,
    title: "مدیریت فرآیند",
    icon: "Layers",
    description: "Process، Job، PCB و چرخه حیات فرآیند",
    duration: "35 دقیقه",
    content: `
<h2>مسیر تبدیل برنامه به فرآیند</h2>

<div class="formula-box">
Program → Compile → Object → Link → exe → Submit → Job → Job Scheduler → Active Job → Loader → Process
</div>

<h3>مشخصات Job</h3>
<ul>
<li><strong>Job ID:</strong> شماره منحصر به فرد برای برنامه</li>
<li><strong>Job Type:</strong> Batch / Online / Real Time</li>
</ul>

<div class="example-box">
<h4>انواع Job:</h4>
<table>
<tr><th>نوع</th><th>توضیح</th><th>مثال</th></tr>
<tr><td>Batch</td><td>زمان اجرا اهمیت ندارد</td><td>پرداخت دستمزد کارمندان</td></tr>
<tr><td>Online</td><td>می‌تواند با وقفه کوتاه منتظر بماند</td><td>عملیات کارت به کارت</td></tr>
<tr><td>Real Time</td><td>باید بلافاصله پاسخ بگیرد</td><td>packetهای دریافتی در router</td></tr>
</table>
</div>

<h3>SPOOL Table</h3>
<p>جدولی که Job ها در آن ثبت می‌شوند:</p>
<ul>
<li><strong>Input:</strong> Jobهای با وضعیت Hold</li>
<li><strong>Output:</strong> Jobهای Active شده</li>
</ul>

<h3>Job Scheduler</h3>
<p>یک System Process که به صورت دوره‌ای اجرا می‌شود و Jobهای hold شده را با توجه به شرایط به حالت Active می‌آورد.</p>

<h3>Loader</h3>
<p>Jobهای Active شده را در حافظه بارگذاری می‌کند. پس از این، برنامه Process نام می‌گیرد.</p>

<h2>ساختار برنامه در حافظه (Core Image)</h2>
<ul>
<li><strong>Code:</strong> ساختار و کدهای برنامه و توابع فراخوانی شده</li>
<li><strong>Data:</strong> داده‌ها، متغیرها و انواع آنها</li>
<li><strong>Stack:</strong> صف حافظه برای تخصیص به call function</li>
<li><strong>Heap:</strong> تخصیص پویای حافظه (Dynamic Memory Allocation)</li>
</ul>

<h2>Process Control Block (PCB)</h2>
<p>جدولی در حافظه که به ازای هر برنامه یک سطر دارد:</p>

<h3>ستون‌های PCB:</h3>

<h4>1. Process ID</h4>
<p>شناسه منحصر به فرد فرآیند</p>

<h4>2. Status (وضعیت)</h4>
<table>
<tr><th>وضعیت</th><th>توضیح</th></tr>
<tr><td>Ready</td><td>حافظه در اختیار دارد و منتظر CPU است</td></tr>
<tr><td>Running</td><td>CPU در اختیار است و دستورات اجرا می‌شوند</td></tr>
<tr><td>Blocked</td><td>با I/O در تماس است، CPU ندارد</td></tr>
<tr><td>Terminated</td><td>اجرا خاتمه یافته (halt)</td></tr>
<tr><td>Suspended</td><td>بن‌بست موقت برای برنامه</td></tr>
</table>

<h4>3. Priority (اولویت)</h4>
<p>اولویت درخواست پردازنده که می‌تواند از اول وارد شده یا محاسبه شود:</p>
<div class="formula-box">
PR = Average I/O Time / Average CPU Time
</div>
<p>فرآیندی که بیشتر از I/O استفاده کند، اولویت بالاتری دارد.</p>

<h4>4. کپی رجیسترها</h4>
<ul>
<li>Copy of PC (Program Counter)</li>
<li>Copy of PSW</li>
<li>Copy of General Purpose Registers</li>
</ul>

<h4>5. اطلاعات دیگر</h4>
<ul>
<li>Accounting Information</li>
<li>Memory Management Info</li>
<li>I/O Management Info</li>
</ul>

<div class="important-box">
<strong>تعریف فرآیند:</strong> فرآیند برنامه‌ای است که منابع مورد نیاز در اختیار آن قرار داده و اطلاعات کنترلی برای آن ایجاد شده و آماده اجرا است.
<br><br>
<strong>Address Space of Process = Core Image + Process Table</strong>
</div>

<h2>Dispatcher (CPU Scheduler)</h2>
<p>برنامه سیستمی که مسئول تخصیص CPU به فرآیندها است:</p>

<ol>
<li>فرآیندها در Ready Queue قرار می‌گیرند</li>
<li>Dispatcher یکی از برنامه‌ها را انتخاب می‌کند</li>
<li>Time Slice روی RTC تنظیم می‌شود</li>
<li>وضعیت به Running تغییر می‌کند</li>
<li>Context در CPU کپی شده و برنامه اجرا می‌شود</li>
<li>با اتمام Time Slice، وقفه Timeout ارسال می‌شود</li>
<li>روتین خدماتی Timeout همان Dispatcher است</li>
</ol>

<h3>Context Switching</h3>
<p>جایگزینی Context برنامه‌ها که طبیعتاً زمان‌بر است.</p>

<h3>وضعیت Blocked</h3>
<p>اگر فرآیند درخواست I/O داشته باشد:</p>
<ol>
<li>به حالت Blocked می‌رود</li>
<li>Dispatcher به فرآیند بعدی می‌رود</li>
<li>با اتمام I/O، وقفه I/O Completion ارسال می‌شود</li>
<li>وضعیت از Blocked به Ready برمی‌گردد</li>
<li>فرآیند به انتهای Ready Queue اضافه می‌شود</li>
</ol>
    `
  },
  {
    id: 5,
    title: "الگوریتم‌های زمان‌بندی CPU",
    icon: "Clock",
    description: "FIFO، Round Robin، SJF، SRTF، HRN و...",
    duration: "45 دقیقه",
    content: `
<h2>انواع زمان‌بندی</h2>

<h3>1. انحصاری (Preemptive)</h3>
<p>CPU تا اتمام برنامه در اختیار آن می‌ماند. مناسب Batch Processing.</p>

<h3>2. غیرانحصاری (Non-Preemptive)</h3>
<p>Context Switching دارد. مناسب Online و Real Time.</p>

<h2>اهداف طراحی زمان‌بندی</h2>
<ol>
<li><strong>منصف بودن:</strong> اگر اولویت‌ها یکسان باشد، به فرآیندی که زودتر آمده زودتر سرویس داده شود</li>
<li><strong>کمینه کردن Response Time و بیشینه کردن Throughput</strong></li>
<li><strong>کمینه کردن Overhead:</strong> کاهش زمان‌های تلف شده مثل Context Switching</li>
<li><strong>ترازمندی:</strong> اگر چند پردازنده داشتیم، همه درگیر باشند</li>
<li><strong>اعمال اولویت:</strong> به فرآیندهای I/O-bound زودتر سرویس داده شود</li>
<li><strong>جلوگیری از Starvation:</strong> با مکانیزم AGING</li>
<li><strong>ارجحیت به فرآیندهای دارای منابع کلیدی</strong></li>
</ol>

<div class="formula-box">
Response Time = Wait Time + Service Time
<br><br>
Throughput = تعداد فرآیندهایی که در واحد زمان به اتمام می‌رسند
</div>

<h2>الگوریتم‌های زمان‌بندی</h2>

<h3>1. FIFO (First In First Out)</h3>
<ul>
<li>نوع: Preemptive</li>
<li>معیار انتخاب: ترتیب ورود</li>
<li>مناسب: Batch Processing</li>
<li>مزیت: پیاده‌سازی ساده</li>
</ul>

<h3>2. Round Robin</h3>
<ul>
<li>نوع: Non-Preemptive</li>
<li>معیار انتخاب: ترتیب ورود + Time Slice ثابت</li>
<li>نحوه کار: هر فرآیند یک Quantum دریافت می‌کند و اگر تمام نشد به انتهای صف می‌رود</li>
</ul>

<div class="important-box">
<strong>مشکل:</strong> اگر فرآیند قبل از اتمام Quantum درخواست I/O کند، بقیه زمان هدر می‌رود.
<br>
<strong>راه‌حل:</strong> با درخواست I/O، Dispatcher نیز اجرا شود یا اندازه Quantum متغیر باشد.
</div>

<h3>3. Scheduling with Dynamic Quantum's</h3>
<ul>
<li>مثل Round Robin با Time Slice متغیر</li>
<li>بر اساس رفتار گذشته فرآیند، میانگین زمان استفاده محاسبه می‌شود</li>
<li>مزیت: افزایش نسبی کارایی</li>
<li>عیب: بر اساس حدس و تخمین است</li>
</ul>

<h3>4. SJF (Shortest Job First)</h3>
<ul>
<li>نوع: Preemptive</li>
<li>معیار: زمان CPU کمتر → اولویت بالاتر</li>
<li>کاربر زمان مورد نیاز را اعلام می‌کند</li>
</ul>

<div class="formula-box">
P = 1/S
<br>
P: اولویت (عدد کوچکتر بهتر)
<br>
S: زمان استفاده از CPU
</div>

<h3>5. SRTF (Shortest Remaining Time First)</h3>
<ul>
<li>نوع: Non-Preemptive</li>
<li>تفاوت با SJF: زمان توسط سیستم عامل تخمین زده می‌شود</li>
<li>از Exponential Average استفاده می‌کند</li>
</ul>

<div class="formula-box">
τ(n+1) = α·τ(n) + (1-α)·X(n)
<br><br>
X(n): میزان استفاده فرآیند در لحظه n
<br>
τ(n): میانگین استفاده تا لحظه n
<br>
0 ≤ α ≤ 1
</div>

<div class="important-box">
تأثیر CPU Burstهای جدیدتر بیشتر است (نزدیک‌تر به حال).
</div>

<h3>6. Feedback (بازخورد)</h3>
<ul>
<li>صف‌هایی با اولویت‌های مختلف</li>
<li>فرآیندها ابتدا در صف با اولویت بالا قرار می‌گیرند</li>
<li>پس از چند Quantum، بر اساس رفتار به صف مناسب منتقل می‌شوند</li>
<li>صف‌های با اولویت بالاتر Time Slice کوتاه‌تر دارند</li>
</ul>

<h3>7. HRN (Highest Response Ratio Next)</h3>
<ul>
<li>مبتنی بر اولویت با مکانیزم Aging</li>
<li>می‌تواند Preemptive یا Non-Preemptive باشد</li>
</ul>

<div class="formula-box">
RR = (W + S) / S
<br><br>
W: زمان انتظار
<br>
S: زمان سرویس
</div>

<div class="important-box">
با در نظر گرفتن W، هرچه فرآیندی بیشتر منتظر بماند، اولویتش بیشتر می‌شود.
</div>

<h3>8. Lottery Scheduling (شانسی)</h3>
<ul>
<li>به هر فرآیند یک عدد تصادفی (بلیط) داده می‌شود</li>
<li>Dispatcher عدد تصادفی تولید می‌کند و اگر match شد، CPU اختصاص می‌یابد</li>
<li>فرآیند می‌تواند چندین بلیط داشته باشد</li>
<li>مزیت: مشکل گرسنگی بوجود نمی‌آید</li>
</ul>

<h3>9. Guaranteed Scheduling (تضمین شده)</h3>
<ul>
<li>سهم مساوی از CPU به هر فرآیند</li>
<li>فرآیندی که کمتر از سهم استفاده کرده، اولویت بالاتر</li>
</ul>

<div class="formula-box">
سهمیه = وقت پردازنده / تعداد فرآیندها
<br><br>
اولویت = میزان استفاده / سهمیه
<br>
(عدد کوچکتر = اولویت بالاتر)
</div>

<h3>10. Fair Share Scheduling (سهم عادلانه)</h3>
<ul>
<li>اولویت‌دهی گروهی به فرآیندها</li>
<li>ایده از UNIX</li>
<li>به رفتار گروه نیز توجه دارد</li>
</ul>

<div class="formula-box">
P(j,t) = CPU(j,t)/2 + GCPU(k,t)/(4·W(k)) + Base(j)
</div>

<h2>معیارهای مقایسه</h2>
<table>
<tr><th>معیار</th><th>توضیح</th><th>هدف</th></tr>
<tr><td>متوسط زمان پاسخ</td><td>R = زمان اتمام - زمان ورود</td><td>کمتر بهتر</td></tr>
<tr><td>متوسط زمان انتظار</td><td>W = زمان پاسخ - زمان CPU</td><td>کمتر بهتر</td></tr>
<tr><td>گذردهی (T)</td><td>تعداد فرآیند / زمان کل</td><td>بیشتر بهتر</td></tr>
<tr><td>کارایی CPU</td><td>(زمان کل - زمان بیکاری) / زمان کل × 100</td><td>بیشتر بهتر</td></tr>
</table>
    `
  },
  {
    id: 6,
    title: "زمان‌بندی فرآیندهای بلادرنگ",
    icon: "Timer",
    description: "Rate-Monotonic، EDF و LDF",
    duration: "20 دقیقه",
    content: `
<h2>فرآیندهای بلادرنگ (Real-Time)</h2>
<p>فرآیندهایی که باید بلافاصله به آنها رسیدگی شود.</p>

<h3>انواع فرآیندهای بلادرنگ:</h3>

<h4>1. غیرمتناوب (Aperiodic)</h4>
<p>به صورت غیرمتناوب به سیستم اعلان می‌شوند. مثال: اعلان حریق یا دزدی</p>

<h4>2. متناوب (Periodic) - Event/رخداد</h4>
<p>به صورت متناوب و مشخص با rate معین می‌آیند. مثال: فریم‌ها در سوییچ یا packet در روتر</p>

<h3>شرایط امکان زمان‌بندی</h3>
<div class="formula-box">
Σ(C(i)/P(i)) ≤ 1
<br><br>
C: زمان پردازنده (CPU Time)
<br>
P: دوره تناوب (Period)
</div>

<div class="important-box">
اگر این نسبت بزرگتر از 1 شود، نمی‌توان در درازمدت به رخدادها رسیدگی کرد و برخی drop می‌شوند.
</div>

<h2>روش‌های زمان‌بندی بلادرنگ</h2>

<h3>1. Rate-Monotonic (RMS - نرخ یکنواخت)</h3>
<div class="important-box">
<strong>قانون:</strong> Event با فرکانس بالاتر (Period کوتاه‌تر) اولویت بالاتری دارد.
</div>

<div class="example-box">
<h4>مثال:</h4>
<p>E1: P=100ms, C=40ms → f=10Hz</p>
<p>E2: P=50ms, C=15ms → f=20Hz</p>
<p>E2 اولویت بالاتری دارد چون فرکانس بیشتری دارد.</p>
</div>

<h3>2. Earliest Deadline First (EDF - کمترین مهلت)</h3>
<div class="important-box">
<strong>قانون:</strong> به Event که deadline کوتاه‌تری دارد زودتر رسیدگی می‌شود.
<br><br>
<strong>Deadline:</strong> فاصله بین درخواست یک Event تا آمدن Event بعدی
</div>

<h3>3. Least Deadline First (LDF - کمترین لختی)</h3>
<p>در سیستم عامل IOS سوییچ‌ها استفاده می‌شود.</p>

<div class="formula-box">
L = D - C
<br><br>
L: لختی (Laxity)
<br>
D: مهلت (Deadline)
<br>
C: زمان پردازش
</div>

<div class="important-box">
به رخدادهایی که لختی کمتری دارند زودتر سرویس‌دهی می‌شود.
</div>

<div class="example-box">
<h4>مثال محاسبه:</h4>
<table>
<tr><th>رخداد</th><th>C</th><th>P</th><th>Check</th></tr>
<tr><td>E1</td><td>40ms</td><td>100ms</td><td>40/100 = 0.4</td></tr>
<tr><td>E2</td><td>25ms</td><td>50ms</td><td>25/50 = 0.5</td></tr>
<tr><td>E3</td><td>10ms</td><td>50ms</td><td>10/50 = 0.2</td></tr>
</table>
<p>جمع = 0.4 + 0.5 + 0.2 = 1.1 > 1 ← نمی‌توان زمان‌بندی کرد!</p>
</div>
    `
  },
  {
    id: 7,
    title: "نخ‌ها (Threads)",
    icon: "GitBranch",
    description: "KLT، ULT و مزایای Multi-Thread",
    duration: "20 دقیقه",
    content: `
<h2>Thread یا Light Weight Process</h2>
<p>الگوریتم‌ها می‌توانند به دو شکل باشند:</p>
<ul>
<li><strong>سریال:</strong> مراحل به ترتیب اجرا می‌شوند</li>
<li><strong>موازی:</strong> بخش‌هایی می‌توانند همزمان اجرا شوند</li>
</ul>

<div class="example-box">
<h4>مثال الگوریتم موازی:</h4>
<ul>
<li><strong>ضرب ماتریس:</strong> ضرب هر سطر در هر ستون مستقل است</li>
<li><strong>Merge Sort:</strong> تقسیم به n بخش و مرتب‌سازی مستقل</li>
</ul>
</div>

<h3>کتابخانه‌های Thread</h3>
<table>
<tr><th>سیستم عامل</th><th>کتابخانه</th></tr>
<tr><td>Windows</td><td>Win32 API</td></tr>
<tr><td>UNIX</td><td>POSIX</td></tr>
<tr><td>Java</td><td>JAVA THREAD</td></tr>
</table>

<p>تابع Thread Create دارای 5 ورودی است از جمله خط شروع و آدرس داده‌ها.</p>

<h2>مزایای سیستم عامل Multi-Thread</h2>

<h4>1. اجرای مستقل بخش‌ها</h4>
<p>بخش‌های مستقل برنامه به صورت مستقل اجرا شده و به هر Thread منابع جداگانه اختصاص می‌یابد.</p>

<h4>2. Block شدن جزئی</h4>
<p>اگر یکی از Threadها درخواست I/O کند، فقط آن Thread بلاک می‌شود و بقیه کار می‌کنند.</p>

<h4>3. کاهش Context Switching</h4>
<p>حجم اطلاعات در یک Thread از یک Process کمتر است. مثلاً local variable و stack خصوصی است ولی در کلیات نیاز به Context Switching کامل نیست.</p>

<h2>انواع Thread</h2>

<h3>KLT (Kernel Level Thread)</h3>
<ul>
<li>مربوط به خود سیستم عامل</li>
<li>سیستم عامل آنها را می‌شناسد و مدیریت می‌کند</li>
<li>مزایای کامل Multi-Threading</li>
</ul>

<h3>ULT (User Level Thread)</h3>
<ul>
<li>سیستم عامل آنها را نمی‌شناسد</li>
<li>توسط ابزار برنامه‌نویسی شبیه‌سازی می‌شود</li>
<li>نسبت به حالت عادی سریع‌تر است</li>
<li>مزایای کامل را ندارد</li>
</ul>

<h2>مقایسه سیستم عامل‌ها</h2>
<table>
<tr><th>سیستم عامل</th><th>Process</th><th>Thread</th><th>نوع</th></tr>
<tr><td>UNIX</td><td>1</td><td>1</td><td>Single Thread</td></tr>
<tr><td>OS/2, Solaris, Windows</td><td>1</td><td>n</td><td>Multi Thread</td></tr>
<tr><td>Clouds/Emerald</td><td>m</td><td>1</td><td>Thread Immigration</td></tr>
<tr><td>TRIX</td><td>m</td><td>n</td><td>Hybrid</td></tr>
</table>

<h3>Thread Immigration</h3>
<p>حالت مهاجرت Thread: کدی که به صورت مشترک مورد استفاده چند فرآیند است، یک بار load شده و به صورت مشترک استفاده می‌شود.</p>
    `
  },
  {
    id: 8,
    title: "همگام‌سازی فرآیندها",
    icon: "Lock",
    description: "Critical Section، الگوریتم‌های Dekker، Peterson و Lamport",
    duration: "40 دقیقه",
    content: `
<h2>مسئله همگام‌سازی</h2>
<p>اگر چند فرآیند بخواهند در یک ناحیه مشترک (حافظه، دیسک و...) عملیات انجام دهند:</p>
<ul>
<li><strong>Preemptive:</strong> مشکلی پیش نمی‌آید</li>
<li><strong>Non-Preemptive:</strong> ممکن است در عمل درج مشکل پیش آید</li>
</ul>

<div class="example-box">
<h4>مثال مشکل:</h4>
<pre><code>MOV AX, top    ; خواندن top
INC            ; افزایش
MOV top, AX    ; ذخیره</code></pre>
<p>اگر Time Slice قبل از آپدیت top تمام شود، فرآیند بعدی در همان خانه می‌نویسد!</p>
</div>

<h3>ناحیه بحرانی (Critical Section)</h3>
<p>بخشی از کد که در همه جا تکرار می‌شود و احتمال بروز خطا و ناسازگاری در آن بالاست.</p>

<h2>قوانین همگام‌سازی</h2>

<h3>1. انحصار متقابل (Mutual Exclusion)</h3>
<p>اگر فرآیندی در حال اجرای ناحیه بحرانی بود، آن قسمت به صورت انحصاری اجرا شود:</p>
<ul>
<li>یا CPU تا پایان به آن اختصاص یابد</li>
<li>یا فرآیند دیگر نتواند به ناحیه بحرانی وارد شود</li>
</ul>

<h3>2. پیشرفت (Progress)</h3>
<p>اگر هیچ فرآیندی در ناحیه بحرانی نبود، چیزی مانع ورود نشود.</p>

<h3>3. انتظار محدود (Bounded Waiting)</h3>
<p>تعداد فرآیندهای همگام باید محدود باشد تا مشکل گرسنگی پیش نیاید.</p>

<h2>روش‌های نرم‌افزاری</h2>

<h3>الگوریتم Dekker (نسخه 1)</h3>
<pre><code>int P# = 1;
void P1(){
  while(true){
    ...
    while(P# == 2);  // Busy Waiting
    C.S.
    P# = 2;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مشکلات:</strong>
<ul>
<li>Busy Waiting بالا</li>
<li>عدم رعایت Progress در برخی موارد</li>
</ul>
</div>

<h3>الگوریتم Dekker (نسخه 2 - با Flag)</h3>
<pre><code>unsigned char flag1 = false;
unsigned char flag2 = false;
void P1(){
  while(true){
    ...
    while(flag2);
    flag1 = true;
    C.S.
    flag1 = false;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مشکل:</strong> ممکن است هر دو همزمان وارد ناحیه بحرانی شوند (اگر کوانتوم بین خط 7 و 8 تمام شود).
</div>

<h3>الگوریتم Dekker (نسخه 3)</h3>
<pre><code>void P1(){
  while(true){
    ...
    flag1 = true;
    while(flag2);
    C.S.
    flag1 = false;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مشکل:</strong> امکان Deadlock اگر Time Slice بین خط 6 و 7 تمام شود.
</div>

<h3>الگوریتم Peterson</h3>
<pre><code>int TURN;
unsigned char flag1 = false;
unsigned char flag2 = false;

void P1(){
  while(true){
    ...
    flag1 = true;
    TURN = 2;
    while(flag2 && TURN == 2);
    C.S.
    flag1 = false;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مزیت:</strong> Deadlock بوجود نمی‌آید حتی اگر Time Slice بین خطوط مختلف تمام شود، چون TURN تغییر می‌کند.
</div>

<h3>الگوریتم Lamport (Bakery)</h3>
<pre><code>#define N 10;
unsigned char flag[N];
int number[N];

void P(int i){
  int j;
  while(true){
    ...
    for(j=0; j<N; j++)
      while(flag[j]);    // منتظر نوبت‌گیری بقیه
    flag[i] = true;
    number[i] = getmax(number[], N-1)+1;  // نوبت گرفتن
    flag[i] = false;
    for(j=0; j<N; j++)
      while(number[j] != 0 && number[j] < number[i]);
    C.S.
    number[i] = 0;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>در تمام روش‌های نرم‌افزاری Busy Waiting داریم!</strong>
</div>
    `
  },
  {
    id: 9,
    title: "روش‌های سخت‌افزاری همگام‌سازی",
    icon: "Cpu",
    description: "Test & Set و SWAP",
    duration: "15 دقیقه",
    content: `
<h2>روش‌های سخت‌افزاری</h2>
<p>دستورالعمل‌های خاص در Protected Mode پردازنده</p>

<h3>1. Test & Set (TS)</h3>
<div class="formula-box">
TS a, b
<br>
a ← b
<br>
b ← 1
</div>

<pre><code>unsigned char ACTIVE = false;

void P1(){
  unsigned char key;
  while(true){
    ...
    key = true;
    while(key)
      TS(key, ACTIVE);  // key=ACTIVE, ACTIVE=1
    C.S.
    ACTIVE = false;
    ...
  }
}</code></pre>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>در اولین اجرا key=true، وارد حلقه می‌شود</li>
<li>key مقدار ACTIVE (false) را می‌گیرد</li>
<li>شرط برقرار نیست، وارد C.S. می‌شود</li>
<li>اگر کوانتوم وسط C.S. تمام شود، ACTIVE=1 است</li>
<li>P2 در حلقه می‌ماند تا کوانتوم تمام شود</li>
</ol>
</div>

<h3>2. SWAP (Exchange)</h3>
<div class="formula-box">
EXX a, b
<br>
a ↔ b
</div>

<pre><code>unsigned char lock = false;

void P1(){
  unsigned char key = false;
  while(true){
    ...
    key = true;
    while(key)
      EXX(key, lock);  // swap key and lock
    C.S.
    EXX(key, lock);
    ...
  }
}</code></pre>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>در ابتدا lock=false, key=true</li>
<li>بعد از EXX: lock=true, key=false</li>
<li>شرط برقرار نیست، وارد C.S. می‌شود</li>
<li>اگر کوانتوم تمام شود، lock=true است</li>
<li>P2 اجازه ورود ندارد</li>
</ol>
</div>

<div class="important-box">
<strong>مزیت:</strong> Busy Waiting وجود دارد اما زمان‌های کوتاه‌تری صرف می‌شود.
<br><br>
<strong>در روش‌های بهتر:</strong> به جای Busy Waiting، CPU از فرآیند گرفته می‌شود تا بتواند به ناحیه بحرانی وارد شود.
</div>
    `
  },
  {
    id: 10,
    title: "متغیرهای راهنما (Semaphore)",
    icon: "Gauge",
    description: "ساختار، عملیات Wait و Signal",
    duration: "30 دقیقه",
    content: `
<h2>Semaphore Variables</h2>
<p>نوعی تایپ در پردازنده با ساختار و عملیات مشخص</p>

<h3>ساختار Semaphore</h3>
<pre><code>typedef struct {
  int value;
  process *queue;
} Semaphore;

Semaphore S;</code></pre>

<h3>عملیات Wait</h3>
<pre><code>void wait(Semaphore S){
  --S.value;
  if(S.value < 0){
    insert the process into S.queue;
    block the process;
  }
}</code></pre>

<h3>عملیات Signal</h3>
<pre><code>void signal(Semaphore S){
  ++S.value;
  if(S.value <= 0){
    delete a process from S.queue;
    wakeup the process;
  }
}</code></pre>

<h2>استفاده برای انحصار متقابل</h2>
<pre><code>Semaphore mutex = 1;

void P1(){
  while(true){
    ...
    wait(mutex);
    C.S.
    signal(mutex);
    ...
  }
}</code></pre>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>در ابتدا صف خالی و mutex=1</li>
<li>P1 اجرا: wait اجرا شده، mutex=0، شرط برقرار نیست → وارد C.S.</li>
<li>اگر کوانتوم تمام شود و P2 اجرا شود:</li>
<li>wait اجرا: mutex=-1, شرط برقرار → P2 به صف اضافه و Block</li>
<li>وقتی P1 برگردد: signal اجرا → mutex=0 → P2 از صف خارج و wakeup</li>
</ol>
</div>

<div class="important-box">
<strong>مزیت اصلی:</strong> فرآیندی که شرایط ورود را ندارد، به جای Busy Waiting به حالت Block می‌رود!
</div>

<h2>مثال: Producer-Consumer با بافر محدود</h2>
<pre><code>#define Buff_Size = 100;
Semaphore mutex = 1;
Semaphore full = 0;       // تعداد خانه‌های پر
Semaphore empty = Buff_Size;  // تعداد خانه‌های خالی

void producer(){
  while(true){
    ...
    produce();
    wait(empty);    // صبر تا جای خالی باشد
    wait(mutex);    // ورود انحصاری
    insert();
    signal(mutex);
    signal(full);   // یک خانه پر شد
    ...
  }
}

void consumer(){
  while(true){
    ...
    wait(full);     // صبر تا داده باشد
    wait(mutex);
    delete();
    signal(mutex);
    signal(empty);  // یک خانه خالی شد
    consumer();
    ...
  }
}</code></pre>

<div class="important-box">
<strong>در بافر نامحدود:</strong> empty لازم نیست و خطوط مربوط به آن حذف می‌شوند.
</div>

<h2>مثال: Jurassic Park</h2>
<p>پارک با n ماشین تک‌نفره و m مسافر:</p>

<pre><code>#define m 20;
#define n 15;
Semaphore mutex = 1;
Semaphore passenger = m;
Semaphore cars = n;

void catch_off(){  // پیاده شدن
  while(true){
    ...
    wait(mutex);
    catch_off();
    signal(mutex);
    signal(cars);   // ماشین آزاد شد
    ...
  }
}

void catch_on(){   // سوار شدن
  while(true){
    ...
    wait(passenger);  // مسافر هست؟
    wait(cars);       // ماشین هست؟
    wait(mutex);
    catch_on();
    signal(mutex);
    ...
  }
}

void passenger_entrance(){
  while(true)
    signal(passenger);  // مسافر وارد شد
}</code></pre>
    `
  },
  {
    id: 11,
    title: "انتقال پیام (Message Passing)",
    icon: "MessageSquare",
    description: "Blocking، Non-Blocking و Addressing",
    duration: "25 دقیقه",
    content: `
<h2>Message Passing</h2>
<p>قابلیتی که فرآیندها بتوانند بر اساس یک استاندارد پیام رد و بدل کنند.</p>

<h3>دستورات اصلی</h3>
<div class="formula-box">
Send(Destination Add, Message)
<br>
Receive(Destination Add, Message)
</div>

<h2>انواع Send و Receive</h2>

<h3>Blocking Send</h3>
<p>فرآیند منتظر پاسخ می‌ماند و تا دریافت پاسخ در حالت Block است.</p>

<h3>Blocking Receive</h3>
<p>اگر پیامی نباشد، فرآیند Block می‌شود تا پیامی برسد.</p>

<h3>Non-Blocking Send</h3>
<p>پیام ارسال شده و فرآیند منتظر پاسخ نمی‌ماند.</p>

<h3>Non-Blocking Receive</h3>
<p>اگر پیام بود پردازش می‌شود، اگر نبود به فرآیند بعدی می‌رود.</p>

<h2>ترکیب‌های متداول</h2>

<h4>a. Blocking Send - Blocking Receive</h4>
<p>برای فرستنده پاسخ الزامی و گیرنده باید به پیام‌ها رسیدگی کند.</p>

<h4>b. Non-Blocking Send - Blocking Receive</h4>
<p>مثال: Browser (Non-Blocking Send) و Web Server مثل Apache (Blocking Receive)</p>

<h4>c. Non-Blocking Send - Non-Blocking Receive</h4>
<p>فرستنده منتظر نیست، گیرنده هم فقط پیام‌های موجود را پردازش می‌کند.</p>

<h2>Addressing</h2>

<h3>Direct (مستقیم)</h3>
<div class="formula-box">
Host_id : Process_id
</div>
<p>مشکل: با restart شدن سیستم، Process ID تغییر می‌کند.</p>

<h3>In-Direct (غیرمستقیم)</h3>
<p>استفاده از Port:</p>
<ul>
<li>Port یک آدرس منطقی در لایه 4 است</li>
<li>مقدار: 0 تا 65535</li>
<li>Port Map Table: مشخص می‌کند هر Port به کدام آدرس حافظه متصل است</li>
</ul>

<table>
<tr><th>سرویس</th><th>Port</th></tr>
<tr><td>HTTP</td><td>80</td></tr>
<tr><td>HTTPS</td><td>443</td></tr>
<tr><td>FTP</td><td>20, 21</td></tr>
<tr><td>SSH</td><td>22</td></tr>
<tr><td>Telnet</td><td>23</td></tr>
<tr><td>SMTP</td><td>25</td></tr>
<tr><td>POP3</td><td>110</td></tr>
</table>

<h2>Message Format</h2>
<ul>
<li><strong>Header:</strong> نوع پیام (Request, Reply, Acknowledge, Confirm, Test to Active, Null)</li>
<li>اولویت، طول پیام، آدرس مقصد، توالی ترتیب</li>
<li><strong>Body:</strong> محتوای پیام</li>
</ul>

<h2>Queuing Discipline</h2>
<p>نحوه تحویل پیام‌ها معمولاً FIFO است.</p>

<h2>استفاده برای انحصار متقابل</h2>
<pre><code>mailbox mutex;

void main(){
  createmailbox(mutex);
  send(mutex, Null);  // Token
}

void P1(){
  message msg;
  while(true){
    ...
    receive(mutex, msg);  // گرفتن Token
    C.S.
    send(mutex, msg);     // برگرداندن Token
    ...
  }
}</code></pre>
    `
  },
  {
    id: 12,
    title: "بن‌بست (Deadlock)",
    icon: "AlertTriangle",
    description: "شرایط وقوع، جلوگیری، اجتناب و تشخیص",
    duration: "40 دقیقه",
    content: `
<h2>بن‌بست (Deadlock)</h2>
<p>وقتی فرآیندها منابعی را درخواست می‌کنند که به هیچ وجه به آنها داده نشود (زمان انتظار بی‌نهایت).</p>

<div class="example-box">
<h4>سناریو:</h4>
<ul>
<li>R1 در اختیار P1</li>
<li>R2 در اختیار P2</li>
<li>P1 درخواست R2 → Block (بدون آزاد کردن R1)</li>
<li>P2 درخواست R1 → Block (بدون آزاد کردن R2)</li>
<li>هر دو برای همیشه منتظر می‌مانند!</li>
</ul>
</div>

<h2>شرایط وقوع Deadlock</h2>

<h3>1. Mutual Exclusion (انحصار متقابل)</h3>
<p>Resource به صورت انحصاری در اختیار فرآیند قرار گیرد.</p>

<h3>2. Preemption (زمان‌بندی انحصاری)</h3>
<p>روش زمان‌بندی Preemptive باشد.</p>

<h3>3. Hold & Wait (نگه‌داشتن و درخواست)</h3>
<p>فرآیند Resource را نگه دارد و در حالت Wait برود.</p>

<h3>4. Circular Wait (انتظار چرخشی)</h3>
<p>فرآیندها منابعی که در اختیار یکدیگر است را درخواست کنند.</p>

<h2>روش‌های مقابله با Deadlock</h2>

<h3>1. Deadlock Prevention (جلوگیری)</h3>
<p>نقض شرایط وقوع:</p>

<h4>نقض شرط 1:</h4>
<p>مستقیم امکان‌پذیر نیست. استفاده از الگوریتم‌های بدون بن‌بست (Peterson به جای Dekker)</p>

<h4>نقض شرط 2:</h4>
<p>استفاده از روش‌های Non-Preemptive</p>

<h4>نقض شرط 3:</h4>
<p>در ابتدا همه منابع مورد نیاز اختصاص یابد. مشکل: استفاده نابهینه از منابع</p>

<h4>نقض شرط 4:</h4>
<p>به منابع شماره ترتیبی داده شود. فقط می‌توان منبع با شماره بزرگتر از منابع در اختیار را درخواست کرد.</p>

<div class="important-box">
<strong>مشکل Prevention:</strong> هزینه بالا
</div>

<h3>2. Deadlock Avoidance (اجتناب)</h3>
<p>برنامه‌ها منابع مورد نیاز را اعلام می‌کنند ولی از اول اختصاص نمی‌یابد.</p>

<h4>ماتریس‌های System State:</h4>
<ul>
<li><strong>Resources:</strong> منابع موجود (R1, R2, ..., Rm)</li>
<li><strong>Available:</strong> منابع در دسترس (V1, V2, ..., Vm)</li>
<li><strong>Allocated:</strong> منابع تخصیص‌یافته به فرآیندها (Aij)</li>
<li><strong>Claim:</strong> نیازهای اعلام‌شده فرآیندها (Cij)</li>
</ul>

<h4>الگوریتم بانکداران (Banker's Algorithm)</h4>

<h5>Process Initiation Denial:</h5>
<div class="formula-box">
R(i) = V(i) + Σ A(k,i)  [منابع = در دسترس + تخصیص‌یافته]
<br>
A(k,i) ≤ C(k,i)  [درخواست ≤ اعلام‌شده]
<br>
C(k,i) ≤ R(i)  [اعلام‌شده ≤ کل منابع]
<br>
R(i) ≥ C(n+1,i) + Σ C(k,i)  [برای ایجاد فرآیند جدید]
</div>

<h5>Resource Allocation Denial - Safety Test:</h5>
<p><strong>وضعیت امن (Safe):</strong> همه فرآیندها بعد از مدتی معین خاتمه یابند.</p>

<div class="formula-box">
V(i) ≥ C(k,i) - A(k,i) ∀i,k
</div>

<p>اگر برای همه فرآیندها این شرط برقرار بود → Safe</p>
<p>اگر حداقل یکی برقرار نبود → ممکن است Unsafe باشد (بررسی با آزاد شدن منابع)</p>

<h3>3. Deadlock Detection/Recovery (تشخیص)</h3>
<p>هیچ محدودیتی اعمال نمی‌شود، فقط شناسایی و رفع می‌شود.</p>

<h4>روش 1 - ماتریس Request:</h4>
<div class="formula-box">
V(i) ≥ Q(i,k) - A(i,k) ∀i,k
</div>
<p>اگر حداقل دو فرآیند این شرط را نداشته باشند → Deadlock</p>

<h4>روش 2 - گراف جهت‌دار:</h4>
<ul>
<li>گره‌ها: Process و Resource</li>
<li>فلش از Process به Resource: درخواست</li>
<li>فلش از Resource به Process: تخصیص</li>
</ul>

<div class="important-box">
<strong>تشخیص:</strong> اگر مسیر بسته (چرخه) وجود داشته باشد و Resourceای به فرآیند خارج از مسیر که Block نشده اختصاص نداشته باشد → Deadlock
</div>
    `
  }
];

export const quizQuestions = [
  // Lesson 1 Questions
  {
    lessonId: 1,
    question: "کدام گزینه جزو نرم‌افزارهای سیستمی نیست؟",
    options: ["Compiler", "DBMS", "Word Processor", "Operating System"],
    correctIndex: 2,
    explanation: "Word Processor یک نرم‌افزار کاربردی (Application) است نه سیستمی."
  },
  {
    lessonId: 1,
    question: "تعریف صحیح سیستم عامل کدام است؟",
    options: [
      "نرم‌افزاری برای اجرای برنامه‌ها",
      "نرم‌افزاری سیستمی که وظیفه مدیریت منابع را برعهده دارد",
      "نرم‌افزاری برای ذخیره فایل‌ها",
      "نرم‌افزاری برای ارتباط با اینترنت"
    ],
    correctIndex: 1,
    explanation: "سیستم عامل نرم‌افزاری سیستمی است که وظیفه مدیریت منابع (سخت‌افزاری و نرم‌افزاری) را برعهده دارد."
  },
  {
    lessonId: 1,
    question: "PMDI مخفف چیست؟",
    options: [
      "Process Memory Device Information",
      "Process Memory Device Input",
      "چهار لایه مدیریت: Process, Memory, Device, Information",
      "Primary Memory Data Interface"
    ],
    correctIndex: 2,
    explanation: "PMDI به چهار لایه مدیریت منابع اشاره دارد: Process Management, Memory Management, Device Management, Information Management"
  },
  {
    lessonId: 1,
    question: "تفاوت Protection و Security در چیست؟",
    options: [
      "هر دو یکی هستند",
      "Protection مربوط به رمزگذاری و Security مربوط به دسترسی است",
      "Protection مربوط به جلوگیری از دسترسی و Security مربوط به رمزگذاری است",
      "Protection فقط برای فایل‌ها و Security برای شبکه است"
    ],
    correctIndex: 2,
    explanation: "Protection: جلوگیری از دسترسی غیرمجاز. Security: رمزگذاری محتوا حتی در صورت دسترسی."
  },
  // Lesson 2 Questions
  {
    lessonId: 2,
    question: "در روش Polling، مشکل اصلی چیست؟",
    options: [
      "مصرف زیاد حافظه",
      "CPU در طول عملیات I/O بیکار می‌ماند",
      "نیاز به سخت‌افزار خاص",
      "عدم پشتیبانی از چندین دستگاه"
    ],
    correctIndex: 1,
    explanation: "در Polling، CPU به صورت مداوم وضعیت I/O را بررسی می‌کند و در این مدت کار دیگری انجام نمی‌دهد."
  },
  {
    lessonId: 2,
    question: "BUS Cycle Stealing به چه معناست؟",
    options: [
      "دزدیدن داده از BUS",
      "گرفتن کنترل BUS از CPU توسط DMA",
      "از کار افتادن BUS",
      "تقسیم BUS بین چند دستگاه"
    ],
    correctIndex: 1,
    explanation: "BUS Cycle Stealing یا ربودن چرخه گذرگاه، عمل گرفتن کنترل BUS از CPU توسط DMA Controller است."
  },
  {
    lessonId: 2,
    question: "DMA چه زمانی وقفه به CPU می‌فرستد؟",
    options: [
      "هر بار که بافر پر شود",
      "فقط در پایان عملیات I/O",
      "هر ثانیه یکبار",
      "هرگز"
    ],
    correctIndex: 1,
    explanation: "DMA فقط در پایان عملیات I/O (با صفر شدن Counter) وقفه به CPU می‌فرستد."
  },
  // Lesson 3 Questions
  {
    lessonId: 3,
    question: "وقفه Program Interrupt توسط چه چیزی تولید می‌شود؟",
    options: ["DMA", "ALU پردازنده", "RTC", "I/O Device"],
    correctIndex: 1,
    explanation: "وقفه‌های برنامه‌ای توسط ALU پردازنده تولید شده و به Control Unit ارسال می‌شوند."
  },
  {
    lessonId: 3,
    question: "PSW مخفف چیست؟",
    options: [
      "Process Status Word",
      "Program Status Word",
      "Processor Status Word",
      "Primary Status Word"
    ],
    correctIndex: 1,
    explanation: "PSW یا Program Status Word شامل فلگ‌ها و اطلاعات وضعیت پردازنده است."
  },
  // Lesson 4 Questions
  {
    lessonId: 4,
    question: "کدام وضعیت نشان می‌دهد که فرآیند منتظر CPU است؟",
    options: ["Running", "Ready", "Blocked", "Terminated"],
    correctIndex: 1,
    explanation: "Ready یعنی برنامه حافظه در اختیار دارد و آماده اجرا است و منتظر دریافت CPU است."
  },
  {
    lessonId: 4,
    question: "Context Switching چیست؟",
    options: [
      "تغییر سیستم عامل",
      "جایگزینی Context برنامه‌ها",
      "تغییر حافظه",
      "تغییر CPU"
    ],
    correctIndex: 1,
    explanation: "Context Switching به جایگزینی Context (وضعیت رجیسترها و...) برنامه‌ها گفته می‌شود."
  },
  {
    lessonId: 4,
    question: "Time Slice یا Quantum چیست؟",
    options: [
      "زمان کل اجرای برنامه",
      "بازه زمانی اختصاص‌یافته از CPU به فرآیند",
      "زمان انتظار در صف",
      "زمان I/O"
    ],
    correctIndex: 1,
    explanation: "Time Slice یا Quantum بازه زمانی است که از CPU به یک فرآیند اختصاص داده می‌شود."
  },
  // Lesson 5 Questions
  {
    lessonId: 5,
    question: "در کدام الگوریتم، CPU تا اتمام برنامه در اختیار آن می‌ماند؟",
    options: ["Round Robin", "FIFO", "SRTF", "Feedback"],
    correctIndex: 1,
    explanation: "FIFO یک روش Preemptive است که CPU تا اتمام برنامه در اختیار آن می‌ماند."
  },
  {
    lessonId: 5,
    question: "در الگوریتم SJF، اولویت بر چه اساسی تعیین می‌شود؟",
    options: [
      "ترتیب ورود",
      "زمان CPU کمتر → اولویت بالاتر",
      "زمان CPU بیشتر → اولویت بالاتر",
      "تصادفی"
    ],
    correctIndex: 1,
    explanation: "در SJF، هرچه زمان استفاده از CPU کمتر باشد، اولویت بالاتر است (P = 1/S)."
  },
  {
    lessonId: 5,
    question: "مکانیزم AGING برای چه استفاده می‌شود؟",
    options: [
      "افزایش سرعت",
      "جلوگیری از Starvation",
      "کاهش مصرف حافظه",
      "بهبود I/O"
    ],
    correctIndex: 1,
    explanation: "AGING برای جلوگیری از گرسنگی (Starvation) استفاده می‌شود. فرآیندهایی که بیشتر منتظر مانده‌اند، اولویت بیشتری می‌گیرند."
  },
  {
    lessonId: 5,
    question: "فرمول Response Time چیست؟",
    options: [
      "Response Time = Service Time",
      "Response Time = Wait Time - Service Time",
      "Response Time = Wait Time + Service Time",
      "Response Time = Wait Time × Service Time"
    ],
    correctIndex: 2,
    explanation: "Response Time = Wait Time + Service Time"
  },
  // Lesson 6 Questions
  {
    lessonId: 6,
    question: "در الگوریتم Rate-Monotonic، اولویت بر چه اساسی است؟",
    options: [
      "زمان پردازش بیشتر → اولویت بالاتر",
      "دوره تناوب کوتاه‌تر (فرکانس بالاتر) → اولویت بالاتر",
      "دوره تناوب بلندتر → اولویت بالاتر",
      "تصادفی"
    ],
    correctIndex: 1,
    explanation: "در RMS، Event با فرکانس بالاتر (Period کوتاه‌تر) اولویت بالاتری دارد."
  },
  {
    lessonId: 6,
    question: "شرط امکان زمان‌بندی رخدادهای بلادرنگ چیست؟",
    options: [
      "Σ(C/P) > 1",
      "Σ(C/P) ≤ 1",
      "Σ(C/P) = 0",
      "Σ(P/C) ≤ 1"
    ],
    correctIndex: 1,
    explanation: "اگر Σ(C/P) ≤ 1 باشد، می‌توان رخدادها را زمان‌بندی کرد."
  },
  // Lesson 7 Questions
  {
    lessonId: 7,
    question: "تفاوت KLT و ULT در چیست؟",
    options: [
      "KLT سریع‌تر است",
      "KLT توسط سیستم عامل مدیریت می‌شود، ULT توسط برنامه کاربر",
      "ULT توسط سیستم عامل مدیریت می‌شود، KLT توسط برنامه کاربر",
      "هیچ تفاوتی ندارند"
    ],
    correctIndex: 1,
    explanation: "KLT (Kernel Level Thread) توسط سیستم عامل مدیریت می‌شود و مزایای کامل دارد. ULT (User Level Thread) توسط برنامه شبیه‌سازی می‌شود."
  },
  {
    lessonId: 7,
    question: "کدام مورد از مزایای Multi-Threading نیست؟",
    options: [
      "کاهش Context Switching",
      "Block شدن جزئی",
      "افزایش مصرف حافظه",
      "اجرای موازی"
    ],
    correctIndex: 2,
    explanation: "Multi-Threading باعث کاهش Context Switching، امکان Block شدن جزئی و اجرای موازی می‌شود. افزایش مصرف حافظه مزیت نیست."
  },
  // Lesson 8 Questions
  {
    lessonId: 8,
    question: "کدام مورد از قوانین همگام‌سازی نیست؟",
    options: [
      "Mutual Exclusion",
      "Progress",
      "Bounded Waiting",
      "Maximum Throughput"
    ],
    correctIndex: 3,
    explanation: "سه قانون همگام‌سازی: Mutual Exclusion، Progress، Bounded Waiting"
  },
  {
    lessonId: 8,
    question: "مشکل اصلی الگوریتم Dekker چیست؟",
    options: [
      "عدم پشتیبانی از چند فرآیند",
      "Busy Waiting بالا",
      "نیاز به سخت‌افزار خاص",
      "عدم رعایت Mutual Exclusion"
    ],
    correctIndex: 1,
    explanation: "در تمام روش‌های نرم‌افزاری (از جمله Dekker) مشکل Busy Waiting وجود دارد."
  },
  {
    lessonId: 8,
    question: "الگوریتم Peterson نسبت به Dekker چه مزیتی دارد؟",
    options: [
      "سریع‌تر است",
      "Deadlock بوجود نمی‌آید",
      "نیاز به حافظه کمتری دارد",
      "Busy Waiting ندارد"
    ],
    correctIndex: 1,
    explanation: "در الگوریتم Peterson با استفاده از متغیر TURN، حتی اگر Time Slice بین خطوط مختلف تمام شود، Deadlock بوجود نمی‌آید."
  },
  // Lesson 9 Questions
  {
    lessonId: 9,
    question: "دستور TS(a,b) چه عملی انجام می‌دهد؟",
    options: [
      "a و b را جمع می‌کند",
      "a ← b و b ← 1",
      "a ↔ b",
      "a ← b + 1"
    ],
    correctIndex: 1,
    explanation: "TS (Test & Set): a ← b و b ← 1"
  },
  {
    lessonId: 9,
    question: "مزیت روش‌های سخت‌افزاری نسبت به نرم‌افزاری چیست؟",
    options: [
      "Busy Waiting ندارند",
      "زمان Busy Waiting کوتاه‌تر است",
      "نیاز به CPU ندارند",
      "پیاده‌سازی ساده‌تری دارند"
    ],
    correctIndex: 1,
    explanation: "در روش‌های سخت‌افزاری هنوز Busy Waiting وجود دارد اما زمان‌های کوتاه‌تری صرف می‌شود."
  },
  // Lesson 10 Questions
  {
    lessonId: 10,
    question: "مزیت اصلی Semaphore نسبت به روش‌های قبلی چیست؟",
    options: [
      "سرعت بیشتر",
      "به جای Busy Waiting، فرآیند Block می‌شود",
      "نیاز به سخت‌افزار خاص ندارد",
      "پیاده‌سازی ساده‌تر"
    ],
    correctIndex: 1,
    explanation: "در Semaphore، فرآیندی که شرایط ورود را ندارد به جای Busy Waiting به حالت Block می‌رود و CPU آزاد می‌شود."
  },
  {
    lessonId: 10,
    question: "در مسئله Producer-Consumer، Semaphore full چه چیزی را نشان می‌دهد؟",
    options: [
      "تعداد خانه‌های خالی",
      "تعداد خانه‌های پر",
      "تعداد تولیدکننده‌ها",
      "تعداد مصرف‌کننده‌ها"
    ],
    correctIndex: 1,
    explanation: "full تعداد خانه‌های پر بافر را نشان می‌دهد. مصرف‌کننده wait(full) می‌کند تا داده‌ای برای مصرف وجود داشته باشد."
  },
  // Lesson 11 Questions
  {
    lessonId: 11,
    question: "در Blocking Send چه اتفاقی می‌افتد؟",
    options: [
      "پیام ارسال شده و فرآیند ادامه می‌یابد",
      "پیام ارسال شده و فرآیند منتظر پاسخ می‌ماند",
      "پیام در صف قرار می‌گیرد",
      "پیام حذف می‌شود"
    ],
    correctIndex: 1,
    explanation: "در Blocking Send، فرآیند منتظر پاسخ می‌ماند و تا دریافت پاسخ در حالت Block است."
  },
  {
    lessonId: 11,
    question: "Port در شبکه چه کاربردی دارد؟",
    options: [
      "آدرس‌دهی فیزیکی",
      "مشخص کردن اینکه بسته به کدام فرآیند برسد",
      "رمزگذاری داده‌ها",
      "فشرده‌سازی داده‌ها"
    ],
    correctIndex: 1,
    explanation: "Port یک آدرس منطقی است که مشخص می‌کند بسته‌ها به کدام فرآیند در سیستم عامل مقصد تحویل داده شوند."
  },
  // Lesson 12 Questions
  {
    lessonId: 12,
    question: "کدام مورد از شرایط وقوع Deadlock نیست؟",
    options: [
      "Mutual Exclusion",
      "Hold & Wait",
      "Circular Wait",
      "Time Sharing"
    ],
    correctIndex: 3,
    explanation: "چهار شرط وقوع Deadlock: Mutual Exclusion، Preemption، Hold & Wait، Circular Wait"
  },
  {
    lessonId: 12,
    question: "در الگوریتم بانکداران، وضعیت Safe به چه معناست؟",
    options: [
      "هیچ فرآیندی در صف نیست",
      "همه فرآیندها بعد از مدتی معین خاتمه می‌یابند",
      "همه منابع آزاد هستند",
      "هیچ درخواستی وجود ندارد"
    ],
    correctIndex: 1,
    explanation: "وضعیت Safe وضعیتی است که همه فرآیندها بعد از مدتی معین خاتمه یابند (هیچ Resource در حالت Wait نماند)."
  },
  {
    lessonId: 12,
    question: "در روش Deadlock Prevention، برای نقض شرط Hold & Wait چه می‌کنیم؟",
    options: [
      "از روش Non-Preemptive استفاده می‌کنیم",
      "در ابتدا همه منابع مورد نیاز را اختصاص می‌دهیم",
      "به منابع شماره ترتیبی می‌دهیم",
      "از الگوریتم‌های بدون بن‌بست استفاده می‌کنیم"
    ],
    correctIndex: 1,
    explanation: "برای نقض Hold & Wait، در ابتدای ایجاد فرآیند همه منابع مورد نیاز اختصاص می‌یابد تا فرآیند درخواست جدیدی نداشته باشد."
  }
];

export const flashcards = [
  // Key definitions
  { front: "تعریف سیستم عامل", back: "نرم‌افزاری سیستمی که وظیفه مدیریت منابع (سخت‌افزاری و نرم‌افزاری) را برعهده دارد" },
  { front: "PMDI", back: "چهار لایه مدیریت منابع: Process, Memory, Device, Information Management" },
  { front: "Time Slice / Quantum", back: "بازه زمانی که از CPU به یک فرآیند اختصاص داده می‌شود" },
  { front: "Context Switching", back: "جایگزینی Context (وضعیت رجیسترها و...) برنامه‌ها" },
  { front: "PCB", back: "Process Control Block - جدولی در حافظه که اطلاعات کنترلی هر فرآیند را نگه می‌دارد" },
  { front: "Ready Queue", back: "صفی که فرآیندهای آماده اجرا در آن منتظر گرفتن CPU هستند" },

  // Process states
  { front: "وضعیت Ready", back: "برنامه حافظه در اختیار دارد و منتظر دریافت CPU است" },
  { front: "وضعیت Running", back: "CPU در اختیار برنامه است و دستورات اجرا می‌شوند" },
  { front: "وضعیت Blocked", back: "برنامه با I/O در تماس است و CPU ندارد" },
  { front: "وضعیت Suspended", back: "بن‌بست موقت برای برنامه ایجاد شده" },

  // I/O Methods
  { front: "Polling", back: "CPU به صورت مداوم وضعیت I/O را بررسی می‌کند - ناکارآمد" },
  { front: "Interrupt-Based I/O", back: "با پر شدن بافر، وقفه به CPU ارسال می‌شود" },
  { front: "DMA", back: "Direct Memory Access - انتقال داده بدون درگیر کردن CPU" },
  { front: "BUS Cycle Stealing", back: "گرفتن کنترل BUS از CPU توسط DMA" },

  // Interrupt types
  { front: "Program Interrupt", back: "توسط ALU تولید می‌شود (تقسیم بر صفر، سرریز)" },
  { front: "I/O Completion", back: "توسط DMA صادر می‌شود وقتی عملیات I/O تمام شد" },
  { front: "Timeout", back: "توسط RTC صادر می‌شود وقتی Time Slice تمام شد" },
  { front: "Hardware Failure", back: "مشکلات سخت‌افزاری (ولتاژ پایین، دمای بالا)" },

  // Scheduling algorithms
  { front: "FIFO", back: "اولین فرآیند وارد شده، اول سرویس می‌گیرد - Preemptive" },
  { front: "Round Robin", back: "مثل FIFO با Time Slice ثابت - Non-Preemptive" },
  { front: "SJF", back: "کوتاه‌ترین Job اول - بر اساس زمان CPU اعلام شده" },
  { front: "SRTF", back: "کوتاه‌ترین زمان باقیمانده اول - زمان توسط OS تخمین زده می‌شود" },
  { front: "HRN", back: "بیشترین نسبت پاسخ - RR = (W+S)/S - دارای Aging" },
  { front: "Feedback", back: "صف‌های با اولویت مختلف - فرآیندها بین صف‌ها جابجا می‌شوند" },
  { front: "Lottery", back: "زمان‌بندی شانسی با بلیط - بدون Starvation" },

  // Performance metrics
  { front: "Response Time", back: "Wait Time + Service Time" },
  { front: "Throughput", back: "تعداد فرآیندهایی که در واحد زمان به اتمام می‌رسند" },
  { front: "Starvation", back: "گرسنگی - انتظار طولانی مدت فرآیند برای گرفتن منابع" },
  { front: "AGING", back: "مکانیزمی که اولویت فرآیندهای منتظر را افزایش می‌دهد" },

  // Real-time scheduling
  { front: "Rate-Monotonic", back: "فرکانس بالاتر (Period کوتاه‌تر) → اولویت بالاتر" },
  { front: "EDF", back: "Earliest Deadline First - کمترین مهلت اول" },
  { front: "LDF", back: "Least Deadline First - کمترین لختی اول - L = D - C" },
  { front: "شرط زمان‌بندی بلادرنگ", back: "Σ(C/P) ≤ 1" },

  // Threads
  { front: "KLT", back: "Kernel Level Thread - توسط سیستم عامل مدیریت می‌شود" },
  { front: "ULT", back: "User Level Thread - توسط برنامه کاربر شبیه‌سازی می‌شود" },
  { front: "Thread Immigration", back: "کد مشترک یک بار load شده و به صورت مشترک استفاده می‌شود" },

  // Synchronization
  { front: "Critical Section", back: "بخشی از کد که احتمال بروز خطا و ناسازگاری در آن بالاست" },
  { front: "Mutual Exclusion", back: "اگر فرآیندی در ناحیه بحرانی بود، دیگری نتواند وارد شود" },
  { front: "Progress", back: "اگر کسی در ناحیه بحرانی نبود، چیزی مانع ورود نشود" },
  { front: "Bounded Waiting", back: "تعداد فرآیندهای همگام باید محدود باشد" },
  { front: "Busy Waiting", back: "فرآیند در حلقه می‌ماند و وقت CPU را هدر می‌دهد" },

  // Hardware sync
  { front: "Test & Set", back: "TS(a,b): a ← b, b ← 1" },
  { front: "SWAP/Exchange", back: "EXX(a,b): a ↔ b" },

  // Semaphore
  { front: "Semaphore", back: "متغیر راهنما با عملیات Wait و Signal" },
  { front: "wait(S)", back: "--S.value; if < 0 then block" },
  { front: "signal(S)", back: "++S.value; if ≤ 0 then wakeup" },

  // Message Passing
  { front: "Blocking Send", back: "فرآیند منتظر پاسخ می‌ماند" },
  { front: "Blocking Receive", back: "فرآیند منتظر پیام می‌ماند" },
  { front: "Port", back: "آدرس منطقی برای مشخص کردن فرآیند مقصد (0-65535)" },

  // Deadlock
  { front: "Deadlock", back: "وضعیتی که فرآیندها برای همیشه منتظر منابع می‌مانند" },
  { front: "شرایط Deadlock", back: "Mutual Exclusion, Preemption, Hold & Wait, Circular Wait" },
  { front: "Safe State", back: "وضعیتی که همه فرآیندها بعد از مدتی معین خاتمه می‌یابند" },
  { front: "Banker's Algorithm", back: "الگوریتم اجتناب از بن‌بست با بررسی Safety قبل از تخصیص" }
];
