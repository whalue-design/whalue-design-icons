// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FrownOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FrownOutlined';

export default {
  name: 'IconFrownOutlined',
  displayName: 'FrownOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FrownOutlinedSvg } },
      children,
    ),
};