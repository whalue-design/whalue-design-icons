// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BellTwoToneSvg from '@whalue-design/icons-svg/lib/asn/BellTwoTone';

export default {
  name: 'IconBellTwoTone',
  displayName: 'BellTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BellTwoToneSvg } },
      children,
    ),
};