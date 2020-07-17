// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CrownFilledSvg from '@whalue-design/icons-svg/lib/asn/CrownFilled';

export default {
  name: 'IconCrownFilled',
  displayName: 'CrownFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CrownFilledSvg } },
      children,
    ),
};