// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WifiOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WifiOutlined';

export default {
  name: 'IconWifiOutlined',
  displayName: 'WifiOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WifiOutlinedSvg } },
      children,
    ),
};