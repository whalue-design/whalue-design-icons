// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloudServerOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CloudServerOutlined';

export default {
  name: 'IconCloudServerOutlined',
  displayName: 'CloudServerOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudServerOutlinedSvg } },
      children,
    ),
};