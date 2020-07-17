// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MobileFilledSvg from '@whalue-design/icons-svg/lib/asn/MobileFilled';

export default {
  name: 'IconMobileFilled',
  displayName: 'MobileFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MobileFilledSvg } },
      children,
    ),
};