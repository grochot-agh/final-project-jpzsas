[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/YYgLXq0X)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11228627&assignment_repo_type=AssignmentRepo)
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/YYgLXq0X)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11228627&assignment_repo_type=AssignmentRepo)

<img src='client/src/assets/logo.png?' height='250'>  
<font><span style="color:red"><font size=20>A</span>RT<span style="color:purple">I</span>FY</font>

## SOCIAL MEDIA PLATFORM CENTERED AROUND AI IMAGE GENERATION

## SHORT DESCRPITION

The goal of the project is to present knowledge and abilities acquired during the Jezyki programowania aplicakji internetowych course, as well as further develop personal programming skills and acquire experience on various programming languages and aspects, especially on increasingly popular AI models.

## TECHNOLOGIES

<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/react.svg' alt='react' height='40'> ReactJS  
<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/node-dot-js.svg' alt='node-dot-js' height='40'> NodeJS  
API Open AI Dall-e

### Why did we chose React?

Powody dla którego wybrałyśmy właśnie niego:

- Modular and Scalable: due to the relatively modular aspect of ReactJS, larger code is built using smaller, easier to manage blocks. The reusability of many individual blocks speeds up the programming process and eases maintenance.
- Reusability of components: it allows for effective usage of the codes in diffrent parts of the application, which makes the creation and maintenance of the code faster.
- Virtual DOM: a more effective rendering method, as the virtual DOM is compared to the actual DOM, and only the changes portions are updated; this also increases rendering speed.
- One-way dataflow: ReactJS utilizes a one-way dataflow system, which helps with managing the application. Information flows in one direction, top to bottom, which ensures information stays relevant and helps keep the application efficient.
- Support: ReactJS is a very popular language, and such many various libraries, tools, and expansions are available, making working with React easier and React itself more useful.

## INITIALIZATION

In order to start the application, both Visual Studio Code and NodeJS must be installed. If issues arise with initialization, please refer to the following video.  
https://www.youtube.com/watch?v=qrqhVgAe880.  
Then, a connection to the server mongodb must be made through the following portal:  
https://www.mongodb.com/atlas/database  
Using the following login:  
USER: aniakslowik@student.agh.edu.pl  
PASS: 7Nuty+daru  
After connection, our IP address must be added.

After the connection has been made and Visual Studio activated, along with the loaded folder, a double terminal or two individual terminals must be opened.

- In the first terminal, the following commands should be input:  
  o cd client  
  o npm install (if first time initialization)  
  o npm run start  
  o To open the application, open the link that appears.

- In the second terminal, concurrently with the corresponding commands in the first terminal, the following should be input:  
  o cd server  
  o npm install(if first time initialization)  
  o npm run dev.

## APLICATION CAPABILITIES

The application has registration and logging functionality. Login is achieved using username and password specified during registration, or using a Google account – future support for other platforms is planned. Logins and passwords are stored encrypted, using the bcrypt library.

After account creation, an activation code is sent by mail. Password resetting in case of a forgotten password is NOT supported by our platform, so be sure to store the password. Once logged in, there is a password change option, under the My Profile tab. There also the options to log out, change email, and account deletion can be found.

In the application home page, the latest four images that were generated will appear. There is also an option to search for images based on the attached hashtags.
On the Generate page, ANY image can be generated, based on the text input. The application itself has around 50 built in descriptions for use as examples. After generation, there are options to add hashtags and share the image to others. All generated images of a profile can be found in the My Profile tab.

On the Trending page, you can find other popular images generated by other users of the network. The images can be liked, shared, downloaded, and commented on, without the need to login beforehand.

## ISSUES

If any issues are encountered, please contact us so that we may fix it as quickly as possible.

## STATUS OF THE PROJECT

version 1.0

## CREATORES

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/jpudelko)  
Justyna Pudełko

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/zSzuba)  
Zuzanna Szuba

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/Slowikxx)  
Anna Słowik

