// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GiftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/GiftOutlined';

export default {
  name: 'IconGiftOutlined',
  displayName: 'GiftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GiftOutlinedSvg } },
      children,
    ),
};