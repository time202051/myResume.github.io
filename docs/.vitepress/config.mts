import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "李嘉鹏-简历",
  description: "个人简历与项目",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "简历", link: "/resume" },
      { text: "开源项目", link: "/open-source" },
    ],

    sidebar: [
      {
        text: "简历",
        items: [{ text: "完整简历", link: "/resume" }],
      },
      {
        text: "项目",
        items: [
          { text: "开源", link: "/open-source" },
          { text: "兴趣", link: "/personal-project" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/time202051" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present 李嘉鹏",
    },
  },
  lastUpdated: true,
  base: "/myResume.github.io/",
  markdown: {},

})
