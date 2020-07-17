// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GiftTwoToneSvg from '@whalue-design/icons-svg/lib/asn/GiftTwoTone';

export default {
  name: 'IconGiftTwoTone',
  displayName: 'GiftTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GiftTwoToneSvg } },
      children,
    ),
};