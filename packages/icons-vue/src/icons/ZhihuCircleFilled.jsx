// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ZhihuCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/ZhihuCircleFilled';

export default {
  name: 'IconZhihuCircleFilled',
  displayName: 'ZhihuCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ZhihuCircleFilledSvg } },
      children,
    ),
};