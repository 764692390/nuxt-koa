/*判断环境使用不同接口*/
export let baseurl = process.env.NODE_ENV === 'production' ? 'http://ssr.jczxw.cn' : 'http://localhost:3000/api/v1';
