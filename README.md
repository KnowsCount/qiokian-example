<!--
 * @Date: 08/02/2021 09.49.03 +0800
 * @Author: KnowsCount
 * @LastEditTime: 11/02/2021 16.13.32 +0800
 * @FilePath: /qiokian/README.md
-->

<img src=".assets/logo.png" align="right" width="100" height="100" />

# qiokian - anime in JavaScript!

> 🙊 anime figure Vuejs component.

[![forthebadge](https://forthebadge.com/images/badges/powered-by-coders-sweat.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)

![Shishiro Botan](.assets/shishiro_botan.jpg)

---

## 🛠 Project setup

### 📥 Install dependencies

```
npm install
```

### 🔨 Compiles and hot-reloads for development

```
npm run serve
```

### 📦 Compiles and minifies for production

```
npm run build
```

## 🧱 Usage

-   Add

    ```html
    <link
    	rel="stylesheet"
    	href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css"
    />
    ```

    into `index.html`

-   globally import the component in `App.vue` and use it. The component is in [@/components/figures.vue](./src/components/figures.vue).
    An exeplar `App.vue` snippet is shown below:

    ```js
    import Figures from "@/components/figures.vue";
    export default {
    	components: {
    		Figures
    	}
    };
    ```

## 📈 Plans

-   Shishiro Botan Model (Anyone willing to help?)
-   Fix lint issues

---

Inspired by https://github.com/stevenjoezhang/live2d-widget.

All forms of contribution are welcome, and yes, stars please.
