(ITCS212 Web Programming)
Project Phase I: Tentative domain: Ticket purchasing (ThaiRailways) 
Team members
1. 6488045 Supithcha Jongphoemwatthanaphon
2. 6488049 Kanita Karunkittikun 
3. 6488052 Sasasuang Pattanakitjaroenchai 
4. 6488226 Nisakorn Ngaosri


How to install and run the project
In the zip file name sec2_gr13_pj1_ID045_049_052_226.zip.  When you unzip the file, you'll find that it contains the navigational diagram filename sec2_gr13_diagram.pdf, source code directory file name sec2_gr13_src this file includes all HTML, CSS, and supplementary files. Input all files to visual studio code, and readme.txt that explains how to run/start our web application and extra remarks, bugs, or exceptions.


Source code directory files:
* Homepage.html
* detail1.html
* detail2.html
* detail3.html
* detail4.html
* detail5.html
* login.html
* productmanage.html
* search.html
* searchresult.html
* signup.html
* usermanage.html
* welcome.html
* aboutus.html 
* login.css 
* about us.css
* Homepage.css
* searchstyle.css
* searchscript.js (not use yet)


In order to run the project, click download all files in the folder and may need to recheck CSS’s link.  After that, open Live Server which our group recommends. open Live Server starting from the Homepage.html.


The explanation for each page: 


* Home page: The header part includes the name and a button for accessing the Login page that can link to the Login page. This page navigation bar features links to the Home, About Us, Timetable, Event, Service, and Contact Us pages. Clicking on the "About Us" button will direct you to the About Us page. For the Home, Timetable, Event, Service, and Contact us use the [Follow link] to access content on the Home page. 
*  For the Home, Timetable, Event, Service, and Contact us use the [Follow link] to access content on the Home page. In the section part, we provide a search button for linking to the “Search” page. Additionally, the article part below displays related information that can use mouseover but is unable to click on and links to any pages.


* “TIME TABLE” (e.g. the Northern line, Northeastern line, Southern line, Eastern line, Commuter line, Wongwian Yai line, Ban Laem line, and Tourist train line) 
* “NEW EVENTS” illustrates the information about the new event. 
* “OUR SERVICE” also illustrates the information about the service of ticket purchasing. 


The website's footer section contains details such as the address, call number, and various icons. 


* Login page: The login page includes the 2 main elements: Username or Email Address, a field where input the username or email address associated with their account. Password is a blank where the user enters their password for the account profile. After clicking the Login button, it will link to the “Welcome Admin” page.


* Welcome Admin page: The purpose of this page is to navigate administrators to select the next page. This page offers two options for selection: the Product/Service Management page and the User Account Management page. When clicking on the Product/Service Management button, the system will automatically redirect administrators to the Product/Service Management page. Similarly, if administrators upon clicking the User Account Management button, the system will direct administrators to the User Account Management page.


* Search page: The Search page includes 5 criteria to search which are round trip, departure station, terminal station, date, and the number of passengers. At the moment for phase I the javascript for checking the criteria from the input is excluded. For the mock-up search results will be shown on the same page below when clicking the search button. When you click on the "Read more detail" button, it will link to the Detail page where the user can view all the relevant information about the ticket.


* Detail page: There are 5 detail pages which are detail1.html, detail2.html, detail3.html, detail4.html, and detail5.html. All 5 detail pages have the same code structure except for the text detail in the mock-up ticket. On this page, you will find the details of the ticket at the front and back of the ticket which provides related information similar to real ticket details such as ticket id, passenger name, gender, ticket number, ticket type, train number, date, destination, and ticket price. Moreover, we use article elements to show precautions, terms & conditions, and cancellation details that show the image and information related to the usage of the ticket.


* Search result page: The purpose of this page is to display the search results once you have clicked on the "Back to previous page" button located at the bottom of the Detail page because the search results will only be displayed if you don't press the search button. Without clicking the "Search" button, you won't be able to view any search results.


