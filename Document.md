<img src='client/src/assets/logo.png?' height='250'>  
<span style="color:red"><font size=20>A</span>RT<span style="color:purple">I</span>FY</font>

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

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website' height='40'>](https://blog.logrocket.com/guide-adding-google-login-react-app)  
adding log in by Google for our aplication
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website' height='40'>](https://platform.openai.com/docs/api-reference/introduction)  
official page of the OpenAI, documentation and examples of ow to use API  
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='YouTube' height='40'>](https://www.youtube.com/watch?v=pfaSUYaSgRo)  
tailwindcss's tutorial for dark mode creation