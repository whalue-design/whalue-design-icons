// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MacCommandFilledSvg from '@whalue-design/icons-svg/lib/asn/MacCommandFilled';

export default {
  name: 'IconMacCommandFilled',
  displayName: 'MacCommandFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MacCommandFilledSvg } },
      children,
    ),
};