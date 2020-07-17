// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WeiboCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WeiboCircleOutlined';

export default {
  name: 'IconWeiboCircleOutlined',
  displayName: 'WeiboCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WeiboCircleOutlinedSvg } },
      children,
    ),
};