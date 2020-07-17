// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AntCloudOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AntCloudOutlined';

export default {
  name: 'IconAntCloudOutlined',
  displayName: 'AntCloudOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AntCloudOutlinedSvg } },
      children,
    ),
};