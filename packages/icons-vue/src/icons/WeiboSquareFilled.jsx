// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WeiboSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/WeiboSquareFilled';

export default {
  name: 'IconWeiboSquareFilled',
  displayName: 'WeiboSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WeiboSquareFilledSvg } },
      children,
    ),
};