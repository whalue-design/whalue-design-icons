// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FireFilledSvg from '@whalue-design/icons-svg/lib/asn/FireFilled';

export default {
  name: 'IconFireFilled',
  displayName: 'FireFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FireFilledSvg } },
      children,
    ),
};