◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ ascii alt + 256....

https://youtu.be/S7Gi3UnKdmA

https://github.com/tomkovich/ragnarok
https://www.figma.com/file/WPk5N8ONd0DGuKWBUjkS6i/Untitled?node-id=0-1&t=gLSIVU6Tf3E0Zxtv-0

https://webpack.js.org/guides/

html {scroll-behavior: smooth} - smooth scroll by anchors

document.body.style.overflow = "hidden"; выключает скролл
document.body.style.overflow = "";       включает скролл

! "build": "webpack" add in scripts 4 make build

!  yarn add gh-pages -D
"predeploy": "npm run build",
    "deploy": "gh-pages -d dist"

yarn run predeploy
yarn run deploy

https://youtu.be/DW28sSQxBO8 assetModuleFilename:'[name][ext]'
(- wPack in 1 hour)
https://youtu.be/o8KMucDpSno - 1:05:30 (tune wPack 4 edit IMG)
https://youtu.be/1umrbO0nJeE (part playlistf)



tCodes:
-------------------
4:00 tune project, install dependencies (npm init, yarn add webpack webpack-cli webpack-dev-server -D)
5:00 create folders & tune        webpack.config.js (https://webpack.js.org/guides/),name project in
6:00 create assets/js/index.js with import '../styles/styles.scss'(& index.html in src)
12:30 yarn add -D css-loader sass-loader sass style-loader (+ addition video about webpack from Jana)
13:45 yarn add html-webpack-plugin -D
16:30 yarn add serve -D (& yarn dev !)
18:20 go to Maket in Figma

30:00 do langs selector

35:40 go to styles

40:00 add to style classes-utilities
40:40 styling heaader
  53:40 -"- description

51:20 styling timer

56:20 mixin

1:01:30 section (section.section.section-editions)
1:06:30 styling section-editions (1:13:36 cards)
1:14:45 section-dual
1:19:30

1:24:00 section-about
  autoplay - not work!
  https://stackoverflow.com/questions/65405988/autoplay-video-with-sound

1:30:00 section explore
1:37:00 explore styling

1:51:30 section news
1:58:30 news styling

2:16:40 styling footer

2:26:30 JS
2:27:30 menu-btn

2:29:50 scroll by anchors (maybe simply)
2:31:30 preventDefault for disable link move 
  (string.startsWith("str") !!!!!!!!!!!!!!!!!!!)
  smooth scroll ???????????????????????? (How I does it without JS?)

2:37:00 Timer
2:44:40 setInterval
2:51:00 clearInterval id when time is over 

2:52:30 work with section-video 
2:55:15 about 2nd param .toggle (effect hover by video-zone)

2:57:00 checkbox logic (use Number in quality number array items)
3:03:15 search tabs query by [data-...]
3:04:00 search siblings = list.parentElement.children;
3:05:00 tabs ligthing logic

3:06:45 swiper logic            3:10:30!
(install to project: stop dev &
 yarn add swiper & 
 import Swiper, { Navigation } from "swiper"&
 & Swiper.use([Navigation]);
)
  3:10:00 (two way query element, btn too)

3:12:30 logic 4 FAQ (appiar/disappier answers)      <------
3:15:00 about height

3:18:15 hidden sections

3:22:13 logic moving nods
  3:24:30 scaling video
  3:25:55 faq stepping ???

3:26:45 change lang logic
  3:30:00 ? select/click

3:37:25 modal
3:42:40 styling modal
3:52:05 modal opening logic 
3:59:00 repear mistake "subtitle/version"

============= complete
- fixed toggling view burger button
- fixed posibility closing modal
- fixed sizez inputs in modal
- fixed centring swiper buttons
- fixed font-size news & bRad & buttons setts
- fixed click 3/4 buttons "buy now" (Ja too)
- fixedno appiar FAQ by order
- fixed swipe after last(Ja too) (need setts 2/2)
- fixed change UpperC Ukraine lang in footer 
- fixed change lang in footer
- fixed change current lang 
- fixed work 4/4 buttons "buy now"
- realise smooth scroll without fn
- remove scroll under overlay

?full translate
?exp Swiper pag & scroll
