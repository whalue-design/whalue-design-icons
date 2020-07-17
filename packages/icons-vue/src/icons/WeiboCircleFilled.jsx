// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WeiboCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/WeiboCircleFilled';

export default {
  name: 'IconWeiboCircleFilled',
  displayName: 'WeiboCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WeiboCircleFilledSvg } },
      children,
    ),
};