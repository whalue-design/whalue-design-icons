// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SwitcherTwoToneSvg from '@whalue-design/icons-svg/lib/asn/SwitcherTwoTone';

export default {
  name: 'IconSwitcherTwoTone',
  displayName: 'SwitcherTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SwitcherTwoToneSvg } },
      children,
    ),
};