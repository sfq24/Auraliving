# Aura Living — SEO + GEO + Local SEO 完整审计报告

> 审计日期：2026-06-07 | 最后更新：2026-06-21
> 范围：4个页面（/、/homes/magnolia、/homes/kent、/homes/shoreline），全部组件和翻译文件

---

## 改动总览

| 状态 | 数量 |
|---|---|
| ✅ 已完成 | 18 项 |
| ⏳ 待补充信息 | 3 项（用户需提供地址/坐标/社媒链接） |
| 📋 待实施 | 4 项（/about 页面、Review schema、WebP 图片、站外任务） |

---

## 已完成的代码改动

### 批次 1 — 技术基础设施

**新建 `public/robots.txt`**
```
User-agent: *
Allow: /
Sitemap: https://www.auralivingcare.com/sitemap.xml
```

**新建 `public/sitemap.xml`**
- 4 个 URL：`/`、`/homes/magnolia`、`/homes/kent`、`/homes/shoreline`
- 每个 URL 含 hreflang alternates（en + zh-Hans）
- priority：首页 1.0，各家园 0.9

**新建 `src/components/SEOHead.tsx`**
- 每页独立 `<title>`、`<meta description>`、canonical URL
- hreflang（en、zh-Hans、x-default）
- 完整 Open Graph（title、description、url、type、image、locale、locale:alternate、site_name）
- Twitter Card（summary_large_image）

**更新 `index.html`**
- 默认 title：`"Aura Living | Seattle Adult Family Home | Chinese-Friendly Senior Care"`
- Favicon 改为 Aura Living Logo.png（含 apple-touch-icon）
- 默认 OG + Twitter Card fallback 标签
- 全站 hreflang `<link rel="alternate">` 标签

**更新 `src/main.tsx`**
- 包裹 `<HelmetProvider>` 使 react-helmet-async 生效

---

### 批次 2 — 结构化数据（JSON-LD）

**新建 `src/components/SchemaOrg.tsx`**
- `Organization` schema（品牌主体）
- `LocalBusiness` schema × 3（Magnolia / Kent / Shoreline）
  - 含 name、description、url、telephone、email、address、geo（⏳ 地址/坐标待填）、营业时间、priceRange、image
- `BreadcrumbList` schema（各家园页面自动生成）

**新建 `src/components/FAQ.tsx`**
- 手风琴交互 FAQ 组件
- 内联 `FAQPage` JSON-LD schema（双语，跟随当前语言）
- 英文 6 题、中文 6 题，覆盖核心搜索问题：AFH 定义、vs 养老院、服务内容、华人服务、选择标准、预约参观

---

### 批次 3 — 首页 SEO

**更新 `src/App.tsx`**
- 首页添加 `<SEOHead>` + `<SchemaOrg type="organization">`
- 插入 `<FAQ />` section（在 Services 和 Contact 之间）

**更新 `src/components/Hero.tsx`**
- 外部 Pexels CDN `background-image` → 本地 `<img>` 标签（`magnolia_living_room.png`）
- 添加关键词 alt 文本

**更新 `src/components/Header.tsx`**
- 所有导航项从 `<button onClick>` 改为 `<a href="/#section-id">`
- 保留 `handleAnchorClick` 实现平滑滚动
- Logo 改为 `<Link to="/">`，CTA 改为 `<a href="/#contact">`

**更新 `src/components/Footer.tsx`**
- Quick Links 改为 `<a href="/#section-id">` crawlable 链接
- 新增"Our Homes"列：含 3 个家园的 `<Link>` 链接（内部 PageRank 传递）
- 布局从 `lg:grid-cols-4` 扩为 `lg:grid-cols-5`

---

### 批次 4 — 家园详情页 SEO

**`src/pages/Magnolia.tsx`**
- SEOHead：`"Magnolia Adult Family Home Seattle | Aura Living"`
- SchemaOrg type="magnolia"
- 面包屑导航 UI（Home > Our Homes > Magnolia）
- 8 张图片 → 7 张（移除已删除的 Outside.png，Bedroom.png 改为 Bedroom.jpg）
- 所有图片加关键词 alt + `loading="lazy"`

