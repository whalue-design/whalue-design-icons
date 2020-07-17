// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ZhihuSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/ZhihuSquareFilled';

export default {
  name: 'IconZhihuSquareFilled',
  displayName: 'ZhihuSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ZhihuSquareFilledSvg } },
      children,
    ),
};