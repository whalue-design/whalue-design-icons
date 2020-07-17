// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ControlTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ControlTwoTone';

export default {
  name: 'IconControlTwoTone',
  displayName: 'ControlTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ControlTwoToneSvg } },
      children,
    ),
};