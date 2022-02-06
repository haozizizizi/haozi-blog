module.exports = {
    title: 'haozi的博客',
    // head: [ // 注入到当前页面的 HTML <head> 中的标签
    //   ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    // ],
    description: '~不学习就没饭吃( Ĭ ^ Ĭ )~',
   
    themeConfig: {
    //   logo: '/avatar.png',  // 左上角logo
    nav: require('./nav'),
    sidebar: require('./sidebar')
    }
  };
