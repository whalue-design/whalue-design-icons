// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DislikeTwoToneSvg from '@whalue-design/icons-svg/lib/asn/DislikeTwoTone';

export default {
  name: 'IconDislikeTwoTone',
  displayName: 'DislikeTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DislikeTwoToneSvg } },
      children,
    ),
};