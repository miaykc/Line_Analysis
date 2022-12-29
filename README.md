# NLP and Web Applications - Final Report

### 📍 人員

<!-- 姓名：**紀柔安** 學號：R11142005
Email: R11142005@ntu.edu.tw

姓名：**葉凱晴**
學號：R11142006
Email: R11142006@ntu.edu.tw

姓名：**橘內每歌**
學號：R11142010
Email: R11142010@ntu.edu.tw -->

| 姓名         |      學號 |        Email         |
| :----------- | --------: | :------------------: |
| **紀柔安**   | R11142005 | R11142005@ntu.edu.tw |
| **葉凱晴**   | R11142006 | R11142006@ntu.edu.tw |
| **橘內每歌** | R11142010 | R11142010@ntu.edu.tw |

<br>

### 📍 **簡介**

#### **LINE 對話分析 App**

> 將聊天記錄匯出 👉🏻 選取並複製特定文字 👉🏻 貼上所選文字並進行分析

<br>

### 📍 **自我評估**
- motivation
  - 希望可以運用課堂教的技巧，包含學期初教的sentiment analysis，到學期中的HTML和Javascript，以及學期中後段的react來設計一個網頁。
- impact 
  - 利用情緒分析line聊天記錄，以了解與朋友之間的對話情緒，近一步了解與朋友之間的關係。
- design
  -  HTML, CSS, Material UI (https://mui.com/)
- method
  - React, npm
- data
  - 個人聊天記錄.txt
- API
  - https://www.npmjs.com/package/chinese-s2t (簡轉繁)
  - https://www.npmjs.com/package/sentiment-zh_cn_web （中文情緒分析）
- ethics 
  - 無違反倫理。所使用的聊天記錄皆來自個人擁有，且此 webpage 僅接到前端，未連接於後端，被上傳的聊天記錄不會被留存下來。
 

<br>

### 📍**code folder organization**

- main codes in; src/pages
  - Layout.js/ 
  - Home.js/ 首頁
  - Upload.js/ 檔案上傳 
  - Analysis.js/ 情緒分析 
  - Aboutus.js/ 個人介紹 
- index.js/ 用 React router來分頁


<br>

### 📍**code 上的註解**

---

<br>
<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
