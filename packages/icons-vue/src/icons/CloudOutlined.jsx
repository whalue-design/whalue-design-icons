// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloudOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CloudOutlined';

export default {
  name: 'IconCloudOutlined',
  displayName: 'CloudOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudOutlinedSvg } },
      children,
    ),
};