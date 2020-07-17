// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WechatOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WechatOutlined';

export default {
  name: 'IconWechatOutlined',
  displayName: 'WechatOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WechatOutlinedSvg } },
      children,
    ),
};