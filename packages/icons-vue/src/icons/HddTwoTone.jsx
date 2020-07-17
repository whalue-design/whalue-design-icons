// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HddTwoToneSvg from '@whalue-design/icons-svg/lib/asn/HddTwoTone';

export default {
  name: 'IconHddTwoTone',
  displayName: 'HddTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HddTwoToneSvg } },
      children,
    ),
};