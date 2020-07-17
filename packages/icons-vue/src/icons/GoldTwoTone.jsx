// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GoldTwoToneSvg from '@whalue-design/icons-svg/lib/asn/GoldTwoTone';

export default {
  name: 'IconGoldTwoTone',
  displayName: 'GoldTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GoldTwoToneSvg } },
      children,
    ),
};