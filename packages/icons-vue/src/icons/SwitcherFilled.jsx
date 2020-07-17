// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SwitcherFilledSvg from '@whalue-design/icons-svg/lib/asn/SwitcherFilled';

export default {
  name: 'IconSwitcherFilled',
  displayName: 'SwitcherFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SwitcherFilledSvg } },
      children,
    ),
};