## SOURCES

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website'    height='40'>](https://blog.logrocket.com/guide-adding-google-login-react-app)  
adding log in by Google for our aplication  
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website' height='40'>](https://platform.openai.com/docs/api-reference/introduction)  
official page of the OpenAI, documentation and examples of ow to use API  
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='YouTube' height='40'>](https://www.youtube.com/watch?v=pfaSUYaSgRo)  
tailwindcss's tutorial for dark mode creation

<br><br><br>

<img src='client/src/assets/logo.png?' height='250'>  
<span style="color:red"><font size=20>A</span>RT<span style="color:purple">I</span>FY</font>

## PLATFORMA SPOŁECZNOŚCIOWA UMOŻLIWIAJĄCA GENEROWANIE GRAFIK ZA POMOCĄ AI

## KRÓTKI OPIS

Celem projektu jest zaprezentowanie umiejętności zdobytych podczas przedmiotu Języki programowania aplikacji internetowych oraz chęć poszerzenia tych umiejętności o nowe technologie, w tym wykorzystanie coraz bardziej zyskujących na popularności sztucznych inteligencji.

## TECHNOLOGIE

<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/react.svg' alt='react' height='40'> ReactJS  
<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/node-dot-js.svg' alt='node-dot-js' height='40'> NodeJS  
API Open AI Dall-e

### Dlaczego React?

Powody dla którego wybrałyśmy właśnie niego:

- Skalowalność i modularność: istnieje łatwe tworzenie skalowalnych i modułowych aplikacji, dzięki komponentom, które są podstawowymi budulcami Reacta, można tworzyć aplikacje złożone z mniejszych, łatwiejszych do zarządzania części.
- Reużywalność komponentów: ich reużywalność komponentów pozwala na efektywne wykorzystanie kodu w różnych częściach aplikacji, co przyspiesza proces tworzenia i utrzymania kodu.
- Wirtualny DOM (Virtual DOM): efektywne renderowanie zmian w interfejsie użytkownika. Dokonywane jest porównanie wirtualnego DOM z rzeczywistym DOM-em oraz aktualizacja tylko tych części interfejsu, które uległy zmianie wpływająć tym samym na przyśpieszenie wydajności.
- Jednokierunkowy przepływ danych: jednokierunkowy przepływ danych ułatwia śledzenie i zarządzanie danymi w aplikacji. Dane płyną w jednym kierunku, od góry do dołu, co pomaga w unikaniu niejednoznaczności i utrzymuje aplikację w spójnym stanie.
- Duże wsparcie społecznościowe: ReactJS ma ogromne wsparcie społecznościowe. Istnieje wiele dostępnych bibliotek, narzędzi i rozszerzeń, które ułatwiają pracę z Reactem i rozszerzają jego funkcjonalności.

## URUCHAMIANIE

W celu uruchomienia aplikacji musimy mieć zainstalowany program Visual Studio Code oraz środowisko NodeJS. W wypadku wystąpienia problemów z uruchomieniem programu należy dodać zmienne środowiskowe w sposób przedstawiony na zamieszczonym filmie: https://www.youtube.com/watch?v=qrqhVgAe880.

Należy połączyć się z serwerem mongodb za pomocą strony: https://www.mongodb.com/atlas/database wykorzystując jako login: aniakslowik@student.agh.edu.pl oraz jako hasło: 7Nuty+daru. Po pomyślnym zalogowaniu należy dodać nasz adres IP.

Po połączeniu się z serwerem oraz uruchomieniu Visual Studio Code wraz z załadowanym folderem należy otworzyć podwójny terminal lub dwa pojedyncze terminale. W pierwszym z nich wpisujemy cd client, a w drugim cd server. Przy pierwszym uruchomieniu konieczne jest wpisanie komendy npm install w obu terminalach. Następnie dla terminalu klienta należy wpisać npm run dev, a dla terminalu klienta npm run start. W celu uruchomienia aplikacji należy wejść w link, który pojawi się w terminalu dla klienta.

## ZAKRES FUNKCJONALNOŚCI

Aplikacja posiada funkcję rejestracji oraz logowania. Logowania można dokonać za pomocą danych wprowadzonych przy rejestracji (login oraz hasło) lub przy pomocy konta Google – może kiedyś dodamy jeszcze inne platformy. Dane są przechowywane w zaszyfrowany sposób przy pomocy biblioteki bcrypt, a logowanie za pomocą Google odbywa się w bezpieczny sposób zapewniony przez tą firmę.

Po utworzeniu konta na podaną pocztę nie zostanie wysłany kod aktywacyjni. Nasza platforma nie posiada także opcji odzyskania hasła, dlatego UWAŻAJ żeby na pewno je zapamiętać. Istnieje opcji zmiana hasła… jednak znajduje się ona na podstronie My Profile po zalogowaniu. W tym samy m miejscu istnieje także opcja zmienienia loginu, adresu e-mail oraz usunięcia konta.

Na stronie głównej pojawiają się 4 grafiki, które zostały wygenerowane jako ostatnie. Znajduje się tam też opcja wyszukiwania grafiki na podstawie dołączonych do niej hasztagów.

Na stronie Generate możemy wygenerować DOWOLNĄ grafikę na podstawie wprowadzonego przez nas tekstu. Jeśli nie masz żadnego pomysłu, nie martw się! Nasza aplikacja posiada bazę około 50 opisów, spośród których możesz losować w celu wygenerowania twojego własnego obrazu. Pozostaje dodać hasztag oraz udostępnić twoje dzieło innym członkom naszej społeczności i gotowe! Tylko nie zapomnij o wcześniejszym zalogowaniu się! Wszystkie wygenerowane przez ciebie dzieła będziesz mógł ponownie obejrzeć w kategorii My Profile.

A teraz coś jeszcze lepszego! Na stronie Tranding znajdziesz grafiki innych członków naszej społeczności. Możesz je polubić, pobrać, udostępnić oraz skomentować – a w celu skomentowania nie musisz posiadać stworzonego konta.

Istnieje też sekcja jeżeli potrzebujesz pomocy lub chcesz dowiedzieć się czegoś o nas - ale to już musisz przejrzeć na własną rękę.

## BŁĘDY

Dołożyłyśmy wszelkich starań w celu przetestowania strony pod względem jakości użytkownika, jednak ze względów technicznych nie została sprawdzona poprawność wyświetlania dla niektórych rozdzielczości. Natomiast jeśli znajdziesz jakieś błędy koniecznie daj znam znać żebyśmy mogły je poprawić.

## STATUS PROJEKTU

wersja 1.0

## TWÓRCY

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/jpudelko)  
Justyna Pudełko

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/zSzuba)  
Zuzanna Szuba

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/Slowikxx)  
Anna Słowik

## ŹRÓDŁA

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website' height='40'>](https://blog.logrocket.com/guide-adding-google-login-react-app)  
dołączenie logowania za pomocą google do aplikacji  
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website' height='40'>](https://platform.openai.com/docs/api-reference/introduction)  
oficjalna strona OpenAI, dokumentacja oraz przykłady zastosowania API  
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='YouTube' height='40'>](https://www.youtube.com/watch?v=pfaSUYaSgRo)  
tutorial do tworzenia ciemnego motywu za pomocą tailwindcss
