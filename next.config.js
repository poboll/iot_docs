const withNextra = require('nextra')({
  // 主题包名
  theme: 'nextra-theme-docs',
  // 主题配置文件
  themeConfig: './theme.config.tsx',
  // 给文档中的代码块添加复制能力
  deafultShowCopyCode: true,
  // 支持latex
  latex: true,
  // 支持静态图片
  staticImage: true,

})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // next 工程本身配置内容
    reactStrictMode: true,
}

module.exports = withNextra(nextConfig)
