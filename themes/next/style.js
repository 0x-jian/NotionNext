/* eslint-disable react/no-unknown-property */
/**
 * 全局样式：背景色、菜单下划线动画、内容区域宽度
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 底色 */
      body {
        background-color: #eeedee;
      }
      .dark body {
        background-color: black;
      }

      /* 菜单下划线动画 */
      #theme-next .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#4e80ee, #4e80ee);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 0.3s ease-in-out;
      }
      #theme-next .menu-link:hover {
        background-size: 100% 2px;
        color: #4e80ee;
      }

      /* 内容区域加宽并居中 */
      .container {
        max-width: 1600px;  /* 最大宽度，可以改成 1400px */
        margin: 0 auto;     /* 水平居中 */
        padding: 20px;      /* 内边距 */
      }

      /* 响应式调整，手机端宽度适应屏幕 */
      @media (max-width: 768px) {
        .container {
          max-width: 100%;
          padding: 10px;
        }
      }
    `}</style>
  )
}

export { Style }
