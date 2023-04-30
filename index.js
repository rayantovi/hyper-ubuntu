exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#190011',
    foregroundColor: '#fff',
    borderColor: '#190011',
    padding: '0.3em 0.7em ',
    cursorColor: 'white',
    colors:[
        /*black:*/ '#131313',
        /*red:*/ '#e72b22',
        /*green:*/ '#41d643',
        /*yellow:*/ '#C7C329',
       /* blue:*/ '#0a3bff',
       /* magenta:*/ '#a350a2',
       /* cyan:*/ '#20b0c6',
       /* white:*/ '#e7e7e7',
       /* lightBlack:*/ '#777777',
       /* lightRed:*/ '#d74343',
       /* lightGreen:*/ '#67F86F',
       /* lightYellow:*/ '#FFFA72',
       /* lightBlue:*/ '#438ac4',
       /* lightMagenta:*/ '#b44feb',
       /* lightCyan:*/ '#68FDFE',
       /* lightWhite:*/ '#ffffff',
       /* limeGreen:*/ '#32CD32',
       /* lightCoral:*/ '#ff4e4e',
    ],
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: #4c4c4c;
      }
      .tabs_nav .tabs_title {
        color: #4c4c4c;
      }
      .tab_active{
        background-color: #190011
        span  {
          color:white;
        }
      }
    `
  });
}
