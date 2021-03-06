// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SwitcherOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SwitcherOutlined';

export default {
  name: 'IconSwitcherOutlined',
  displayName: 'SwitcherOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SwitcherOutlinedSvg } },
      children,
    ),
};