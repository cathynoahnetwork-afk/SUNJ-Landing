# YiG 马来西亚渠道合作 Landing Page

纯静态网站，无需构建（no build step）。直接上传到 GitHub，再用 Vercel 导入即可上线。

## 文件结构
```
index.html        页面入口（含样式）
app.js            已预编译的页面脚本
vendor/           React 18 生产版（本地托管，不依赖外部 CDN）
ds/               YiG 设计系统（tokens、字体、组件）
assets/           图片（已压缩为 WebP / JPG）
vercel.json       缓存与安全 headers
```

## 上线步骤
1. 在 GitHub 新建 repository，把本文件夹内**所有文件**上传到 repo 根目录（包括 .gitignore、vercel.json）。
2. 登录 vercel.com → Add New → Project → 选择该 repo。
3. Framework Preset 选 **Other**；Build Command 与 Output Directory 留空。
4. 点 Deploy。完成后得到 `xxx.vercel.app` 网址。

## 绑定 SunJ.com/yig
- **方式 A（子域名，推荐）**：在 Vercel 项目 → Settings → Domains 添加 `yig.sunj.com`，按提示在 DNS 加 CNAME。
- **方式 B（路径 SunJ.com/yig）**：若 SunJ.com 主站也在 Vercel，在主站的 vercel.json 加 rewrite：
  ```json
  { "rewrites": [
    { "source": "/yig", "destination": "https://<本项目>.vercel.app/" },
    { "source": "/yig/:path*", "destination": "https://<本项目>.vercel.app/:path*" }
  ] }
  ```
  页面资源均使用相对路径；用路径方式时请确认访问网址为 `SunJ.com/yig/`（结尾带斜杠），或改用方式 A。

## 启用表单提交
目前表单为演示模式（校验通过但不发送）。在 `index.html` 中填入提交地址：
```js
window.YIG_SUBMIT_ENDPOINT = "https://formspree.io/f/xxxxxxx";
```
表单以 POST JSON 发送：name, company, type, state, phone, message, source。
可用 Formspree、Getform、或自家 API 接收。

## 上线前检查
- 方正综艺字体（ds/assets/fonts）请确认已取得网页商用授权。
- 「适合对象」电商图含第三方平台标识，「贴近日常料理」图有水印，建议替换为自有图片。
- 修改图片时保持同名替换即可。
