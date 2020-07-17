// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FastForwardFilledSvg from '@whalue-design/icons-svg/lib/asn/FastForwardFilled';

export default {
  name: 'IconFastForwardFilled',
  displayName: 'FastForwardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FastForwardFilledSvg } },
      children,
    ),
};