// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FlagFilledSvg from '@whalue-design/icons-svg/lib/asn/FlagFilled';

export default {
  name: 'IconFlagFilled',
  displayName: 'FlagFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FlagFilledSvg } },
      children,
    ),
};