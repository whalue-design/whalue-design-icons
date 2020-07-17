// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloudFilledSvg from '@whalue-design/icons-svg/lib/asn/CloudFilled';

export default {
  name: 'IconCloudFilled',
  displayName: 'CloudFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudFilledSvg } },
      children,
    ),
};