* Product/Services management page: On this page, we need you to fill out the information for the new ticket as follows: Departure station, Terminal station, Ticket type, Train number, and Available date. Moreover, you can reset or add a new ticket. Furthermore, we also have a modified existing ticket part for administrators to modify the existing products(tickets). If they want to modify the information in the ticket can press the Edit button or can press on the delete button in order to delete the ticket. However, for now, the Add, Edit, and Delete buttons can not be used yet. But the Reset button can actually reset the input that has been filled out.


* User Account Management page: The function of a User Account Management page is to manage user accounts within the platform. In addition to displaying user information, it provides administrators to create, modify, or remove user accounts. For adding a new account, can be added from the Add Account button at the bottom of the page. After clicking the button, it will link to the Add Account pages for storing new user’s  information as a new admin. 


* Add Account page: The purpose of this page is to collect and save the information of a new administrator. The data collected will include the administrator’s name, username, email address, phone number, gender, and address. After the user completes the information, the user can click the Add button. It will enable the new user to access and perform administrative tasks using their new account. 


* About Us page: This page displays the creator's profile image, and personal details, including their name, contact information such as an address, phone number, email, and social media such as Instagram and LinkedIn. Additionally, it has "Email' and "LinkIn" buttons for communicating with the creator directly. This page also features a navigation bar that allows users to navigate to other pages without returning to the homepage.


* Remarks 
* Edit and delete buttons in the Product/Services management, User Account Management, and Add Account pages aren’t able to perform any action.
* Clicking the Edit button on the search page did not perform any action.
* Add account button in adding account form on the User Account Management page isn’t able to perform any action.
* About us page: The social media icon on each membership card isn’t related to anything.
* Except for the “Home” page, the navigation bar element Home link to the “Home” page, “About us” link to the “About us” page, “TIME TABLE”, “NEW EVENTS”, and “OUR SERVICE” are all link to “Home” page.
* The elements and icons in the footer section are not clickable and do not redirect to external links or pages.
* All Northern line, Northeast line, East line, and South line on the search page aren't performing any action.
* Image source drive: https://drive.google.com/drive/folders/1fIlsIYt5eTwLUDrancQg8-HjVLD-day8?usp=sharing


Back button
* The Back button on the Login page links to the Home page.
* The Back button on the Welcome Admin page links to the Login page.
* Back button on Product/Services management, User Account Management page link to the Login page.
* Back button on Add Account page links to the User Account Management page.


References and resource


CSS: CSS tutorial. [Online]. Available: https://www.w3schools.com/css/ [Accessed: 19-Feb-2023]. 
HTML: HTML tutorial. [Online]. Available: https://www.w3schools.com/html/  [Accessed: 19-Feb-2023]. 
Flex: T. V. Damme, J. Merkenich, C. Coyier, L. Mejia, 34 Cross, G. Graham, S. Cope, M. Seyedi, M. Khare, R. Rendle, A. El-Alfy, M. Matuzovic, and B. Holt, “A complete guide to flexbox: CSS-tricks,” CSS, 09-Dec-2022. [Online]. Available: https://css-tricks.com/snippets/css/a-guide-to-flexbox/  [Accessed: 19-Feb-2023]. 
The railways website: “การรถไฟแห่งประเทศไทย.” [Online]. Available: https://www.railway.co.th/Home/Index  [Accessed: 19-Feb-2023]. 
“1690,” การรถไฟแห่งประเทศไทย. [Online]. Available: https://dticket.railway.co.th/DTicketPublicWeb/. [Accessed: 19-Feb-2023]. 




