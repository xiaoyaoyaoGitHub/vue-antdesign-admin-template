import client from 'webpack-theme-color-replacer/client'
const generate = require('@ant-design/colors/dist').generate
export default {
  getAntdSerials(color) {
    // 淡化（即less的tint）
    const lightens = new Array(9).fill().map((t, i) => {
      return client.varyColor.lighten(color, i / 10)
    })
    // colorPalette变换得到颜色值
    const colorPalettes = generate(color)
    const rgb = client.varyColor.toNum3(color.replace('#', '')).join(',')
    return lightens.concat(colorPalettes).concat(rgb)
    // return color
  },
  changeColor(newColor) {
    var options = {
      newColors: this.getAntdSerials(newColor), // new colors array, one-to-one corresponde with `matchColors`
      changeUrl(cssUrl) {
        return `./${cssUrl}` // while router is not `hash` mode, it needs absolute path
      },
    }
    return client.changer.changeColor(options, Promise)
  },
}
