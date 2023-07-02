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
