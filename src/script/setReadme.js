const file = require('../utils/file.js');
const rec = require('../utils/rec.js');

const ONE_URI = 'https://v1.hitokoto.cn/';
const BING_URI = 'https://www.bing.com';
const BING_IMG_URI =
  'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';

const setReadme = async () => {
  try {
    const one = await rec.getData(ONE_URI);
    const sentence = `${one.hitokoto}    --${one.from_who || '无名氏'}`;
    // const bingImg = getUriData(BING_IMG_URI);
    // const image = BING_URI + bingImg.images[0].url;

    const article = `
**Today**
<blockquote>${sentence}</blockquote>
<img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25" alt="手势">
Hi there！ I'm WestCraneLi ~
<img src="https://emojis.slackmojis.com/emojis/images/1588866973/8934/hellokittydance.gif?1588866973" alt="Hi" width="30" />
</h3>

<a href="https://github.com/WestCraneLi">
<div align="right" >
  <img align="right" src="https://count.getloli.com/get/@:WestCraneLi" alt="WestCraneLi" />
</div>
</a>

* 🌱 Learning : Front-End Development ⚡ | Open-Source 🔥
* 📫 Languages : JavaScript(Typescript), Node
* 🔭 Hobbies : Reading, Table tennis, Cooking,Origami(Paper folding)

![Typing SVG](https://readme-typing-svg.herokuapp.com?font=DynaPuff&size=20&pause=1000&color=0366d6&center=false&vCenter=true&width=500&height=22&lines=Better+late+than+never+%F0%9F%91%8B)

![HTML5](https://custom-icon-badges.demolab.com/badge/-HTML5-%23E34F26?logo=HTML5&logoColor=white)
![CSS3](https://custom-icon-badges.demolab.com/badge/-CSS3-%231572B6?logo=CSS3&logoColor=white)
![Sass](https://custom-icon-badges.demolab.com/badge/-Sass-%23CC6699?logo=Sass&logoColor=white)
![Less](https://custom-icon-badges.demolab.com/badge/-Less-%233118C6?logo=Less&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-e5cd0c?style=flat-square&logo=JavaScript&labelColor=f7df1e&logoColor=000)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white&color=blue)
![ts-node](https://custom-icon-badges.demolab.com/badge/-ts--node-%233178C6?logo=ts-node&logoColor=white)
![Node](https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white)
![Nodemon](https://custom-icon-badges.demolab.com/badge/-Nodemon-%2376D04B?logo=Nodemon&logoColor=white)
![vue](https://img.shields.io/badge/-Vue.js-29beb0?style=flat-square&logo=vue.js&labelColor=ffffff&color=4FC08D)
![react](https://img.shields.io/badge/-React-29beb0?style=flat-square&logo=React&labelColor=ffffff&color=61DAFB)
![MiniProgram](https://img.shields.io/badge/-MiniProgram-008000?style=flat-square&logo=WeChat&labelColor=fff&color=07C160)
![uniapp](https://custom-icon-badges.demolab.com/badge/-Uniapp-%07C160?logo=uniapp&logoColor=white)
![Express](https://custom-icon-badges.demolab.com/badge/-Express-%23000000?logo=Express&logoColor=white)
![Nest.js](https://custom-icon-badges.demolab.com/badge/-Nest.js-%23CC7799?logo=Nest.js&logoColor=white)
![WebPack](https://img.shields.io/badge/-WebPack-1C78C0?style=flat-square&logo=WebPack&logoColor=white)
![Vite](https://custom-icon-badges.demolab.com/badge/-Vite-%23646CFF?logo=Vite&logoColor=white)
![NPM](https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-white?style=flat-square&logo=MySQL&logoColor=white&color=fff&labelColor=4479A1)
![MongoDB](https://custom-icon-badges.demolab.com/badge/-MongoDB-%2347A248?logo=MongoDB&logoColor=white)
![Git](https://custom-icon-badges.demolab.com/badge/-Git-%23F05032?logo=Git&logoColor=white)
![Markdown](https://custom-icon-badges.demolab.com/badge/-Markdown-%23000000?logo=Markdown&logoColor=white)

![](https://github-readme-activity-graph.cyclic.app/graph?username=WestCraneLi&theme=github)

![WestCraneLi's GitHub stats](https://github-readme-stats.vercel.app/api?username=WestCraneLi&show_icons=true&icon_color=0366d6&text_color=24292e&bg_color=fff&hide_title=false&env=PAT_1)

<img width="100%" alt="game gif" src="https://qnycdn.volcanoblog.cn/github-contribution-grid-snake.svg"/>

⭐️ From [WestCraneLi](https://github.com/WestCraneLi)
`;
    await file.setJsonFileData('README.md', article, true);
  } catch (error) {
    console.warn(error);
  }
};

setReadme();
