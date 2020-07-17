// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GifOutlinedSvg from '@whalue-design/icons-svg/lib/asn/GifOutlined';

export default {
  name: 'IconGifOutlined',
  displayName: 'GifOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GifOutlinedSvg } },
      children,
    ),
};