Home page
Icon: “Find the perfect icon for your project,” Font Awesome. [Online]. Available: https://fontawesome.com/search [Accessed: 20-Feb-2023].
Illustration:
“J. Borthwick and J. MacDonald, “The Kingdom of Rails: Is the best way to see Thailand by train?,” Adventure.com, 09-May-2018. [Online]. Available: https://adventure.com/thailand-by-train/ [Accessed: 20-Feb-2023]. 
C. Bolgil, “Trains in Thailand - learn everything you need to know! (2022),” Bangkok Attractions - Your guide to Bangkok 2022, 11-Aug-2022. [Online]. Available: https://bangkokattractions.com/train-in-thailand/  [Accessed: 20-Feb-2023]. 
[Email Protected], “เที่ยวภาคใต้ 101: คู่มือคนหัดเที่ยวภาคใต้ + ที่เที่ยวภาคใต้ที่เป็น a must!,” เรื่องกิน เรื่องเที่ยว ช้อปปิ้ง ไลฟ์สไตล์, 01-Oct-2020. [Online]. Available: https://www.shopback.co.th/blog/tr-th-%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89/  [Accessed: 20-Feb-2023]. 
“ที่เที่ยวภาคตะวันออก,” ที่เที่ยวทั่วไทย. [Online]. Available: https://www.thaitraveltrip.com/tag/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%81/. [Accessed: 20-Feb-2023]. 
“ภาคอีสานมีกี่จังหวัด มีจังหวัดอะไรบ้าง,” JANGWAT, 29-May-2022. [Online]. Available: https://www.jangwat.com/northeast/136/. [Accessed: 20-Feb-2023]. 


“Watthai,” watthai. [Online]. Available: http://www.dhammathai.org/watthai/bangkok/watarun.php  [Accessed: 20-Feb-2023]. 
“10 เท่...น่าเที่ยว จ.สมุทรสงคราม,” The official website of Tourism Authority of Thailand. [Online]. Available: https://thai.tourismthailand.org/Articles/10-%E0%B9%80%E0%B8%97%E0%B9%88-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7-%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1. [Accessed: 28-Feb-2023]. 
“ทางรถไฟสายมรณะ กาญจนบุรี,” Wihok. [Online]. Available: https://wihok.com/photos/1376. [Accessed: 20-Feb-2023]. 
“เปลี่ยนชื่อสถานีกลางบางซื่อ,” MGR Online, 06-Jan-2023. [Online]. Available: https://mgronline.com/onlinesection/detail/9660000001726. [Accessed: 20-Feb-2023]. 
Information of the new event
S. Writer, “Bangkok's new train terminal offers hope for end to traffic woes,” Nikkei Asia, 21-Jan-2023. [Online]. Available: https://asia.nikkei.com/Business/Transportation/Bangkok-s-new-train-terminal-offers-hope-for-end-to-traffic-woes. [Accessed: 20-Feb-2023]. 
Khaosod English, “Hua Lamphong's 100-year service to end in November, Gov't says,” Khaosod English, 26-Jan-2021. [Online]. Available: https://www.khaosodenglish.com/news/transpo/2021/01/22/hua-lamphongs-100-year-service-to-end-in-november-govt-says/. [Accessed: 20-Feb-2023]. 


Welcome admin
Background image: “Images,” Google Images. [Online]. Available: https://images.google.com/  [Accessed: 28-Feb-2023].


Search result: 
PRECAUTIONS  image:  “Railway,” การรถไฟแห่งประเทศไทย. [Online]. Available: 
https://www.dticket.railway.co.th/DTicketPublicWeb/home/Home  [Accessed: 20-Feb-2023]. 


Background image: E. Jirayu, “8 scenic local and international train routes in, to & fro Thailand,” TheSmartLocal Thailand - Things To Do In Bangkok, 28-Jan-2022. [Online]. Available: https://thesmartlocal.co.th/thailand-train-trips/. [Accessed: 20-Feb-2023]. 


Qr generate: “QR code generator,” QR Code Generator. [Online]. Available: https://www.the-qrcode-generator.com/. [Accessed: 20-Feb-2023].