**`src/pages/Kent.tsx`**
- SEOHead：`"Kent Adult Family Home | Chinese Senior Care Seattle | Aura Living"`
- SchemaOrg type="kent"
- 面包屑导航 UI
- 11 张图片加关键词 alt + `loading="lazy"`

**`src/pages/Shoreline.tsx`**
- SEOHead：`"Shoreline Adult Family Home Seattle WA | Aura Living"`
- SchemaOrg type="shoreline"
- 面包屑导航 UI（修复了 '首页' 字符编码 bug）
- 10 张图片加关键词 alt + `loading="lazy"`

**`src/components/OurHomes.tsx`**
- 卡片图片加关键词 alt + `loading="lazy"`

---

### 批次 5 — 内容和翻译修复

**`src/data/translations.ts`**

拼写修复（第一轮）：
| 原文 | 修正 |
|---|---|
| `"Luxury Home Enrionment"` | `"Luxury Home Environment"` |
| `"Technology Assited Service"` | `"Technology Assisted Service"` |
| `"Chineses friendly Home"` | `"Chinese-Friendly Home"` |
| `"Chineses food and service"` | `"Chinese Food & Service"` |
| `"Hottub"` | `"Hot Tub"` |
| `"© 2024 Aura Living"` | `"© 2026 Aura Living"`（英文版年份） |

拼写修复（第二轮）：
| 原文 | 修正 |
|---|---|
| `"register nurse"` | `"registered nurse"` |
| `"residents energy"` | `"residents' energy"` |
| `"to make resident calm and enjoy"` | `"to help residents relax and enjoy"` |
| `['壮观园景', , '中文护工'...]` | 移除 sparse array 双逗号 bug |

内容修改：
- Hero 副标题（EN）：更新为含关键词的版本
- 新增 `faq` 翻译块（英文 + 中文各 6 题）

---

### 批次 6 — Bug 修复

**`src/components/Contact.tsx`**
- `<h3>` 标题 bug：`{t.info.address}` → 硬编码正确标题文案
- 添加 `setSubmitted(true)`（原本提交成功后状态未更新）
- 移除 Interest Level 下拉选择框及对应 state
- 移除废弃的注释代码块

**`src/data/translations.ts`**
- 移除 `interest` 和 `interestOptions` 字段（EN + ZH）

---

### 批次 7 — 电话号码全站更新

全站从 `(214) 205-4091`（德克萨斯区号）统一改为 `(800) 490-1990`：

| 文件 | 更新位置 |
|---|---|
| `src/components/SchemaOrg.tsx` | `const PHONE`（同时填入了 JSON-LD TODO 占位符） |
| `src/components/Footer.tsx` | tel: href + 显示文本 |
| `src/components/Contact.tsx` | 错误提示 alert |
| `src/data/translations.ts` | EN + ZH 各 2 处（phonePlaceholder + info.phone） |
| `src/pages/Magnolia.tsx` | CTA 按钮 |
| `src/pages/Kent.tsx` | CTA 按钮 |
| `src/pages/Shoreline.tsx` | CTA 按钮 |

---

## ⏳ 待用户提供信息（代码已就绪）

### A1 — 三个家园街道地址

**文件**：`src/components/SchemaOrg.tsx` 第 37、68、99 行

```ts
streetAddress: '[TODO: Magnolia street address]',
streetAddress: '[TODO: Kent street address]',
streetAddress: '[TODO: Shoreline street address]',
```

填入后 LocalBusiness schema 即完整，直接影响 Google Local Pack 展示。

### A2 — 地理坐标（Geo Coordinates）

**文件**：`src/components/SchemaOrg.tsx` 第 40-43、71-74、102-105 行

各家园的 latitude / longitude，可从 Google Maps 复制。

### A3 — 社交媒体链接

