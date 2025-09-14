const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      body {
        background-color: #eeedee;
      }
      .dark body {
        background-color: black;
      }

      // 菜单下划线动画
      #theme-next .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#4e80ee, #4e80ee);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }
      #theme-next .menu-link:hover {
        background-size: 100% 2px;
        color: #4e80ee;
      }

      /* 让正文区变宽 */
      #theme-next #container-inner,
      #theme-next #article-wrapper,
      #theme-next #notion-article {
        max-width: 1200px !important;
        margin: 0 auto;
      }
    `}</style>
  )
}

export { Style }
