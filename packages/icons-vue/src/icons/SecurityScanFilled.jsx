// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SecurityScanFilledSvg from '@whalue-design/icons-svg/lib/asn/SecurityScanFilled';

export default {
  name: 'IconSecurityScanFilled',
  displayName: 'SecurityScanFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SecurityScanFilledSvg } },
      children,
    ),
};