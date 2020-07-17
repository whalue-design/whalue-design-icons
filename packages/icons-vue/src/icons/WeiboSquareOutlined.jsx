// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WeiboSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WeiboSquareOutlined';

export default {
  name: 'IconWeiboSquareOutlined',
  displayName: 'WeiboSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WeiboSquareOutlinedSvg } },
      children,
    ),
};