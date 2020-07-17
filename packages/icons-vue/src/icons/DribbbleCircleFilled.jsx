// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DribbbleCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/DribbbleCircleFilled';

export default {
  name: 'IconDribbbleCircleFilled',
  displayName: 'DribbbleCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DribbbleCircleFilledSvg } },
      children,
    ),
};