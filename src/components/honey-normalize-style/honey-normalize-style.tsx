import {Component, getAssetPath, h} from '@stencil/core';

@Component({
  tag: 'honey-normalize-style',
  assetsDirs: ['assets']
})
export class HoneyNormalizeStyle {

  render() {
    const stylePath: string = getAssetPath('./assets/normalize.css');
    return <link rel="stylesheet" href={stylePath}/>
  }
}