**文件**：`src/components/SchemaOrg.tsx` 第 20 行

```ts
sameAs: [],  // 填入 Facebook、WeChat、Yelp、Google Business Profile URL
```

---

## 📋 待实施（不依赖外部信息）

### B1 — /about 独立页面（需用户提供文案）

最重要的 E-E-A-T 缺口。养老/医疗类 YMYL 网站，Google 重点评估"谁在运营"。
需要：创始人简介、华盛顿州 AFH 执照号、经营年限。

### B2 — Review Schema + 更多评价内容

**文件**：`src/components/Testimonial.tsx`
- 当前只有 1 条评价，无星级评分，无 `AggregateRating` schema
- 搜索结果不会显示星级富文本

### B3 — OG 默认图片文件

**文件**：`public/images/default_card_image.png`（路径已在代码中，文件不存在）
- 需上传一张 1200×630px 的分享预览图

### B4 — WebP 图片格式优化

现有图片全为 PNG/JPG，转换为 WebP 可减小约 30% 体积，改善 Core Web Vitals LCP 分数。

---

## 站外任务（不涉及代码）

| 任务 | 说明 |
|---|---|
| Google Business Profile | 3 个家园各创建/认领一个 GBP，完善信息，是 Local Pack 排名的核心 |
| Google Search Console | 提交 sitemap.xml，监控索引状态和关键词排名 |
| 百度站长平台 | 覆盖中文用户，提交 sitemap |
| Yelp 商家页面 | 老年护理类搜索的重要引流来源 |

---

## 当前页面结构

```
auralivingcare.com/
├── /                    首页（Hero + ValueProposition + Testimonial + OurHomes + LifeAtAura + Services + FAQ + Contact）
├── /homes/magnolia      Magnolia 家园
├── /homes/kent          Kent 家园
└── /homes/shoreline     Shoreline 家园
```

---

## 原始审计问题对照表

| # | 原始问题 | 状态 |
|---|---|---|
| 1 | 全站只有一个静态 title | ✅ SEOHead.tsx，每页独立 title |
| 2 | 全站零 meta description | ✅ SEOHead.tsx |
| 3 | 无结构化数据 JSON-LD | ✅ SchemaOrg.tsx + FAQ inline schema |
| 4 | 无 sitemap.xml 和 robots.txt | ✅ 已新建两个文件 |
| 5 | H1/正文无 "adult family home" 关键词 | ✅ Hero 副标题更新 |
| 6 | 电话区号是德克萨斯 214 | ✅ 改为 (800) 490-1990 |
| 7 | 无具体街道地址 | ⏳ 用户未提供，SchemaOrg 有 TODO 占位符 |
| 8 | OG 标签不完整 | ✅ 完整 OG + Twitter Card |
| 9 | 中文 SEO 架构缺陷 | ✅ hreflang 自引用标签（最低成本方案） |
| 10 | 导航用 button 而非 a href | ✅ Header.tsx 已转换 |
| 11 | 多处拼写错误 | ✅ 共修复 9 处（两轮） |
| 12 | 图片 alt 文本无意义 | ✅ 全部家园图片加关键词 alt |
| 13 | Hero 图来自外部 Pexels CDN | ✅ 改为本地 img 标签 |
| 14 | 只有一条评价，无 Review schema | 📋 待实施 |
| 15 | 默认 Vite Favicon | ✅ 改为 Aura Living Logo.png |
| 16 | Copyright 年份不一致 | ✅ 统一为 © 2026 |
| 17 | Contact h3 输出地址内容 | ✅ 修复为正确标题文案 |
| 18 | 无 FAQ 内容 | ✅ FAQ 组件 + FAQPage JSON-LD |
| 19 | 页脚无家园详情页链接 | ✅ Footer 新增 Our Homes 列 |
| 20 | 无社交媒体链接 | ⏳ 用户未提供 |
| 21 | 图片无 lazy loading | ✅ 所有 gallery 图片加 loading="lazy" |
