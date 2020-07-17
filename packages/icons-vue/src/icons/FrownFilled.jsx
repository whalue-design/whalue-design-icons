// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FrownFilledSvg from '@whalue-design/icons-svg/lib/asn/FrownFilled';

export default {
  name: 'IconFrownFilled',
  displayName: 'FrownFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FrownFilledSvg } },
      children,
    ),
};