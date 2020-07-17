// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WeiboOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WeiboOutlined';

export default {
  name: 'IconWeiboOutlined',
  displayName: 'WeiboOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WeiboOutlinedSvg } },
      children,
    ),
};