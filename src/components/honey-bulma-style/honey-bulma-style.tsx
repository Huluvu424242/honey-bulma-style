import {Component, getAssetPath, h} from '@stencil/core';

@Component({
  tag: 'honey-bulma-style',
  assetsDirs: ['assets']
})
export class HoneyBulmaStyle {

  render() {
    const stylePath: string = getAssetPath('./assets/bulma.css');
    return <link rel="stylesheet" href={stylePath}/>
  }
}
